import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { RoleEnum, type User } from "../../types/auth.types";

interface MainLayoutProps {
  user?: User | null;
  onLogout?: () => void;
}

const DEFAULT_MOCK_USER: User = {
  id: "usr-1",
  name: "System Admin",
  email: "admin@opssphere.com",
  role: RoleEnum.ADMIN,
  isActive: true,
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  user = DEFAULT_MOCK_USER,
  onLogout = () => console.log("Logout triggered"),
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row antialiased">
      <Sidebar
        user={user}
        onLogout={onLogout}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Topbar
          user={user}
          onLogout={onLogout}
          setMobileOpen={setMobileOpen}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
