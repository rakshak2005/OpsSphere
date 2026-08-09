import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export class ProductService {
  
  public static async getAllProducts(params: {
    page: number;
    limit: number;
    search?: string;
    category?: string;
    lowStockOnly?: boolean;
  }) {
    const { page, limit, search, category, lowStockOnly } = params;
    const skip = (page - 1) * limit;

    
    const where: Prisma.ProductWhereInput = {};

    if (category) {
      where.category = { equals: category, mode: "insensitive" };
    }

    if (search) {
      where.OR = [
        { productName: { contains: search, mode: "insensitive" } },
        { sku: { contains: search, mode: "insensitive" } },
      ];
    }

    if (lowStockOnly) {
      
      where.currentStock = {
        lte: prisma.product.fields.minimumStock,
      };
    }

    const [total, products] = await Promise.all([
      prisma.product.count({ where }),
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  
  public static async getProductById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  
  public static async createProduct(data: {
    productName: string;
    sku: string;
    category: string;
    unitPrice: number;
    currentStock: number;
    minimumStock: number;
    warehouseLocation?: string | null;
  }) {
    return prisma.product.create({
      data,
    });
  }

  
  public static async updateProduct(id: string, data: Prisma.ProductUpdateInput) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  
  public static async deleteProduct(id: string) {
    return prisma.product.delete({
      where: { id },
    });
  }
}
