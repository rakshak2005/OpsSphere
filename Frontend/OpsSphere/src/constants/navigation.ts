import { Role } from "../types/auth.types";

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
    allowedRoles: [Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS],
  },
  {
    name: "Customers",
    href: "/customers",
    icon: "Users",
    allowedRoles: [Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS],
  },
  {
    name: "Products",
    href: "/products",
    icon: "Package",
    allowedRoles: [Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS],
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: "Warehouse",
    allowedRoles: [Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS],
  },
  {
    name: "Delivery Challans",
    href: "/challans",
    icon: "FileText",
    allowedRoles: [Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS],
  },
  {
    name: "User Management",
    href: "/users",
    icon: "UserCog",
    allowedRoles: [Role.ADMIN],
  },
];
