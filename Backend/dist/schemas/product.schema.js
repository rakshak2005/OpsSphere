"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        productName: zod_1.z
            .string({ required_error: "Product name is required" })
            .trim()
            .min(2, "Product name must be at least 2 characters"),
        sku: zod_1.z
            .string({ required_error: "SKU is required" })
            .trim()
            .min(2, "SKU must be at least 2 characters"),
        category: zod_1.z
            .string({ required_error: "Category is required" })
            .trim()
            .min(2, "Category name must be at least 2 characters"),
        unitPrice: zod_1.z
            .number({ required_error: "Unit price is required" })
            .positive("Unit price must be greater than zero"),
        currentStock: zod_1.z
            .number()
            .int("Stock must be an integer")
            .nonnegative("Stock cannot be negative")
            .default(0),
        minimumStock: zod_1.z
            .number()
            .int("Minimum stock must be an integer")
            .nonnegative("Minimum stock alert quantity cannot be negative")
            .default(5),
        warehouseLocation: zod_1.z.string().trim().optional().nullable(),
    }),
});
exports.updateProductSchema = zod_1.z.object({
    body: exports.createProductSchema.shape.body.partial(),
});
//# sourceMappingURL=product.schema.js.map