import { apiClient } from "./api";
import type { Product, ProductListResponse } from "../types/product.types";

export const ProductService = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
  }): Promise<ProductListResponse> => {
    const response = await apiClient.get<{ success: boolean; data: ProductListResponse }>(
      "/products",
      { params }
    );
    return response.data.data;
  },

  getById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<{ success: boolean; data: Product }>(
      `/products/${id}`
    );
    return response.data.data;
  },

  create: async (data: Partial<Product>): Promise<Product> => {
    const response = await apiClient.post<{ success: boolean; data: Product }>(
      "/products",
      data
    );
    return response.data.data;
  },

  update: async (id: string, data: Partial<Product>): Promise<Product> => {
    const response = await apiClient.put<{ success: boolean; data: Product }>(
      `/products/${id}`,
      data
    );
    return response.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/products/${id}`);
  },
};
