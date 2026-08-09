import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, User as UserIcon, AlertTriangle, Check, ExternalLink } from "lucide-react";
import type { User } from "../../types/auth.types";
import { ProductService } from "../../services/product.service";
import type { Product } from "../../types/product.types";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchLowStock = async () => {
    setLoading(true);
    try {
      const res = await ProductService.getAll({ limit: 100 });
      const lowStock = (res.products || []).filter(
        (p) => p.currentStock <= p.minimumStock
      );
      setLowStockProducts(lowStock);
    } catch (err) {
      console.error("Failed to fetch products for notifications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLowStock();
    // Poll every 30 seconds to keep it fresh
    const interval = setInterval(fetchLowStock, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            title="Notifications"
            onClick={() => setShowDropdown(!showDropdown)}
            className={`relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer ${
              showDropdown ? "bg-slate-100 text-slate-700" : ""
            }`}
          >
            <Bell className="w-4.5 h-4.5" />
            {lowStockProducts.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                {lowStockProducts.length}
              </span>
            )}
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden z-50 transform origin-top-right transition-all duration-150 ease-out">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                  Notifications
                </span>
                {lowStockProducts.length > 0 && (
                  <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                    {lowStockProducts.length} Low Stock
                  </span>
                )}
              </div>

              {/* List */}
              <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                {loading && lowStockProducts.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-400">
                    Checking stock levels...
                  </div>
                ) : lowStockProducts.length === 0 ? (
                  <div className="p-6 text-center space-y-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto">
                      <Check className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-xs font-bold text-slate-800">All Items Well-Stocked</p>
                    <p className="text-[10px] text-slate-400">No low stock alerts at the moment.</p>
                  </div>
                ) : (
                  lowStockProducts.map((product) => (
                    <div key={product.id} className="p-3.5 hover:bg-slate-50 transition flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100 mt-0.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-xs font-bold text-slate-800 leading-tight text-left">
                          Low Stock Alert: {product.productName}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium text-left">
                          SKU: {product.sku} • Stock: <span className="font-bold text-rose-500">{product.currentStock}</span> (min: {product.minimumStock})
                        </p>
                        <div className="pt-1 flex items-center gap-2">
                          <Link
                            to="/inventory"
                            onClick={() => setShowDropdown(false)}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#3B82F6] hover:underline"
                          >
                            <span>Adjust Stock</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-2 border-t border-slate-100 bg-slate-50/50">
                <Link
                  to="/inventory"
                  onClick={() => setShowDropdown(false)}
                  className="block text-center text-[10px] font-bold text-slate-500 hover:text-[#3B82F6] transition py-1.5"
                >
                  View Inventory Manager
                </Link>
              </div>
            </div>
          )}
        </div>

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
