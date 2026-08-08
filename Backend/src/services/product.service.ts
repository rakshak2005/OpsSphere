import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export class ProductService {
  /**
   * Fetch all products with fuzzy search, low-stock checks, category filter, and pagination.
   */
  public static async getAllProducts(params: {
    page: number;
    limit: number;
    search?: string;
    category?: string;
    lowStockOnly?: boolean;
  }) {
    const { page, limit, search, category, lowStockOnly } = params;
    const skip = (page - 1) * limit;

    // Build the query where clause
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
      // Fetch items where current stock matches or falls below minimum threshold levels
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

  /**
   * Fetch a single product by ID.
   */
  public static async getProductById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  /**
   * Create a new product.
   */
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

  /**
   * Update an existing product.
   */
  public static async updateProduct(id: string, data: Prisma.ProductUpdateInput) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete product by ID.
   */
  public static async deleteProduct(id: string) {
    return prisma.product.delete({
      where: { id },
    });
  }
}
