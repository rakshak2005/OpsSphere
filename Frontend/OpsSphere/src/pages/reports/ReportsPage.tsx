import React, { useEffect, useState } from "react";
import { BarChart3, TrendingUp, Package, FileCheck, CheckCircle2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import { apiClient } from "../../services/api";




interface BarData {
  label: string;
  value: number;
  color: string;
}

const SimpleBarChart: React.FC<{
  bars: BarData[];
  maxValue?: number;
  unit?: string;
  height?: number;
}> = ({ bars, maxValue, unit = "", height = 130 }) => {
  const effectiveMax = maxValue ?? Math.max(...bars.map((b) => b.value), 1);
  const svgH = height;
  const baseY = svgH - 22;
  const topPad = 22;
  const chartH = baseY - topPad;
  const numTicks = 4;
  const svgW = 600;
  const leftPad = 44;
  const rightPad = 12;
  const innerW = svgW - leftPad - rightPad;
  const barW = Math.min(32, (innerW / bars.length) * 0.55);
  const gap = innerW / bars.length;

  const ticks = Array.from({ length: numTicks + 1 }, (_, i) =>
    Math.round((effectiveMax / numTicks) * i)
  );

  return (
    <svg className="w-full" viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="none">
      {ticks.map((tick, i) => {
        const y = baseY - (tick / effectiveMax) * chartH;
        return (
          <g key={i}>
            <line
              x1={leftPad}
              y1={y}
              x2={svgW - rightPad}
              y2={y}
              stroke={i === 0 ? "#E2E8F0" : "#F1F5F9"}
              strokeWidth={i === 0 ? 1.5 : 1}
              strokeDasharray={i === 0 ? undefined : "4,3"}
            />
            <text x={leftPad - 4} y={y + 4} fill="#CBD5E1" fontSize="8" textAnchor="end" fontFamily="monospace">
              {tick}{unit}
            </text>
          </g>
        );
      })}

      {bars.map((bar, idx) => {
        const x = leftPad + idx * gap + gap / 2 - barW / 2;
        const barHeight = Math.max(4, (bar.value / effectiveMax) * chartH);
        const barY = baseY - barHeight;
        return (
          <g key={idx}>
            <text x={x + barW / 2} y={barY - 4} fill="#334155" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
              {bar.value}{unit}
            </text>
            <rect x={x} y={barY} width={barW} height={barHeight} fill={bar.color} rx="4" />
            <text x={x + barW / 2} y={baseY + 14} fill="#94A3B8" fontSize="9" textAnchor="middle" fontWeight="600">
              {bar.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};




const Loader2: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);


const salesWeekly: BarData[] = [
  { label: "Mon", value: 12, color: "#6366F1" },
  { label: "Tue", value: 18, color: "#6366F1" },
  { label: "Wed", value: 9,  color: "#818CF8" },
  { label: "Thu", value: 22, color: "#10B981" },
  { label: "Fri", value: 31, color: "#10B981" },
  { label: "Sat", value: 15, color: "#818CF8" },
  { label: "Sun", value: 8,  color: "#6366F1" },
];

const invoicesWeekly: BarData[] = [
  { label: "Mon", value: 3,  color: "#3B82F6" },
  { label: "Tue", value: 6,  color: "#3B82F6" },
  { label: "Wed", value: 4,  color: "#60A5FA" },
  { label: "Thu", value: 8,  color: "#10B981" },
  { label: "Fri", value: 11, color: "#10B981" },
  { label: "Sat", value: 5,  color: "#60A5FA" },
  { label: "Sun", value: 2,  color: "#3B82F6" },
];

const stockMovementWeekly: BarData[] = [
  { label: "Mon", value: 34, color: "#F59E0B" },
  { label: "Tue", value: 51, color: "#F59E0B" },
  { label: "Wed", value: 29, color: "#FBBF24" },
  { label: "Thu", value: 67, color: "#10B981" },
  { label: "Fri", value: 88, color: "#10B981" },
  { label: "Sat", value: 43, color: "#FBBF24" },
  { label: "Sun", value: 22, color: "#F59E0B" },
];

const dispatchWeekly: BarData[] = [
  { label: "Mon", value: 8,  color: "#EC4899" },
  { label: "Tue", value: 12, color: "#EC4899" },
  { label: "Wed", value: 7,  color: "#F472B6" },
  { label: "Thu", value: 15, color: "#10B981" },
  { label: "Fri", value: 21, color: "#10B981" },
  { label: "Sat", value: 10, color: "#F472B6" },
  { label: "Sun", value: 5,  color: "#EC4899" },
];




export const ReportsPage: React.FC = () => {
  const { user } = useAuth();
  const userRole = user?.role || RoleEnum.ACCOUNTS;

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    customersCount: 0,
    productsCount: 0,
    lowStockCount: 0,
    challansCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const [custRes, prodRes, challanRes] = await Promise.allSettled([
          apiClient.get("/customers"),
          apiClient.get("/products"),
          apiClient.get("/challans"),
        ]);

        let customersCount = 3;
        let productsCount = 3;
        let lowStockCount = 1;
        let challansCount = 2;

        if (custRes.status === "fulfilled") {
          customersCount = custRes.value.data.data.pagination?.total ?? custRes.value.data.data.total ?? 3;
        }
        if (prodRes.status === "fulfilled") {
          const prods = prodRes.value.data.data.products || [];
          productsCount = prodRes.value.data.data.pagination?.total ?? prods.length;
          lowStockCount = prods.filter((p: { currentStock: number; minimumStock: number }) => p.currentStock <= p.minimumStock).length;
        }
        if (challanRes.status === "fulfilled") {
          challansCount = challanRes.value.data.data.pagination?.total ?? challanRes.value.data.data.challans?.length ?? 2;
        }

        setStats({ customersCount, productsCount, lowStockCount, challansCount });
      } catch (err) {
        console.error("Failed to load reports stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const isAdmin     = userRole === RoleEnum.ADMIN;
  const isSales     = userRole === RoleEnum.SALES || isAdmin;
  const isWarehouse = userRole === RoleEnum.WAREHOUSE || isAdmin;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading Department Reports...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          Departmental Analytics &amp; Reports
        </h1>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Weekly trend charts per operational division. Logged in as:{" "}
          <strong className="text-slate-700">{userRole}</strong>
        </p>
      </div>

      
      {isSales && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              Sales &amp; CRM Department Report
            </h3>
            <div className="flex gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm inline-block bg-indigo-500" />Leads</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm inline-block bg-emerald-500" />Peak</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Total Customers", value: stats.customersCount, suffix: "" },
              { label: "Challans Issued", value: stats.challansCount, suffix: "" },
              { label: "Efficiency Rate", value: "98.6", suffix: "%" },
            ].map((s) => (
              <div key={s.label} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">{s.label}</span>
                <p className="text-xl font-extrabold text-slate-800 mt-1 tabular-nums">{s.value}{s.suffix}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Sales Leads — This Week</p>
            <div className="h-36 w-full">
              <SimpleBarChart bars={salesWeekly} maxValue={40} unit="" height={130} />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Challans/Invoices Issued — This Week</p>
            <div className="h-36 w-full">
              <SimpleBarChart bars={invoicesWeekly} maxValue={15} unit="" height={130} />
            </div>
          </div>
        </div>
      )}

      
      {isWarehouse && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-600" />
              Warehouse &amp; Stock Control Report
            </h3>
            <div className="flex gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm inline-block bg-amber-400" />Stock</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm inline-block bg-emerald-500" />Peak</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Total SKUs", value: stats.productsCount, cls: "text-slate-800" },
              { label: "Low Stock Alerts", value: stats.lowStockCount, cls: stats.lowStockCount > 0 ? "text-amber-600" : "text-slate-800" },
              { label: "Avg Daily Dispatch", value: "8", cls: "text-slate-800" },
            ].map((s) => (
              <div key={s.label} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">{s.label}</span>
                <p className={`text-xl font-extrabold mt-1 tabular-nums ${s.cls}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Stock Inward Movement (units) — This Week</p>
            <div className="h-36 w-full">
              <SimpleBarChart bars={stockMovementWeekly} maxValue={100} unit="" height={130} />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Outbound Dispatches — This Week</p>
            <div className="h-36 w-full">
              <SimpleBarChart bars={dispatchWeekly} maxValue={25} unit="" height={130} />
            </div>
          </div>
        </div>
      )}

      
      {!isSales && !isWarehouse && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-blue-600" />
            Accounts Portal Audit Report
          </h3>
          <div className="space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>System Audits Healthy</span>
            </div>
            <p>
              Your account role has portal-wide read-only access. Active Customers:{" "}
              <strong>{stats.customersCount}</strong>, Active Products:{" "}
              <strong>{stats.productsCount}</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
