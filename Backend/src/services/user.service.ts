import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { CreateUserInput } from "../schemas/user.schema";

export class UserService {
  /**
   * Look up a user by email.
   * Internal method used during registration checks and login authentication.
   */
  public static async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Look up a user by ID, returning details without the password hash.
   */
  public static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  /**
   * Hash password and insert user into the database.
   */
  public static async createUser(input: CreateUserInput["body"]) {
    // Generate bcrypt salt and hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);

    // Save user record
    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
        role: input.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  }
}
