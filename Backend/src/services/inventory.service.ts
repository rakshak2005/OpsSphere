import prisma from "../lib/prisma";
import { MovementType, Prisma } from "@prisma/client";

export class InventoryService {
  /**
   * Add stock to product and write IN movement record in an atomic transaction.
   */
  public static async addStock(data: {
    productId: string;
    quantity: number;
    reason: string;
    createdById: string;
  }) {
    const { productId, quantity, reason, createdById } = data;

    return prisma.$transaction(async (tx) => {
      // 1. Confirm product exists
      const productExists = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!productExists) {
        throw { statusCode: 404, message: "Product not found" };
      }

      // 2. Increment stock level
      const updatedProduct = await tx.product.update({
        where: { id: productId },
        data: {
          currentStock: { increment: quantity },
        },
      });

      // 3. Create audit movement row
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

  /**
   * Remove stock from product and write OUT movement record, preventing negative stock levels.
   */
  public static async removeStock(data: {
    productId: string;
    quantity: number;
    reason: string;
    createdById: string;
  }) {
    const { productId, quantity, reason, createdById } = data;

    return prisma.$transaction(async (tx) => {
      // 1. Fetch current stock count
      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw { statusCode: 404, message: "Product not found" };
      }

      // 2. Prevent negative inventory bounds
      if (product.currentStock < quantity) {
        throw {
          statusCode: 400,
          message: `Insufficient stock levels. Product currently has ${product.currentStock} units available, requested reduction is ${quantity} units.`,
        };
      }

      // 3. Decrement stock level
      const updatedProduct = await tx.product.update({
        where: { id: productId },
        data: {
          currentStock: { decrement: quantity },
        },
      });

      // 4. Create audit movement row
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

  /**
   * Fetch paginated audit movement logs.
   */
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
