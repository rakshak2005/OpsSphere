import { apiClient } from "./api";
import type { Challan, ChallanListResponse } from "../types/challan.types";

export const ChallanService = {
  getAll: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<ChallanListResponse> => {
    const response = await apiClient.get<{ success: boolean; data: ChallanListResponse }>(
      "/challans",
      { params }
    );
    return response.data.data;
  },

  getById: async (id: string): Promise<Challan> => {
    const response = await apiClient.get<{ success: boolean; data: Challan }>(
      `/challans/${id}`
    );
    return response.data.data;
  },

  createDraft: async (payload: {
    customerId: string;
    items: { productId: string; quantity: number }[];
    notes?: string;
  }): Promise<Challan> => {
    const response = await apiClient.post<{ success: boolean; data: Challan }>(
      "/challans",
      payload
    );
    return response.data.data;
  },

  confirm: async (id: string): Promise<Challan> => {
    const response = await apiClient.patch<{ success: boolean; data: Challan }>(
      `/challans/${id}/confirm`
    );
    return response.data.data;
  },

  cancel: async (id: string): Promise<Challan> => {
    const response = await apiClient.patch<{ success: boolean; data: Challan }>(
      `/challans/${id}/cancel`
    );
    return response.data.data;
  },
};
