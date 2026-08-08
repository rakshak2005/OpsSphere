import prisma from "../lib/prisma";
import { CustomerType, CustomerStatus, Prisma } from "../generated/prisma";

export class CustomerService {
  /**
   * Fetch all customers with fuzzy search, status filters, and pagination.
   */
  public static async getAllCustomers(params: {
    page: number;
    limit: number;
    search?: string;
    status?: CustomerStatus;
  }) {
    const { page, limit, search, status } = params;
    const skip = (page - 1) * limit;

    // Build the query where clause
    const where: Prisma.CustomerWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { customerName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { mobile: { contains: search, mode: "insensitive" } },
        { businessName: { contains: search, mode: "insensitive" } },
      ];
    }

    const [total, customers] = await Promise.all([
      prisma.customer.count({ where }),
      prisma.customer.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      customers,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Fetch a single customer by ID.
   */
  public static async getCustomerById(id: string) {
    return prisma.customer.findUnique({
      where: { id },
    });
  }

  /**
   * Create a new customer record.
   */
  public static async createCustomer(data: {
    customerName: string;
    mobile: string;
    email: string;
    businessName?: string | null;
    gstNumber?: string | null;
    customerType: CustomerType;
    address: string;
    status: CustomerStatus;
    followUpDate?: Date | null;
    notes?: string | null;
  }) {
    return prisma.customer.create({
      data,
    });
  }

  /**
   * Update an existing customer record.
   */
  public static async updateCustomer(id: string, data: Prisma.CustomerUpdateInput) {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }

  /**
   * Soft delete customer by marking status as INACTIVE.
   */
  public static async softDeleteCustomer(id: string) {
    return prisma.customer.update({
      where: { id },
      data: { status: CustomerStatus.INACTIVE },
    });
  }
}
