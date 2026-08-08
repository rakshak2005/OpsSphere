export enum Role {
  ADMIN = "ADMIN",
  SALES = "SALES",
  WAREHOUSE = "WAREHOUSE",
  ACCOUNTS = "ACCOUNTS",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
