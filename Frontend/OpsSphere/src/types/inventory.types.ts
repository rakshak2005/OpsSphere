import type { MovementType } from "./enums";
import type { Product } from "./product.types";
import type { User } from "./auth.types";

export interface InventoryMovement {
  id: string;
  productId: string;
  quantity: number;
  type: MovementType;
  reason?: string | null;
  createdById: string;
  createdAt: string;
  product?: Product;
  createdBy?: User;
}

export interface InventoryMovementListResponse {
  movements: InventoryMovement[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
