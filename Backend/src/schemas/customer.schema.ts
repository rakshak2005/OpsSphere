import { z } from "zod";
import { CustomerType, CustomerStatus } from "../generated/prisma";

export const createCustomerSchema = z.object({
  body: z.object({
    customerName: z
      .string({ required_error: "Customer name is required" })
      .trim()
      .min(2, "Customer name must be at least 2 characters"),
    mobile: z
      .string({ required_error: "Mobile is required" })
      .trim()
      .min(10, "Mobile must be at least 10 digits"),
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email("Invalid email address"),
    businessName: z.string().trim().optional().nullable(),
    gstNumber: z.string().trim().optional().nullable(),
    customerType: z
      .nativeEnum(CustomerType, {
        invalid_type_error: "Invalid customer type",
      })
      .default(CustomerType.WHOLESALE),
    address: z
      .string({ required_error: "Address is required" })
      .trim()
      .min(5, "Address must be at least 5 characters"),
    status: z
      .nativeEnum(CustomerStatus, {
        invalid_type_error: "Invalid customer status",
      })
      .default(CustomerStatus.LEAD),
    followUpDate: z
      .string()
      .datetime({ message: "Invalid date format (ISO-8601 required)" })
      .optional()
      .nullable(),
    notes: z.string().trim().optional().nullable(),
  }),
});

export const updateCustomerSchema = z.object({
  body: createCustomerSchema.shape.body.partial(),
});
