import { z } from "zod";

export const createChallanSchema = z.object({
  body: z.object({
    customerId: z
      .string({ required_error: "Customer ID is required" })
      .uuid("Invalid Customer ID format"),
    items: z
      .array(
        z.object({
          productId: z
            .string({ required_error: "Product ID is required" })
            .uuid("Invalid Product ID format"),
          quantity: z
            .number({ required_error: "Quantity is required" })
            .int("Quantity must be an integer")
            .positive("Quantity must be greater than zero"),
        })
      )
      .nonempty("At least one product item is required to issue a challan"),
  }),
});

export const updateChallanSchema = z.object({
  body: createChallanSchema.shape.body.partial(),
});
