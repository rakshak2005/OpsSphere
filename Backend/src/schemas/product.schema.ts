import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    productName: z
      .string({ required_error: "Product name is required" })
      .trim()
      .min(2, "Product name must be at least 2 characters"),
    sku: z
      .string({ required_error: "SKU is required" })
      .trim()
      .min(2, "SKU must be at least 2 characters"),
    category: z
      .string({ required_error: "Category is required" })
      .trim()
      .min(2, "Category name must be at least 2 characters"),
    unitPrice: z
      .number({ required_error: "Unit price is required" })
      .positive("Unit price must be greater than zero"),
    currentStock: z
      .number()
      .int("Stock must be an integer")
      .nonnegative("Stock cannot be negative")
      .default(0),
    minimumStock: z
      .number()
      .int("Minimum stock must be an integer")
      .nonnegative("Minimum stock alert quantity cannot be negative")
      .default(5),
    warehouseLocation: z.string().trim().optional().nullable(),
  }),
});

export const updateProductSchema = z.object({
  body: createProductSchema.shape.body.partial(),
});
