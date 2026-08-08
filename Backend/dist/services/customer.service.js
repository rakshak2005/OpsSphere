"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const prisma_2 = require("../generated/prisma");
class CustomerService {
    /**
     * Fetch all customers with fuzzy search, status filters, and pagination.
     */
    static async getAllCustomers(params) {
        const { page, limit, search, status } = params;
        const skip = (page - 1) * limit;
        // Build the query where clause
        const where = {};
        if (status) {
            where.status = status;
        }
        if (search) {
            where.OR = [
                { customerName: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { mobile: { contains: search, mode: "insensitive" } },
                { businessName: { contains: search, mode: "insensitive" } },
            ];
        }
        const [total, customers] = await Promise.all([
            prisma_1.default.customer.count({ where }),
            prisma_1.default.customer.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }),
        ]);
        return {
            customers,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    /**
     * Fetch a single customer by ID.
     */
    static async getCustomerById(id) {
        return prisma_1.default.customer.findUnique({
            where: { id },
        });
    }
    /**
     * Create a new customer record.
     */
    static async createCustomer(data) {
        return prisma_1.default.customer.create({
            data,
        });
    }
    /**
     * Update an existing customer record.
     */
    static async updateCustomer(id, data) {
        return prisma_1.default.customer.update({
            where: { id },
            data,
        });
    }
    /**
     * Soft delete customer by marking status as INACTIVE.
     */
    static async softDeleteCustomer(id) {
        return prisma_1.default.customer.update({
            where: { id },
            data: { status: prisma_2.CustomerStatus.INACTIVE },
        });
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map