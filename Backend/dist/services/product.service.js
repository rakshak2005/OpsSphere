"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class ProductService {
    /**
     * Fetch all products with fuzzy search, low-stock checks, category filter, and pagination.
     */
    static async getAllProducts(params) {
        const { page, limit, search, category, lowStockOnly } = params;
        const skip = (page - 1) * limit;
        // Build the query where clause
        const where = {};
        if (category) {
            where.category = { equals: category, mode: "insensitive" };
        }
        if (search) {
            where.OR = [
                { productName: { contains: search, mode: "insensitive" } },
                { sku: { contains: search, mode: "insensitive" } },
            ];
        }
        if (lowStockOnly) {
            // Fetch items where current stock matches or falls below minimum threshold levels
            where.currentStock = {
                lte: prisma_1.default.product.fields.minimumStock,
            };
        }
        const [total, products] = await Promise.all([
            prisma_1.default.product.count({ where }),
            prisma_1.default.product.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }),
        ]);
        return {
            products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    /**
     * Fetch a single product by ID.
     */
    static async getProductById(id) {
        return prisma_1.default.product.findUnique({
            where: { id },
        });
    }
    /**
     * Create a new product.
     */
    static async createProduct(data) {
        return prisma_1.default.product.create({
            data,
        });
    }
    /**
     * Update an existing product.
     */
    static async updateProduct(id, data) {
        return prisma_1.default.product.update({
            where: { id },
            data,
        });
    }
    /**
     * Delete product by ID.
     */
    static async deleteProduct(id) {
        return prisma_1.default.product.delete({
            where: { id },
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map