import React, { useState } from "react";

export const RolesSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS">("SALES");

  const rolePreviews = {
    ADMIN: {
      metrics: [
        { label: "REGISTERED USERS", val: "14 Staff Accounts" },
        { label: "RBAC PERMISSIONS", val: "Full Access" },
        { label: "SYSTEM LOGS", val: "100% Audit Trace" },
      ],
      activity: "Admin registered new portal user (Role: WAREHOUSE)",
    },
    SALES: {
      metrics: [
        { label: "CRM ACCOUNTS", val: "1,248 Customers" },
        { label: "OPEN CHALLANS", val: "14 Draft Notes" },
        { label: "DELIVERIES TODAY", val: "31 Shipped" },
      ],
      activity: "Sales created Draft Delivery Challan #CH-1024",
    },
    WAREHOUSE: {
      metrics: [
        { label: "STOCK HEALTH", val: "98.2% Healthy" },
        { label: "LOW STOCK ALERTS", val: "7 SKUs Warning" },
        { label: "STOCK IN MOVEMENTS", val: "+50 Units Logged" },
      ],
      activity: "Warehouse logged Stock IN movement (PO-9821)",
    },
    ACCOUNTS: {
      metrics: [
        { label: "DELIVERY VALUE", val: "₹84,500 Confirmed" },
        { label: "COMPLETED NOTES", val: "184 Delivery Records" },
        { label: "ACCESS LEVEL", val: "Read-Only Audit" },
      ],
      activity: "Accounts verified Delivery Note #CH-1023 financial record",
    },
  };

  const preview = rolePreviews[activeRole];

  return (
    <section id="roles" className="py-24 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFB]">DYNAMIC ROLE PERSPECTIVES</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">One platform. Different perspectives.</h2>
          <p className="text-sm text-slate-400 mt-1">
            Select a role to preview how the backend customizes workspace controls and data feeds.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {(["ADMIN", "SALES", "WAREHOUSE", "ACCOUNTS"] as const).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition cursor-pointer ${
                activeRole === role
                  ? "bg-[#6D5DFB] text-white border border-[#6D5DFB]"
                  : "bg-[#0E131D] text-slate-400 border border-[#202838] hover:text-white"
              }`}
            >
              {role} PERSPECTIVE
            </button>
          ))}
        </div>

        <div className="bg-[#0E131D] p-6 rounded-xl border border-[#202838] space-y-6">
          <div className="flex items-center justify-between border-b border-[#202838] pb-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              {activeRole} Active Dashboard View
            </span>
            <span className="text-[11px] font-mono text-[#6D5DFB] bg-[#6D5DFB]/10 px-3 py-1 rounded border border-[#6D5DFB]/20">
              REST Guard Filtered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {preview.metrics.map((m, i) => (
              <div key={i} className="p-4 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-[10px] font-mono text-slate-500 block">{m.label}</span>
                <p className="text-xl font-bold text-white mt-1 tabular-nums">{m.val}</p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#080B12] rounded-lg border border-[#202838] flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">ROLE ACTIVITY STREAM:</span>
            <span className="text-white font-semibold">{preview.activity}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
