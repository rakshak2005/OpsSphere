export type Role = "ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS";

export const RoleEnum = {
  ADMIN: "ADMIN" as Role,
  SALES: "SALES" as Role,
  WAREHOUSE: "WAREHOUSE" as Role,
  ACCOUNTS: "ACCOUNTS" as Role,
};

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  secretCode?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
