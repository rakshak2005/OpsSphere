import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { CreateUserInput } from "../schemas/user.schema";

export class UserService {
  
  public static async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  
  public static async getUserBySecretCode(secretCode: string) {
    return prisma.user.findUnique({
      where: { secretCode },
    });
  }

  
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

  
  public static async createUser(input: CreateUserInput["body"]) {
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);

    
    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
        role: input.role as any, 
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

  
  public static async updatePassword(id: string, newPassword: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    return prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  
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

  
  public static async logActivity(userId: string, action: string, details?: string) {
    return prisma.userActivity.create({
      data: {
        userId,
        action,
        details,
      },
    });
  }

  
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
