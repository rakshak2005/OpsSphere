"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerSchema = exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../generated/prisma");
exports.createCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        customerName: zod_1.z
            .string({ required_error: "Customer name is required" })
            .trim()
            .min(2, "Customer name must be at least 2 characters"),
        mobile: zod_1.z
            .string({ required_error: "Mobile is required" })
            .trim()
            .min(10, "Mobile must be at least 10 digits"),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .trim()
            .email("Invalid email address"),
        businessName: zod_1.z.string().trim().optional().nullable(),
        gstNumber: zod_1.z.string().trim().optional().nullable(),
        customerType: zod_1.z
            .nativeEnum(prisma_1.CustomerType, {
            invalid_type_error: "Invalid customer type",
        })
            .default(prisma_1.CustomerType.WHOLESALE),
        address: zod_1.z
            .string({ required_error: "Address is required" })
            .trim()
            .min(5, "Address must be at least 5 characters"),
        status: zod_1.z
            .nativeEnum(prisma_1.CustomerStatus, {
            invalid_type_error: "Invalid customer status",
        })
            .default(prisma_1.CustomerStatus.LEAD),
        followUpDate: zod_1.z
            .string()
            .datetime({ message: "Invalid date format (ISO-8601 required)" })
            .optional()
            .nullable(),
        notes: zod_1.z.string().trim().optional().nullable(),
    }),
});
exports.updateCustomerSchema = zod_1.z.object({
    body: exports.createCustomerSchema.shape.body.partial(),
});
//# sourceMappingURL=customer.schema.js.map