import type { CustomerType, CustomerStatus } from "./enums";

export interface Customer {
  id: string;
  customerName: string;
  mobile: string;
  email: string;
  businessName?: string | null;
  gstNumber?: string | null;
  customerType: CustomerType;
  address: string;
  status: CustomerStatus;
  followUpDate?: string | null;
  notes?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerListResponse {
  customers: Customer[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
