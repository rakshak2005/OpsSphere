"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const client_1 = require("@prisma/client");
class InventoryService {
    /**
     * Add stock to product and write IN movement record in an atomic transaction.
     */
    static async addStock(data) {
        const { productId, quantity, reason, createdById } = data;
        return prisma_1.default.$transaction(async (tx) => {
            // 1. Confirm product exists
            const productExists = await tx.product.findUnique({
                where: { id: productId },
            });
            if (!productExists) {
                throw { statusCode: 404, message: "Product not found" };
            }
            // 2. Increment stock level
            const updatedProduct = await tx.product.update({
                where: { id: productId },
                data: {
                    currentStock: { increment: quantity },
                },
            });
            // 3. Create audit movement row
            const movement = await tx.inventoryMovement.create({
                data: {
                    productId,
                    quantity,
                    type: client_1.MovementType.IN,
                    reason,
                    createdById,
                },
            });
            return { product: updatedProduct, movement };
        });
    }
    /**
     * Remove stock from product and write OUT movement record, preventing negative stock levels.
     */
    static async removeStock(data) {
        const { productId, quantity, reason, createdById } = data;
        return prisma_1.default.$transaction(async (tx) => {
            // 1. Fetch current stock count
            const product = await tx.product.findUnique({
                where: { id: productId },
            });
            if (!product) {
                throw { statusCode: 404, message: "Product not found" };
            }
            // 2. Prevent negative inventory bounds
            if (product.currentStock < quantity) {
                throw {
                    statusCode: 400,
                    message: `Insufficient stock levels. Product currently has ${product.currentStock} units available, requested reduction is ${quantity} units.`,
                };
            }
            // 3. Decrement stock level
            const updatedProduct = await tx.product.update({
                where: { id: productId },
                data: {
                    currentStock: { decrement: quantity },
                },
            });
            // 4. Create audit movement row
            const movement = await tx.inventoryMovement.create({
                data: {
                    productId,
                    quantity,
                    type: client_1.MovementType.OUT,
                    reason,
                    createdById,
                },
            });
            return { product: updatedProduct, movement };
        });
    }
    /**
     * Fetch paginated audit movement logs.
     */
    static async getMovements(params) {
        const { page, limit, productId, type } = params;
        const skip = (page - 1) * limit;
        const where = {};
        if (productId)
            where.productId = productId;
        if (type)
            where.type = type;
        const [total, movements] = await Promise.all([
            prisma_1.default.inventoryMovement.count({ where }),
            prisma_1.default.inventoryMovement.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
                include: {
                    product: {
                        select: {
                            productName: true,
                            sku: true,
                        },
                    },
                    createdBy: {
                        select: {
                            name: true,
                            role: true,
                        },
                    },
                },
            }),
        ]);
        return {
            movements,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map