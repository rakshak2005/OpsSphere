import React, { useState } from "react";
import { ShieldCheck, UserCheck, Briefcase, Warehouse, TrendingUp } from "lucide-react";

export const RolePerspectives: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS">("SALES");

  const rolePreviews = {
    ADMIN: {
      metrics: [
        { label: "REGISTERED STAFF", val: "14 Accounts" },
        { label: "SYSTEM HEALTH", val: "98.4% Operational" },
        { label: "AUDIT TRACE", val: "100% Logged" },
      ],
      desc: "Full administrative governance, system configuration, and user onboarding controls.",
      icon: UserCheck,
    },
    SALES: {
      metrics: [
        { label: "CRM ACCOUNTS", val: "1,248 Customers" },
        { label: "OPEN CHALLANS", val: "14 Draft Notes" },
        { label: "SHIPPED TODAY", val: "31 Deliveries" },
      ],
      desc: "Customer follow-ups, price snapshots, and delivery challan creation workspace.",
      icon: Briefcase,
    },
    WAREHOUSE: {
      metrics: [
        { label: "STOCK HEALTH", val: "98.2% Reserve" },
        { label: "LOW STOCK ALERTS", val: "7 SKUs Threshold" },
        { label: "STOCK IN LOGS", val: "+50 Units Logged" },
      ],
      desc: "Real-time inventory ledger, Stock IN receipts, and dispatch verification panels.",
      icon: Warehouse,
    },
    ACCOUNTS: {
      metrics: [
        { label: "CONFIRMED VALUE", val: "₹84,500 Shipped" },
        { label: "DELIVERY RECORDS", val: "184 Completed" },
        { label: "TOTAL REVENUE", val: "₹8.7M Processed" },
      ],
      desc: "Read-only financial audit of delivery challan snapshots and product totals.",
      icon: TrendingUp,
    },
  };

  const preview = rolePreviews[activeRole];

  return (
    <section id="roles" className="relative min-h-screen py-16 bg-radial from-[#F0F4F8] via-[#EEF3F8] to-[#E2E8F0] border-b border-[#DCE3EC] flex items-center overflow-hidden">
      {/* Light background decorative mesh spot */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] bg-white border border-[#3B82F6]/30 px-3.5 py-1 rounded-full shadow-xs mb-3.5">
            DYNAMIC ROLE PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1420] tracking-tight">
            One platform. Different perspectives.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3">
            Select a role to preview how the backend customizes workspace controls and data feeds.
          </p>
        </div>

        {/* Role Selectors - Whitish Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {(["ADMIN", "SALES", "WAREHOUSE", "ACCOUNTS"] as const).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-6 py-3 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer border ${
                activeRole === role
                  ? "bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/20 border-[#3B82F6]"
                  : "bg-white/80 backdrop-blur-xs text-slate-600 hover:text-[#0D1420] hover:bg-white border-slate-200 shadow-xs"
              }`}
            >
              {role} PERSPECTIVE
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel - Whitish Glassmorphism */}
        <div className="max-w-[1100px] mx-auto bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-[24px] border border-white/50 shadow-[0_20px_45px_-15px_rgba(13,20,32,0.06)] space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/60 pb-5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#3B82F6] uppercase">ROLE MATRIX / {activeRole}</span>
              <h3 className="text-lg font-extrabold text-[#0D1420]">{activeRole} Workspace Dashboard</h3>
            </div>
            <span className="text-[11px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              REST Guard Enforced
            </span>
          </div>

          <p className="text-sm text-slate-600 font-semibold">{preview.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {preview.metrics.map((m, i) => (
              <div key={i} className="p-5.5 bg-white border border-slate-200/80 rounded-2xl shadow-2xs hover:border-[#3B82F6]/40 transition-colors duration-200">
                <span className="text-[11px] text-slate-500 font-bold block">{m.label}</span>
                <p className="text-2xl font-extrabold text-[#0D1420] mt-1.5 tabular-nums">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
