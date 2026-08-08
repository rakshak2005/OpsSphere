import { apiClient } from "./api";
import type { Customer, CustomerListResponse } from "../types/customer.types";

export const CustomerService = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
  }): Promise<CustomerListResponse> => {
    const response = await apiClient.get<{ success: boolean; data: CustomerListResponse }>(
      "/customers",
      { params }
    );
    return response.data.data;
  },

  getById: async (id: string): Promise<Customer> => {
    const response = await apiClient.get<{ success: boolean; data: Customer }>(
      `/customers/${id}`
    );
    return response.data.data;
  },

  create: async (data: Partial<Customer>): Promise<Customer> => {
    const response = await apiClient.post<{ success: boolean; data: Customer }>(
      "/customers",
      data
    );
    return response.data.data;
  },

  update: async (id: string, data: Partial<Customer>): Promise<Customer> => {
    const response = await apiClient.put<{ success: boolean; data: Customer }>(
      `/customers/${id}`,
      data
    );
    return response.data.data;
  },

  addNote: async (id: string, note: string): Promise<Customer> => {
    const response = await apiClient.patch<{ success: boolean; data: Customer }>(
      `/customers/${id}/notes`,
      { note }
    );
    return response.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/customers/${id}`);
  },
};
