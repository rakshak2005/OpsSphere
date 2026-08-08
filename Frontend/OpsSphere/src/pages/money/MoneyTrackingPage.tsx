import React, { useEffect, useState } from "react";
import { Coins, Loader2, ArrowLeftRight, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { InventoryService } from "../../services/inventory.service";
import type { InventoryMovement } from "../../types/inventory.types";

export const MoneyTrackingPage: React.FC = () => {
  const [movements, setMovements] = useState<InventoryMovement[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovements = async () => {
    setLoading(true);
    try {
      const res = await InventoryService.getMovements();
      setMovements(res.movements || []);
    } catch (err) {
      console.error("Failed to load financial ledger:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovements();
  }, []);

  // Compute total money values
  let totalInflowValuation = 0;
  let totalOutflowValuation = 0;

  movements.forEach((m) => {
    const value = m.quantity * (m.product?.unitPrice || 0);
    if (m.type === "IN") {
      totalInflowValuation += value;
    } else {
      totalOutflowValuation += value;
    }
  });

  const netAssetValuation = totalInflowValuation - totalOutflowValuation;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Coins className="w-4 h-4 text-[#3B82F6]" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Money Tracking & Valuation</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time financial passbook tracing stock inflow credits (restocks) and outflow debits (dispatches).
          </p>
        </div>
      </div>

      {/* Financial Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Inflow Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[110px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Credited Capital (Inflow)</span>
            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-emerald-600 tabular-nums">
              + ₹{totalInflowValuation.toLocaleString()}
            </h3>
            <p className="text-[9px] text-slate-400 mt-1 font-medium">Accumulated value added via stock imports</p>
          </div>
        </div>

        {/* Outflow Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[110px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Debited Capital (Outflow)</span>
            <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center">
              <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-rose-600 tabular-nums">
              - ₹{totalOutflowValuation.toLocaleString()}
            </h3>
            <p className="text-[9px] text-slate-400 mt-1 font-medium">Accumulated value reduced via client dispatches</p>
          </div>
        </div>

        {/* Net Asset Valuation Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[110px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Net Valuation Impact</span>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#3B82F6]" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className={`text-2xl font-extrabold tabular-nums ${netAssetValuation >= 0 ? "text-slate-800" : "text-rose-600"}`}>
              {netAssetValuation >= 0 ? "+" : ""}₹{netAssetValuation.toLocaleString()}
            </h3>
            <p className="text-[9px] text-slate-400 mt-1 font-medium">Current net financial balance of assets</p>
          </div>
        </div>

      </div>

      {/* Passbook Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
            Valuation Passbook Ledger
          </span>
          <span className="text-[9px] font-bold text-[#3B82F6] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
            Live Database Sync
          </span>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
        ) : movements.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm font-medium">
            No valuation movements logged. Stock IN or OUT adjustments will automatically populate this ledger.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs text-slate-600">
              <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Particulars</th>
                  <th className="px-6 py-4">Unit Price</th>
                  <th className="px-6 py-4 text-center">Movement Qty</th>
                  <th className="px-6 py-4 text-right">Inflow (Credit)</th>
                  <th className="px-6 py-4 text-right">Outflow (Debit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold">
                {movements.map((m) => {
                  const isIN = m.type === "IN";
                  const txnValue = m.quantity * (m.product?.unitPrice || 0);
                  return (
                    <tr key={m.id} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 text-slate-400 font-mono">
                        {new Date(m.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-900 block font-bold">{m.product?.productName}</span>
                        <span className="text-[10px] text-slate-400 font-mono font-medium block mt-0.5">
                          SKU: {m.product?.sku} | {m.reason || "Inventory Adjustment"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-mono">
                        ₹{(m.product?.unitPrice || 0).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant={isIN ? "success" : "danger"}>
                          <span className="flex items-center gap-1 font-bold text-[9px]">
                            {isIN ? `+${m.quantity} IN` : `-${m.quantity} OUT`}
                          </span>
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right font-extrabold text-emerald-600 font-mono tabular-nums">
                        {isIN ? `+₹${txnValue.toLocaleString()}` : "—"}
                      </td>
                      <td className="px-6 py-4 text-right font-extrabold text-rose-600 font-mono tabular-nums">
                        {!isIN ? `-₹${txnValue.toLocaleString()}` : "—"}
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
  );
};
