import React from "react";
import { Menu, Bell, User as UserIcon } from "lucide-react";
import type { User } from "../../types/auth.types";
import logoImg from "../../assets/logo.png";

interface TopbarProps {
  user: User | null;
  onLogout: () => void;
  setMobileOpen: (open: boolean) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  user,
  setMobileOpen,
}) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-6 shadow-xs">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <img src={logoImg} alt="OpsSphere Logo" className="w-6 h-6 object-contain hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3B82F6] bg-[#3B82F6]/5 border border-[#3B82F6]/20 px-2 py-0.5 rounded-full">
              ENTERPRISE PORTAL
            </span>
            <p className="text-xs font-bold text-slate-800 hidden sm:block">
              OpsSphere Management Workspace
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          title="Notifications"
          className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
        >
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#4F46E5] rounded-full ring-2 ring-white" />
        </button>

        <div className="h-5 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-slate-900 leading-none">
              {user?.name || "System Admin"}
            </span>
            <span className="text-[10px] text-slate-500 mt-1">
              {user?.email || "admin@opssphere.com"}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs uppercase shadow-2xs">
            {user?.name ? user.name.charAt(0).toUpperCase() : <UserIcon className="w-3.5 h-3.5 text-slate-400" />}
          </div>
        </div>
      </div>
    </header>
  );
};
