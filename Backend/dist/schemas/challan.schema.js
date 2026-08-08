"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateChallanSchema = exports.createChallanSchema = void 0;
const zod_1 = require("zod");
exports.createChallanSchema = zod_1.z.object({
    body: zod_1.z.object({
        customerId: zod_1.z
            .string({ required_error: "Customer ID is required" })
            .uuid("Invalid Customer ID format"),
        items: zod_1.z
            .array(zod_1.z.object({
            productId: zod_1.z
                .string({ required_error: "Product ID is required" })
                .uuid("Invalid Product ID format"),
            quantity: zod_1.z
                .number({ required_error: "Quantity is required" })
                .int("Quantity must be an integer")
                .positive("Quantity must be greater than zero"),
        }))
            .nonempty("At least one product item is required to issue a challan"),
    }),
});
exports.updateChallanSchema = zod_1.z.object({
    body: exports.createChallanSchema.shape.body.partial(),
});
//# sourceMappingURL=challan.schema.js.map