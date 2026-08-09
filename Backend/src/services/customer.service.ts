import prisma from "../lib/prisma";
import { CustomerType, CustomerStatus, Prisma } from "@prisma/client";

export class CustomerService {
  
  public static async getAllCustomers(params: {
    page: number;
    limit: number;
    search?: string;
    status?: CustomerStatus;
  }) {
    const { page, limit, search, status } = params;
    const skip = (page - 1) * limit;

    
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

  
  public static async getCustomerById(id: string) {
    return prisma.customer.findUnique({
      where: { id },
    });
  }

  
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

  
  public static async updateCustomer(id: string, data: Prisma.CustomerUpdateInput) {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }

  
  public static async softDeleteCustomer(id: string) {
    return prisma.customer.update({
      where: { id },
      data: { status: CustomerStatus.INACTIVE },
    });
  }
}
