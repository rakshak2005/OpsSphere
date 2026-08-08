import { z } from "zod";

// Match the Role enum from our Prisma client
export enum Role {
  ADMIN = "ADMIN",
  SALES = "SALES",
  WAREHOUSE = "WAREHOUSE",
  ACCOUNTS = "ACCOUNTS",
}

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .trim()
      .min(2, "Name must be at least 2 characters"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .trim()
      .email("Invalid email address"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, "Password must be at least 8 characters"),
    role: z
      .nativeEnum(Role, {
        required_error: "Role is required",
        invalid_type_error: "Invalid role value",
      })
      .default(Role.SALES),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .trim()
      .email("Invalid email address"),
    password: z.string({
      required_error: "Password is required",
    }),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;
