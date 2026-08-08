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
  BarChart3,
  Coins,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { RoleEnum, type User } from "../../types/auth.types";
import logoImg from "../../assets/logo.png";

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
  BarChart3,
  Coins,
};

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  onLogout,
  mobileOpen,
  setMobileOpen,
}) => {
  const location = useLocation();
  const userRole = user?.role || RoleEnum.SALES;

  const filteredNavItems = NAVIGATION_ITEMS.filter((item) =>
    item.allowedRoles.includes(userRole)
  );

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0B1224] text-[#94A3B8] border-r border-[#1E293B]">
      {/* Brand Header */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-[#1E293B] shrink-0 bg-[#070B14]/40">
        <Link to="/dashboard" className="flex items-center gap-3">
          <img src={logoImg} alt="OpsSphere Logo" className="w-9 h-9 object-contain shrink-0" />
          <div className="space-y-0.5">
            <span className="text-lg font-extrabold text-white tracking-tight block leading-none">
              OpsSphere
            </span>
            <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">
              ERP + CRM PORTAL
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        <div className="px-4 mb-4 text-[10px] font-bold text-[#475569] uppercase tracking-widest">
          MAIN
        </div>
        {filteredNavItems.map((item) => {
          const IconComponent = iconMap[item.icon] || LayoutDashboard;
          const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                isActive
                  ? "bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/25"
                  : "text-[#94A3B8] hover:text-white hover:bg-[#111A30]/50"
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? "text-white" : "text-[#556987]"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer User Info Panel */}
      <div className="p-5 border-t border-[#1E293B] bg-[#070B14]/40 shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#111A30] border border-[#1E293B] flex items-center justify-center shrink-0">
              <UserIcon className="w-4.5 h-4.5 text-[#556987]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate leading-tight">
                {user?.name || "System Admin"}
              </p>
              <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest mt-1">
                {userRole}
              </span>
            </div>
          </div>

          <button
            onClick={onLogout}
            title="Logout of session"
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-[#111A30] rounded-lg transition cursor-pointer"
          >
            <LogOut className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-[#0B1224]/80 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#0B1224]">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
