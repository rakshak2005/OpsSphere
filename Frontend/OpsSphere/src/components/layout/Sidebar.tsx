import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Warehouse,
  FileText,
  UserCog,
  LogOut,
  User as UserIcon,
  X,
  Boxes,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { User, Role } from "../../types/auth.types";

interface SidebarProps {
  user: User | null;
  onLogout: () => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Users,
  Package,
  Warehouse,
  FileText,
  UserCog,
};

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  onLogout,
  mobileOpen,
  setMobileOpen,
}) => {
  const location = useLocation();
  const userRole = user?.role || Role.SALES;

  // Filter navigation items based on backend verified role permissions
  const filteredNavItems = NAVIGATION_ITEMS.filter((item) =>
    item.allowedRoles.includes(userRole)
  );

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800">
      {/* Brand Logo Header */}
      <div className="flex items-center justify-between h-16 px-6 bg-slate-950/50 border-b border-slate-800">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm font-bold">
            <Boxes className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-base font-bold text-white tracking-wide block">
              OpsSphere
            </span>
            <span className="text-[10px] uppercase font-semibold text-indigo-400 tracking-wider block">
              ERP + CRM Portal
            </span>
          </div>
        </Link>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 mb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          Main Navigation
        </div>
        {filteredNavItems.map((item) => {
          const IconComponent = iconMap[item.icon] || LayoutDashboard;
          const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile & Logout Drawer Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-semibold shrink-0">
              <UserIcon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.name || "Portal User"}
              </p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                {userRole}
              </span>
            </div>
          </div>

          <button
            onClick={onLogout}
            title="Logout of session"
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-out Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-slate-900">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
