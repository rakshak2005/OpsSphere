import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Package,
  AlertTriangle,
  FileCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Boxes,
  Loader2,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { CustomerService } from "../../services/customer.service";
import { ProductService } from "../../services/product.service";
import { ChallanService } from "../../services/challan.service";
import { InventoryService } from "../../services/inventory.service";
import type { Product } from "../../types/product.types";
import type { Challan } from "../../types/challan.types";
import type { InventoryMovement } from "../../types/inventory.types";

export const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
  const [recentChallans, setRecentChallans] = useState<Challan[]>([]);
  const [recentMovements, setRecentMovements] = useState<InventoryMovement[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [custRes, prodRes, challanRes, invRes] = await Promise.allSettled([
          CustomerService.getAll({ limit: 1 }),
          ProductService.getAll({ limit: 100 }),
          ChallanService.getAll({ limit: 5 }),
          InventoryService.getMovements({ limit: 5 }),
        ]);

        if (custRes.status === "fulfilled") {
          setTotalCustomers(custRes.value.total || 0);
        }
        if (prodRes.status === "fulfilled") {
          const prods = prodRes.value.products || [];
          setTotalProducts(prodRes.value.total || prods.length);
          setLowStockProducts(
            prods.filter((p) => p.currentStock <= p.minimumStock)
          );
        }
        if (challanRes.status === "fulfilled") {
          setRecentChallans(challanRes.value.challans || []);
        }
        if (invRes.status === "fulfilled") {
          setRecentMovements(invRes.value.movements || []);
        }
      } catch (err) {
        console.error("Error loading dashboard metrics:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading Operational Overview...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Operational Overview
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time metric summary across CRM, Stock Levels & Delivery Operations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/challans/create">
            <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
              New Challan
            </Button>
          </Link>
          <Link to="/inventory">
            <Button variant="outline" icon={<Boxes className="w-4 h-4" />}>
              Adjust Stock
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Total Customers
            </span>
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-3 tabular-nums">{totalCustomers}</p>
          <span className="text-[11px] font-medium text-slate-500 mt-1 block">Active CRM Accounts</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Catalog Products
            </span>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-3 tabular-nums">{totalProducts}</p>
          <span className="text-[11px] font-medium text-slate-500 mt-1 block">Inventory Items SKUs</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Low Stock Alerts
            </span>
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-amber-600 mt-3 tabular-nums">{lowStockProducts.length}</p>
          <span className="text-[11px] font-medium text-slate-500 mt-1 block">Items below min threshold</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Recent Challans
            </span>
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-3 tabular-nums">{recentChallans.length}</p>
          <span className="text-[11px] font-medium text-slate-500 mt-1 block">Latest Delivery Notes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Low Stock Warnings
            </h2>
            <Link to="/products" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
              View Catalog →
            </Link>
          </div>

          {lowStockProducts.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">All product stock levels are healthy.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {lowStockProducts.slice(0, 5).map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{p.productName}</p>
                    <span className="text-xs text-slate-400 font-mono">SKU: {p.sku}</span>
                  </div>
                  <div className="text-right">
                    <Badge variant="warning">{p.currentStock} left</Badge>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Min: {p.minimumStock}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-500" />
              Recent Stock Movements
            </h2>
            <Link to="/inventory" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
              Movement Logs →
            </Link>
          </div>

          {recentMovements.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">No recent stock movements recorded.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentMovements.map((m) => (
                <div key={m.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        m.type === "IN" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {m.type === "IN" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {m.product?.productName || "Product"}
                      </p>
                      <span className="text-xs text-slate-400">{m.reason || "Stock Adjustment"}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        m.type === "IN" ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {m.type === "IN" ? `+${m.quantity}` : `-${m.quantity}`}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {new Date(m.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
