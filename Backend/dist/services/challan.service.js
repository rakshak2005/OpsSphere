"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallanService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const client_1 = require("@prisma/client");
class ChallanService {
    /**
     * Fetch all challans with pagination and status filters.
     */
    static async getAllChallans(params) {
        const { page, limit, status, customerId } = params;
        const skip = (page - 1) * limit;
        const where = {};
        if (status)
            where.status = status;
        if (customerId)
            where.customerId = customerId;
        const [total, challans] = await Promise.all([
            prisma_1.default.challan.count({ where }),
            prisma_1.default.challan.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
                include: {
                    customer: {
                        select: {
                            customerName: true,
                            businessName: true,
                        },
                    },
                    createdBy: {
                        select: {
                            name: true,
                        },
                    },
                },
            }),
        ]);
        return {
            challans,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    /**
     * Fetch details of a single challan by ID, including items and snapshots.
     */
    static async getChallanById(id) {
        return prisma_1.default.challan.findUnique({
            where: { id },
            include: {
                customer: true,
                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        role: true,
                    },
                },
                items: true,
            },
        });
    }
    /**
     * Create a new Challan in DRAFT status.
     * Auto-generates a unique challanNumber and records catalog item data snapshots.
     */
    static async createDraftChallan(data) {
        const { customerId, createdById, items } = data;
        return prisma_1.default.$transaction(async (tx) => {
            // 1. Generate sequential challan number
            const count = await tx.challan.count();
            const currentYear = new Date().getFullYear();
            const challanNumber = `CH-${currentYear}-${String(count + 1).padStart(5, "0")}`;
            // 2. Fetch all products to create historical data snapshots
            const productIds = items.map((i) => i.productId);
            const products = await tx.product.findMany({
                where: { id: { in: productIds } },
            });
            if (products.length !== items.length) {
                throw { statusCode: 404, message: "One or more products not found" };
            }
            // Create product lookup map
            const productMap = new Map(products.map((p) => [p.id, p]));
            // 3. Insert the draft Challan record
            const challan = await tx.challan.create({
                data: {
                    challanNumber,
                    customerId,
                    createdById,
                    status: client_1.ChallanStatus.DRAFT,
                },
            });
            // 4. Create the ChallanItem rows with product snapshots
            const challanItemsData = items.map((item) => {
                const product = productMap.get(item.productId);
                return {
                    challanId: challan.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    productNameSnapshot: product.productName,
                    skuSnapshot: product.sku,
                    unitPriceSnapshot: product.unitPrice,
                };
            });
            await tx.challanItem.createMany({
                data: challanItemsData,
            });
            // Fetch complete draft with items
            return tx.challan.findUnique({
                where: { id: challan.id },
                include: { items: true },
            });
        });
    }
    /**
     * Confirm a Challan.
     * Decrements stock and writes OUT movement records. Ensures stock doesn't go negative.
     */
    static async confirmChallan(id, userId) {
        return prisma_1.default.$transaction(async (tx) => {
            // 1. Fetch Challan details
            const challan = await tx.challan.findUnique({
                where: { id },
                include: { items: true },
            });
            if (!challan) {
                throw { statusCode: 404, message: "Challan not found" };
            }
            if (challan.status !== client_1.ChallanStatus.DRAFT) {
                throw {
                    statusCode: 400,
                    message: `Only draft challans can be confirmed. Current status: ${challan.status}`,
                };
            }
            // 2. Lock and validate stock level for each item
            for (const item of challan.items) {
                const product = await tx.product.findUnique({
                    where: { id: item.productId },
                });
                if (!product) {
                    throw {
                        statusCode: 404,
                        message: `Product reference ${item.productId} not found`,
                    };
                }
                if (product.currentStock < item.quantity) {
                    throw {
                        statusCode: 400,
                        message: `Insufficient stock for product [${product.productName}]. Current stock: ${product.currentStock}, required: ${item.quantity}`,
                    };
                }
                // 3. Decrement product stock
                await tx.product.update({
                    where: { id: item.productId },
                    data: {
                        currentStock: { decrement: item.quantity },
                    },
                });
                // 4. Create audit stock movement
                await tx.inventoryMovement.create({
                    data: {
                        productId: item.productId,
                        quantity: item.quantity,
                        type: client_1.MovementType.OUT,
                        reason: `Challan Dispatch: ${challan.challanNumber}`,
                        createdById: userId,
                    },
                });
            }
            // 5. Update Challan status to CONFIRMED
            return tx.challan.update({
                where: { id },
                data: { status: client_1.ChallanStatus.CONFIRMED },
                include: { items: true },
            });
        });
    }
    /**
     * Cancel a Challan.
     * If previously confirmed, restores the stock levels and logs IN movement audits.
     */
    static async cancelChallan(id, userId) {
        return prisma_1.default.$transaction(async (tx) => {
            // 1. Fetch Challan details
            const challan = await tx.challan.findUnique({
                where: { id },
                include: { items: true },
            });
            if (!challan) {
                throw { statusCode: 404, message: "Challan not found" };
            }
            if (challan.status === client_1.ChallanStatus.CANCELLED) {
                throw { statusCode: 400, message: "Challan is already cancelled" };
            }
            const previouslyConfirmed = challan.status === client_1.ChallanStatus.CONFIRMED;
            // 2. If confirmed previously, reverse stock levels
            if (previouslyConfirmed) {
                for (const item of challan.items) {
                    // Increment product stock
                    await tx.product.update({
                        where: { id: item.productId },
                        data: {
                            currentStock: { increment: item.quantity },
                        },
                    });
                    // Create audit stock movement
                    await tx.inventoryMovement.create({
                        data: {
                            productId: item.productId,
                            quantity: item.quantity,
                            type: client_1.MovementType.IN,
                            reason: `Challan Cancellation Reversal: ${challan.challanNumber}`,
                            createdById: userId,
                        },
                    });
                }
            }
            // 3. Set status to CANCELLED
            return tx.challan.update({
                where: { id },
                data: { status: client_1.ChallanStatus.CANCELLED },
                include: { items: true },
            });
        });
    }
}
exports.ChallanService = ChallanService;
//# sourceMappingURL=challan.service.js.map