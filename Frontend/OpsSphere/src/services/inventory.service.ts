import { apiClient } from "./api";
import type { InventoryMovement, InventoryMovementListResponse } from "../types/inventory.types";

export const InventoryService = {
  getMovements: async (params?: {
    page?: number;
    limit?: number;
    productId?: string;
  }): Promise<InventoryMovementListResponse> => {
    const response = await apiClient.get<{ success: boolean; data: InventoryMovementListResponse }>(
      "/inventory/movements",
      { params }
    );
    return response.data.data;
  },

  addStock: async (payload: {
    productId: string;
    quantity: number;
    reason?: string;
  }): Promise<InventoryMovement> => {
    const response = await apiClient.post<{ success: boolean; data: InventoryMovement }>(
      "/inventory/add-stock",
      payload
    );
    return response.data.data;
  },

  removeStock: async (payload: {
    productId: string;
    quantity: number;
    reason?: string;
  }): Promise<InventoryMovement> => {
    const response = await apiClient.post<{ success: boolean; data: InventoryMovement }>(
      "/inventory/remove-stock",
      payload
    );
    return response.data.data;
  },
};
