import type { ChallanStatus } from "./enums";
import type { Customer } from "./customer.types";
import type { Product } from "./product.types";
import type { User } from "./auth.types";

export interface ChallanItem {
  id: string;
  challanId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  productSnapshotName: string;
  productSnapshotSku: string;
  product?: Product;
}

export interface Challan {
  id: string;
  challanNumber: string;
  customerId: string;
  createdById: string;
  status: ChallanStatus;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
  customer?: Customer;
  createdBy?: User;
  items?: ChallanItem[];
}

export interface ChallanListResponse {
  challans: Challan[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
