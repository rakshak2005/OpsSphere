import React, { useEffect, useState } from "react";
import {
  TrendingUp, Package, Download, RefreshCw,
  Users, FileText, BarChart2, AlertTriangle,
  ArrowUpRight, CheckCircle2,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import { apiClient } from "../../services/api";

interface BarData {
  label: string;
  value: number;
  isPeak?: boolean;
}

const COLORS = {
  sales:    { normal: "#818CF8", peak: "#10B981" },
  invoice:  { normal: "#3B82F6", peak: "#10B981" },
  stock:    { normal: "#F59E0B", peak: "#10B981" },
  dispatch: { normal: "#EC4899", peak: "#10B981" },
};

const BarChart: React.FC<{
  bars: BarData[];
  colorNormal: string;
  colorPeak: string;
  maxY?: number;
}> = ({ bars, colorNormal, colorPeak, maxY }) => {
  const max = maxY ?? Math.max(...bars.map((b) => b.value), 1);
  const W = 560;
  const H = 160;
  const padL = 38;
  const padB = 24;
  const padT = 20;
  const innerH = H - padT - padB;
  const innerW = W - padL - 8;
  const slotW = innerW / bars.length;
  const barW = Math.min(34, slotW * 0.5);
  const ticks = 4;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const val = Math.round((max / ticks) * i);
        const y = padT + innerH - (val / max) * innerH;
        return (
          <g key={i}>
            <line x1={padL} y1={y} x2={W - 8} y2={y}
              stroke={i === 0 ? "#E2E8F0" : "#F1F5F9"}
              strokeWidth={i === 0 ? 1.5 : 1}
              strokeDasharray={i === 0 ? undefined : "4 3"} />
            <text x={padL - 4} y={y + 3} fill="#CBD5E1" fontSize={8}
              textAnchor="end" fontFamily="monospace">{val}</text>
          </g>
        );
      })}

      {bars.map((bar, i) => {
        const cx = padL + i * slotW + slotW / 2;
        const bx = cx - barW / 2;
        const bh = Math.max(4, (bar.value / max) * innerH);
        const by = padT + innerH - bh;
        const fill = bar.isPeak ? colorPeak : colorNormal;
        return (
          <g key={i}>
            <text x={cx} y={by - 5} fill="#334155" fontSize={9}
              textAnchor="middle" fontWeight="700" fontFamily="monospace">{bar.value}</text>
            <rect x={bx} y={by} width={barW} height={bh} fill={fill} rx={5} />
            <text x={cx} y={H - 6} fill="#94A3B8" fontSize={9}
              textAnchor="middle" fontWeight="600">{bar.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const makeBars = (values: number[], labels: string[], peakThreshold: number): BarData[] =>
  values.map((v, i) => ({ label: labels[i], value: v, isPeak: v >= peakThreshold }));

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const ReportsPage: React.FC = () => {
  const { user } = useAuth();
  const userRole = user?.role || RoleEnum.ACCOUNTS;

  const isAdmin     = userRole === RoleEnum.ADMIN;
  const isSales     = userRole === RoleEnum.SALES || isAdmin;
  const isWarehouse = userRole === RoleEnum.WAREHOUSE || isAdmin;

  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const [reportType, setReportType] = useState("Sales Report");
  const [dateRange, setDateRange] = useState("This Week");

  const [stats, setStats] = useState({
    customersCount: 0,
    productsCount: 0,
    lowStockCount: 0,
    challansCount: 0,
    confirmedChallans: 0,
    totalRevenue: 0,
  });

  const [salesBars, setSalesBars] = useState<BarData[]>(
    makeBars([12, 18, 9, 22, 31, 15, 8], DAYS, 20)
  );
  const [invoiceBars, setInvoiceBars] = useState<BarData[]>(
    makeBars([3, 6, 4, 8, 11, 5, 2], DAYS, 8)
  );
  const [stockBars] = useState<BarData[]>(
    makeBars([34, 51, 29, 67, 88, 43, 22], DAYS, 60)
  );
  const [dispatchBars, setDispatchBars] = useState<BarData[]>(
    makeBars([8, 12, 7, 15, 21, 10, 5], DAYS, 15)
  );

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [custRes, prodRes, challanRes] = await Promise.allSettled([
        apiClient.get("/customers"),
        apiClient.get("/products?limit=100"),
        apiClient.get("/challans?limit=100"),
      ]);

      let customersCount = 0, productsCount = 0, lowStockCount = 0,
        challansCount = 0, confirmedChallans = 0, totalRevenue = 0;

      if (custRes.status === "fulfilled") {
        const d = custRes.value.data.data;
        customersCount = d.pagination?.total ?? d.customers?.length ?? 0;
      }

      if (prodRes.status === "fulfilled") {
        const prods = prodRes.value.data.data.products || [];
        productsCount = prods.length;
        lowStockCount = prods.filter(
          (p: { currentStock: number; minimumStock: number }) =>
            p.currentStock <= p.minimumStock
        ).length;
      }

      if (challanRes.status === "fulfilled") {
        const challans = challanRes.value.data.data.challans || [];
        challansCount = challans.length;
        const confirmed = challans.filter((c: { status: string }) => c.status === "CONFIRMED");
        confirmedChallans = confirmed.length;

        const today = new Date();
        const dayOfWeek = today.getDay();
        const monday = new Date(today);
        monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
        monday.setHours(0, 0, 0, 0);

        const dailyCounts = Array(7).fill(0);
        const dailyInvoices = Array(7).fill(0);
        const dailyDispatches = Array(7).fill(0);

        challans.forEach((ch: { createdAt: string; status: string; items?: { quantity: number }[] }) => {
          const d = new Date(ch.createdAt);
          const diff = Math.floor((d.getTime() - monday.getTime()) / 86400000);
          if (diff >= 0 && diff < 7) {
            dailyCounts[diff]++;
            if (ch.status === "CONFIRMED") {
              dailyInvoices[diff]++;
              const qty = (ch.items || []).reduce((s: number, it: { quantity: number }) => s + it.quantity, 0);
              dailyDispatches[diff] += qty;
            }
          }
        });

        const peakSales = Math.max(...dailyCounts, 1);
        const peakInv   = Math.max(...dailyInvoices, 1);
        const peakDisp  = Math.max(...dailyDispatches, 1);

        setSalesBars(DAYS.map((l, i) => ({ label: l, value: dailyCounts[i], isPeak: dailyCounts[i] >= peakSales * 0.7 && dailyCounts[i] > 0 })));
        setInvoiceBars(DAYS.map((l, i) => ({ label: l, value: dailyInvoices[i], isPeak: dailyInvoices[i] >= peakInv * 0.7 && dailyInvoices[i] > 0 })));
        setDispatchBars(DAYS.map((l, i) => ({ label: l, value: dailyDispatches[i], isPeak: dailyDispatches[i] >= peakDisp * 0.7 && dailyDispatches[i] > 0 })));
      }

      setStats({ customersCount, productsCount, lowStockCount, challansCount, confirmedChallans, totalRevenue });
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, [refreshKey]);

  const efficiencyRate = stats.challansCount > 0
    ? ((stats.confirmedChallans / stats.challansCount) * 100).toFixed(1)
    : "—";

  const avgDailyDispatch = Math.round(
    dispatchBars.reduce((s, b) => s + b.value, 0) / 7
  );

  const exportCSV = () => {
    const now = new Date().toISOString().slice(0, 10);
    const rows: string[][] = [
      ["OpsSphere Reports Export", now],
      [],
      ["SALES & CRM"],
      ["Metric", "Value"],
      ["Total Customers", stats.customersCount.toString()],
      ["Total Challans", stats.challansCount.toString()],
      ["Confirmed Challans", stats.confirmedChallans.toString()],
      ["Efficiency Rate", `${efficiencyRate}%`],
      [],
      ["Daily Sales Leads (This Week)"],
      ["Day", ...DAYS],
      ["Count", ...salesBars.map((b) => b.value.toString())],
      [],
      ["Daily Invoices (This Week)"],
      ["Day", ...DAYS],
      ["Count", ...invoiceBars.map((b) => b.value.toString())],
      [],
      ["WAREHOUSE & STOCK"],
      ["Total SKUs", stats.productsCount.toString()],
      ["Low Stock Alerts", stats.lowStockCount.toString()],
      ["Avg Daily Dispatch", avgDailyDispatch.toString()],
      [],
      ["Stock Inward Movement (This Week)"],
      ["Day", ...DAYS],
      ["Units", ...stockBars.map((b) => b.value.toString())],
      [],
      ["Outbound Dispatches (This Week)"],
      ["Day", ...DAYS],
      ["Units", ...dispatchBars.map((b) => b.value.toString())],
    ];
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `opssphere_report_${now}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">OpsSphere &rsaquo; Reports</p>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Reports</h1>
          <p className="text-xs text-slate-500 mt-0.5">View business performance, sales, inventory and operational reports.</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh
          </button>
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
          >
            <Download className="w-3.5 h-3.5" />
            Export Report
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="text-sm text-slate-800 font-medium border border-slate-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Sales Report</option>
              <option>Inventory Report</option>
              <option>Challan Report</option>
              <option>Customer Report</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-sm text-slate-800 font-medium border border-slate-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>Last 30 Days</option>
              <option>This Quarter</option>
            </select>
          </div>
          <div className="flex gap-2 ml-auto mt-auto">
            <button
              onClick={() => { setReportType("Sales Report"); setDateRange("This Week"); }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-50 transition"
            >
              Reset
            </button>
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200">
          <SpinnerIcon className="w-8 h-8 text-indigo-600 mb-3" />
          <p className="text-sm font-medium text-slate-500">Loading reports...</p>
        </div>
      ) : (
        <>
          {isSales && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h3 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-500" />
                  Sales &amp; CRM Department Report
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-indigo-400" />
                    Leads
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-emerald-500" />
                    Peak
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Users className="w-4 h-4 text-indigo-400" />,
                      label: "Total Customers",
                      value: stats.customersCount,
                      suffix: "",
                      cls: "text-slate-800",
                    },
                    {
                      icon: <FileText className="w-4 h-4 text-blue-400" />,
                      label: "Challans Issued",
                      value: stats.challansCount,
                      suffix: "",
                      cls: "text-slate-800",
                    },
                    {
                      icon: <BarChart2 className="w-4 h-4 text-emerald-400" />,
                      label: "Efficiency Rate",
                      value: efficiencyRate,
                      suffix: efficiencyRate !== "—" ? "%" : "",
                      cls: "text-slate-800",
                    },
                  ].map((s) => (
                    <div key={s.label} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        {s.icon}
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                      </div>
                      <p className={`text-2xl font-extrabold tabular-nums ${s.cls}`}>
                        {s.value}{s.suffix}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                    Sales Leads — {dateRange}
                  </p>
                  <div className="w-full">
                    <BarChart
                      bars={salesBars}
                      colorNormal={COLORS.sales.normal}
                      colorPeak={COLORS.sales.peak}
                      maxY={Math.max(...salesBars.map((b) => b.value), 5) + 5}
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                    Challans / Invoices Issued — {dateRange}
                  </p>
                  <div className="w-full">
                    <BarChart
                      bars={invoiceBars}
                      colorNormal={COLORS.invoice.normal}
                      colorPeak={COLORS.invoice.peak}
                      maxY={Math.max(...invoiceBars.map((b) => b.value), 3) + 3}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {isWarehouse && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h3 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-500" />
                  Warehouse &amp; Stock Control Report
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-amber-400" />
                    Stock
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm inline-block bg-emerald-500" />
                    Peak
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Package className="w-4 h-4 text-slate-400" />,
                      label: "Total SKUs",
                      value: stats.productsCount,
                      cls: "text-slate-800",
                    },
                    {
                      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
                      label: "Low Stock Alerts",
                      value: stats.lowStockCount,
                      cls: stats.lowStockCount > 0 ? "text-amber-500" : "text-slate-800",
                    },
                    {
                      icon: <ArrowUpRight className="w-4 h-4 text-rose-400" />,
                      label: "Avg Daily Dispatch",
                      value: avgDailyDispatch,
                      cls: "text-slate-800",
                    },
                  ].map((s) => (
                    <div key={s.label} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        {s.icon}
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                      </div>
                      <p className={`text-2xl font-extrabold tabular-nums ${s.cls}`}>{s.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                    Stock Inward Movement (units) — {dateRange}
                  </p>
                  <div className="w-full">
                    <BarChart
                      bars={stockBars}
                      colorNormal={COLORS.stock.normal}
                      colorPeak={COLORS.stock.peak}
                      maxY={Math.max(...stockBars.map((b) => b.value), 10) + 10}
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                    Outbound Dispatches — {dateRange}
                  </p>
                  <div className="w-full">
                    <BarChart
                      bars={dispatchBars}
                      colorNormal={COLORS.dispatch.normal}
                      colorPeak={COLORS.dispatch.peak}
                      maxY={Math.max(...dispatchBars.map((b) => b.value), 5) + 5}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isSales && !isWarehouse && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
              <h3 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Accounts Portal — Read-Only Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Total Customers", value: stats.customersCount, icon: <Users className="w-4 h-4 text-indigo-400" /> },
                  { label: "Total Products", value: stats.productsCount, icon: <Package className="w-4 h-4 text-slate-400" /> },
                  { label: "Total Challans", value: stats.challansCount, icon: <FileText className="w-4 h-4 text-blue-400" /> },
                  { label: "Low Stock Alerts", value: stats.lowStockCount, icon: <AlertTriangle className="w-4 h-4 text-amber-400" /> },
                ].map((s) => (
                  <div key={s.label} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      {s.icon}
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                    <p className="text-2xl font-extrabold text-slate-800 tabular-nums">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
