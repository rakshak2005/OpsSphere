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
   * Look up a user by secret code.
   */
  public static async getUserBySecretCode(secretCode: string) {
    return prisma.user.findUnique({
      where: { secretCode },
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
        secretCode: true,
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
        role: input.role as any, // Cast to any to align with generated prisma types
        secretCode: input.secretCode,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        secretCode: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  }

  /**
   * Update password for a particular user.
   */
  public static async updatePassword(id: string, newPassword: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    return prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  /**
   * Fetch all users for Admin management.
   */
  public static async getAllUsers() {
    return prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        secretCode: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  /**
   * Save a record in the activities audit log.
   */
  public static async logActivity(userId: string, action: string, details?: string) {
    return prisma.userActivity.create({
      data: {
        userId,
        action,
        details,
      },
    });
  }

  /**
   * Fetch audit activity logs for ADMIN access.
   */
  public static async getActivityLogs() {
    return prisma.userActivity.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: {
        user: {
          select: {
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }
}
