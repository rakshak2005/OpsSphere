import { RoleEnum, type Role } from "../types/auth.types";

export interface NavItem {
  name: string;
  href: string;
  icon: string;
  allowedRoles: Role[];
  badge?: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
    allowedRoles: [RoleEnum.ADMIN, RoleEnum.SALES, RoleEnum.WAREHOUSE, RoleEnum.ACCOUNTS],
  },
  {
    name: "Customers",
    href: "/customers",
    icon: "Users",
    allowedRoles: [RoleEnum.ADMIN, RoleEnum.SALES, RoleEnum.WAREHOUSE, RoleEnum.ACCOUNTS],
  },
  {
    name: "Products",
    href: "/products",
    icon: "Package",
    allowedRoles: [RoleEnum.ADMIN, RoleEnum.SALES, RoleEnum.WAREHOUSE, RoleEnum.ACCOUNTS],
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: "Warehouse",
    allowedRoles: [RoleEnum.ADMIN, RoleEnum.SALES, RoleEnum.WAREHOUSE, RoleEnum.ACCOUNTS],
  },
  {
    name: "Delivery Challans",
    href: "/challans",
    icon: "FileText",
    allowedRoles: [RoleEnum.ADMIN, RoleEnum.SALES, RoleEnum.WAREHOUSE, RoleEnum.ACCOUNTS],
  },
  {
    name: "User Management",
    href: "/users",
    icon: "UserCog",
    allowedRoles: [RoleEnum.ADMIN],
  },
];
