import prisma from "../lib/prisma";
import { MovementType, Prisma } from "@prisma/client";

export class InventoryService {
  
  public static async addStock(data: {
    productId: string;
    quantity: number;
    reason: string;
    createdById: string;
  }) {
    const { productId, quantity, reason, createdById } = data;

    return prisma.$transaction(async (tx) => {
      
      const productExists = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!productExists) {
        throw { statusCode: 404, message: "Product not found" };
      }

      
      const updatedProduct = await tx.product.update({
        where: { id: productId },
        data: {
          currentStock: { increment: quantity },
        },
      });

      
      const movement = await tx.inventoryMovement.create({
        data: {
          productId,
          quantity,
          type: MovementType.IN,
          reason,
          createdById,
        },
      });

      return { product: updatedProduct, movement };
    });
  }

  
  public static async removeStock(data: {
    productId: string;
    quantity: number;
    reason: string;
    createdById: string;
  }) {
    const { productId, quantity, reason, createdById } = data;

    return prisma.$transaction(async (tx) => {
      
      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw { statusCode: 404, message: "Product not found" };
      }

      
      if (product.currentStock < quantity) {
        throw {
          statusCode: 400,
          message: `Insufficient stock levels. Product currently has ${product.currentStock} units available, requested reduction is ${quantity} units.`,
        };
      }

      
      const updatedProduct = await tx.product.update({
        where: { id: productId },
        data: {
          currentStock: { decrement: quantity },
        },
      });

      
      const movement = await tx.inventoryMovement.create({
        data: {
          productId,
          quantity,
          type: MovementType.OUT,
          reason,
          createdById,
        },
      });

      return { product: updatedProduct, movement };
    });
  }

  
  public static async getMovements(params: {
    page: number;
    limit: number;
    productId?: string;
    type?: MovementType;
  }) {
    const { page, limit, productId, type } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.InventoryMovementWhereInput = {};
    if (productId) where.productId = productId;
    if (type) where.type = type;

    const [total, movements] = await Promise.all([
      prisma.inventoryMovement.count({ where }),
      prisma.inventoryMovement.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          product: {
            select: {
              productName: true,
              sku: true,
              unitPrice: true,
            },
          },
          createdBy: {
            select: {
              name: true,
              role: true,
            },
          },
        },
      }),
    ]);

    return {
      movements,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
