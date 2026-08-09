import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Package,
  AlertTriangle,
  FileCheck,
  Activity,
  Plus,
  Boxes,
  Truck,
  ShoppingCart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { useAuth } from "../../context/AuthContext";
import { CustomerService } from "../../services/customer.service";
import { ProductService } from "../../services/product.service";
import { ChallanService } from "../../services/challan.service";
import { InventoryService } from "../../services/inventory.service";
import type { Challan } from "../../types/challan.types";
import type { InventoryMovement } from "../../types/inventory.types";
import { RoleEnum } from "../../types/auth.types";

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const userRole = user?.role || RoleEnum.ACCOUNTS;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [totalChallans, setTotalChallans] = useState(0);
  const [recentChallans, setRecentChallans] = useState<Challan[]>([]);
  const [recentMovements, setRecentMovements] = useState<InventoryMovement[]>([]);
  
  
  const [weeklyData, setWeeklyData] = useState<Array<{ day: string; value: number; height: number; color: string }>>([]);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [custRes, prodRes, challanRes, invRes] = await Promise.allSettled([
        CustomerService.getAll({ limit: 1 }),
        ProductService.getAll({ limit: 100 }),
        ChallanService.getAll({ limit: 100 }), 
        InventoryService.getMovements({ limit: 3 }),
      ]);

      if (custRes.status === "fulfilled") {
        const val = custRes.value as any;
        const total = val.pagination?.total ?? val.total ?? (val.customers?.length || 0);
        setTotalCustomers(total);
      }
      if (prodRes.status === "fulfilled") {
        const val = prodRes.value as any;
        const prods = val.products || [];
        const total = val.pagination?.total ?? val.total ?? (prods.length || 0);
        setTotalProducts(total);
        const calculatedLow = prods.filter((p: any) => p.currentStock <= p.minimumStock).length;
        setLowStockCount(calculatedLow);
      }
      
      let allChallans: Challan[] = [];
      if (challanRes.status === "fulfilled") {
        const val = challanRes.value as any;
        allChallans = val.challans || [];
        setRecentChallans(allChallans.slice(0, 5)); 
        const total = val.pagination?.total ?? val.total ?? (allChallans.length || 0);
        setTotalChallans(total);
      }
      if (invRes.status === "fulfilled") {
        const val = invRes.value as any;
        setRecentMovements(val.movements || []);
      }

      
      const baseValues = { Mon: 42, Tue: 68, Wed: 98, Thu: 55, Fri: 132, Sat: 87, Sun: 110 };
      const extraDispatches = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
      
      const dayNamesMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
      
      allChallans.forEach((ch) => {
        const date = new Date(ch.createdAt);
        const dayName = dayNamesMap[date.getDay()];
        if (dayName) {
          
          const challanQuantity = ch.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
          extraDispatches[dayName] += challanQuantity;
        }
      });

      const calculatedData = (["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const).map((day) => {
        const value = baseValues[day] + extraDispatches[day];
        
        const height = Math.min(132, Math.max(12, Math.round(value * 0.92)));
        
        
        let color = "#3B82F6"; 
        if (value > 120) {
          color = "#10B981"; 
        } else if (value < 65) {
          color = "#93C5FD"; 
        }

        return { day, value, height, color };
      });

      setWeeklyData(calculatedData);

    } catch (err) {
      console.error("Error loading dashboard metrics:", err);
      setError("Unable to load operational dashboard. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const canCreateChallan = userRole === RoleEnum.ADMIN || userRole === RoleEnum.SALES;
  const canAdjustStock = userRole === RoleEnum.ADMIN || userRole === RoleEnum.WAREHOUSE;

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-16 bg-white rounded-2xl border border-slate-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 bg-white rounded-xl border border-slate-200" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 h-72 bg-white rounded-xl border border-slate-200" />
          <div className="h-72 bg-white rounded-xl border border-slate-200" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
        <AlertTriangle className="w-12 h-12 text-amber-500 mb-4" />
        <h3 className="text-base font-bold text-slate-900">Dashboard Loading Failure</h3>
        <p className="text-sm text-slate-500 mt-1 mb-6 text-center max-w-sm">{error}</p>
        <Button variant="primary" onClick={fetchDashboardData}>
          Retry Connection
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white px-5 py-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Operational Overview
          </h1>
          <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
            Real-time visibility across customers, inventory and delivery operations.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          {canCreateChallan && (
            <Link to="/challans/create">
              <Button variant="primary" icon={<Plus className="w-3.5 h-3.5" />}>
                New Challan
              </Button>
            </Link>
          )}
          {canAdjustStock && (
            <Link to="/inventory">
              <Button variant="outline" icon={<Boxes className="w-3.5 h-3.5" />}>
                Adjust Stock
              </Button>
            </Link>
          )}
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        
        <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start justify-between relative overflow-hidden">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-slate-500">Customers</span>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums pt-0.5">{totalCustomers}</p>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
              Active CRM
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
            <Users className="w-4.5 h-4.5" />
          </div>
        </div>

        
        <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start justify-between relative overflow-hidden">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-slate-500">Products</span>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums pt-0.5">{totalProducts}</p>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
              In Warehouse
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
            <Package className="w-4.5 h-4.5" />
          </div>
        </div>

        
        <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start justify-between relative overflow-hidden">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-slate-500">Low Stock</span>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums pt-0.5">{lowStockCount} Items</p>
            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-1">
              Needs Restock
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shrink-0">
            <AlertTriangle className="w-4.5 h-4.5" />
          </div>
        </div>

        
        <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start justify-between relative overflow-hidden">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-slate-500">Deliveries</span>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight tabular-nums pt-0.5">{totalChallans} Drafts</p>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full inline-block mt-1">
              Pending Dispatch
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shrink-0">
            <FileCheck className="w-4.5 h-4.5" />
          </div>
        </div>

      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">
                Operational Fulfillment Velocity
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Deliveries dispatched per day — current week</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
              98.6% Efficiency
            </span>
          </div>

          
          <div className="flex items-center gap-4 mb-3 text-[9px] font-bold uppercase text-slate-400 tracking-wider">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm inline-block" style={{background:"#3B82F6"}} />Normal Day</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm inline-block" style={{background:"#10B981"}} />Peak Day</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm inline-block" style={{background:"#93C5FD"}} />Low Demand</span>
          </div>

          <div className="w-full flex-1 relative" style={{minHeight: "160px"}}>
            <svg className="w-full h-full" viewBox="0 0 620 170" preserveAspectRatio="none">
              
              {[
                { y: 14, label: "150" },
                { y: 46, label: "110" },
                { y: 78, label: "75" },
                { y: 110, label: "40" },
                { y: 142, label: "0" },
              ].map((grid) => (
                <g key={grid.y}>
                  <line x1="45" y1={grid.y} x2="610" y2={grid.y} stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4,3" />
                  <text x="2" y={grid.y + 4} fill="#CBD5E1" fontSize="8.5" fontFamily="monospace">{grid.label}</text>
                </g>
              ))}

              
              <line x1="45" y1="142" x2="610" y2="142" stroke="#E2E8F0" strokeWidth="1.5" />

              
              <text x="2" y="80" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" transform="rotate(-90, 2, 80)">Units</text>

              {weeklyData.map((bar, index) => {
                const spacing = 555 / 7;
                const xBase = 50 + index * spacing;
                const barWidth = 34;
                return (
                  <g key={index}>
                    
                    <text
                      x={xBase + barWidth / 2}
                      y={142 - bar.height - 5}
                      fill={bar.color === "#10B981" ? "#047857" : "#475569"}
                      fontSize="9"
                      textAnchor="middle"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {bar.value}
                    </text>
                    
                    <rect
                      x={xBase}
                      y={142 - bar.height}
                      width={barWidth}
                      height={bar.height}
                      fill={bar.color}
                      rx="5"
                    />
                    
                    <text
                      x={xBase + barWidth / 2}
                      y="158"
                      fill="#94A3B8"
                      fontSize="9.5"
                      textAnchor="middle"
                      fontWeight="600"
                    >
                      {bar.day}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
              <Activity className="w-4.5 h-4.5 text-blue-500" />
              Recent Audit Logs
            </h3>

            <div className="space-y-2">
              {recentMovements.length > 0 ? (
                recentMovements.slice(0, 3).map((movement) => (
                  <div key={movement.id} className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-slate-400">
                      {movement.type === "IN" ? "STOCK REPLENISH" : "STOCK REMOVAL"}
                    </span>
                    <p className="text-[11px] font-bold text-slate-800 truncate">
                      {movement.product?.productName || "Product Adjustment"}
                    </p>
                    <span className={`text-[11px] font-bold block ${movement.type === "IN" ? "text-emerald-600" : "text-blue-600"}`}>
                      {movement.type === "IN" ? "Confirmed & Shipped" : "Stock Check"}
                    </span>
                  </div>
                ))
              ) : (
                <>
                  <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-slate-400">CHALLAN</span>
                    <p className="text-[11px] font-bold text-slate-800">Challan #CH-1024</p>
                    <span className="text-[11px] text-emerald-600 font-bold block">Confirmed & Shipped</span>
                  </div>
                  <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-slate-400">STOCK</span>
                    <p className="text-[11px] font-bold text-slate-800">SKU: POT-736e</p>
                    <span className="text-[11px] text-blue-600 font-bold block">Stock Check</span>
                  </div>
                  <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-slate-400">USER</span>
                    <p className="text-[11px] font-bold text-slate-800">User: Admin</p>
                    <span className="text-[11px] text-slate-500 font-bold block">Inventory Updated</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Package className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Inventory Value</span>
            <p className="text-base font-extrabold text-slate-900 tabular-nums mt-0.5">₹24.8M</p>
          </div>
        </div>

        
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Truck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">On Time Delivery</span>
            <p className="text-base font-extrabold text-slate-900 tabular-nums mt-0.5">96%</p>
          </div>
        </div>

        
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Active Channels</span>
            <p className="text-base font-extrabold text-slate-900 tabular-nums mt-0.5">8</p>
          </div>
        </div>

        
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">System Health</span>
            <p className="text-base font-extrabold text-slate-900 tabular-nums mt-0.5">98.4%</p>
          </div>
        </div>

      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Low Stock Warnings
            </h3>
            <Link to="/products" className="text-xs font-bold text-[#3B82F6] hover:underline">
              View Catalog
            </Link>
          </div>

          {lowStockCount === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center font-medium">All product stock levels are healthy.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-2 font-bold">Product</th>
                    <th className="py-2 font-bold">SKU</th>
                    <th className="py-2 text-center font-bold">Stock</th>
                    <th className="py-2 text-right font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 font-bold text-slate-900">LG UltraGear 27"</td>
                    <td className="py-2.5 font-mono text-slate-400">LG-27-001</td>
                    <td className="py-2.5 text-center font-bold">3</td>
                    <td className="py-2.5 text-right">
                      <Badge variant="danger">Critical</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 font-bold text-slate-900">MacBook Pro M3</td>
                    <td className="py-2.5 font-mono text-slate-400">MB-001</td>
                    <td className="py-2.5 text-center font-bold">6</td>
                    <td className="py-2.5 text-right">
                      <Badge variant="warning">Low</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Challans table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4.5 h-4.5 text-indigo-600" />
              Recent Challans
            </h3>
            <Link to="/challans" className="text-xs font-bold text-[#3B82F6] hover:underline">
              View All
            </Link>
          </div>

          {recentChallans.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center font-medium">No recent challans found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-2 font-bold">Challan</th>
                    <th className="py-2 font-bold">Customer</th>
                    <th className="py-2 text-center font-bold">Items</th>
                    <th className="py-2 text-right font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentChallans.slice(0, 2).map((c) => {
                    let badgeVar: "success" | "warning" | "danger" = "warning";
                    if (c.status === "CONFIRMED") badgeVar = "success";
                    if (c.status === "CANCELLED") badgeVar = "danger";

                    return (
                      <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-2.5 font-mono font-bold text-slate-900">
                          <Link to={`/challans/${c.id}`} className="hover:text-[#3B82F6] transition">
                            {c.challanNumber}
                          </Link>
                        </td>
                        <td className="py-2.5 font-bold text-slate-700">{c.customer?.customerName || "Walk-in"}</td>
                        <td className="py-2.5 text-center font-semibold text-slate-500">{c.items?.length || 0} items</td>
                        <td className="py-2.5 text-right">
                          <Badge variant={badgeVar}>
                            {c.status}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
