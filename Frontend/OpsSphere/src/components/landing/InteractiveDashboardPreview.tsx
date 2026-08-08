import React, { useState } from "react";
import { Users, Warehouse, FileText, LayoutDashboard } from "lucide-react";
import logoImg from "../../assets/logo.png";

export const InteractiveDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "customers" | "inventory" | "challans">("dashboard");

  return (
    <section className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Interactive Workspace Preview
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for high data density.
          </h2>
          <p className="text-base text-slate-400">
            Preview the actual OpsSphere interface — clean typography, sticky topbars, and immediate operational controls.
          </p>
        </div>

        <div className="bg-[#0f172a] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-[#070b14] border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="OpsSphere Logo" className="w-6 h-6 object-contain" />
              <span className="text-xs font-bold text-white tracking-wide">OpsSphere Enterprise Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono text-emerald-400">REST API Connected</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[500px]">
            <div className="w-full lg:w-60 bg-[#090d16] p-4 border-r border-white/10 space-y-2 shrink-0">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
                Workspace Menu
              </div>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeTab === "dashboard" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => setActiveTab("customers")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeTab === "customers" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Customer CRM</span>
              </button>

              <button
                onClick={() => setActiveTab("inventory")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeTab === "inventory" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <Warehouse className="w-4 h-4" />
                <span>Inventory Ledger</span>
              </button>

              <button
                onClick={() => setActiveTab("challans")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeTab === "challans" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Delivery Challans</span>
              </button>
            </div>

            <div className="flex-1 p-6 bg-[#0f172a]/60 space-y-6">
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-white/10">
                    <div>
                      <h3 className="text-base font-bold text-white">Operations Command Center</h3>
                      <p className="text-xs text-slate-400">Live system status aggregated across modules.</p>
                    </div>
                    <span className="text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1 rounded-full">
                      System Operational
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Total Customers</span>
                      <p className="text-xl font-bold text-white mt-1 tabular-nums">1,248</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Catalog Products</span>
                      <p className="text-xl font-bold text-white mt-1 tabular-nums">482</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[11px] text-amber-400 block">Low Stock Alerts</span>
                      <p className="text-xl font-bold text-amber-400 mt-1 tabular-nums">7 Items</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                      <span className="text-[11px] text-indigo-400 block">Open Challans</span>
                      <p className="text-xl font-bold text-white mt-1 tabular-nums">14 Notes</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "customers" && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Customer Directory Preview</h3>
                  <div className="bg-slate-900/80 rounded-xl border border-white/10 p-4 text-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 font-semibold text-slate-400">
                      <span>Customer Account</span>
                      <span>Type</span>
                      <span>Status</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <p className="font-bold text-white">Apex Logistics Pvt Ltd</p>
                        <span className="text-slate-400">gst: 27AAAAA0000A1Z5</span>
                      </div>
                      <span className="text-indigo-400 font-semibold">WHOLESALE</span>
                      <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">ACTIVE</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <p className="font-bold text-white">Matrix Retail Solutions</p>
                        <span className="text-slate-400">gst: 27BBBBB1111B2Z6</span>
                      </div>
                      <span className="text-purple-400 font-semibold">RETAIL</span>
                      <span className="text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">LEAD</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "inventory" && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Inventory Movement Logs</h3>
                  <div className="bg-slate-900/80 rounded-xl border border-white/10 p-4 text-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 font-semibold text-slate-400">
                      <span>Product SKU</span>
                      <span>Type</span>
                      <span>Quantity</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-bold text-white">MOT-7500-IND</span>
                      <span className="text-emerald-400 font-semibold">IN (Supplier Shipment)</span>
                      <span className="font-bold text-emerald-400">+50 Units</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-bold text-white">HVA-9800</span>
                      <span className="text-rose-400 font-semibold">OUT (Challan Delivery)</span>
                      <span className="font-bold text-rose-400">-12 Units</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "challans" && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Delivery Challan Note #CH-1024</h3>
                  <div className="bg-slate-900/80 rounded-xl border border-white/10 p-4 text-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Customer: Apex Logistics</span>
                      <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">DRAFT STATUS</span>
                    </div>
                    <div className="p-3 bg-slate-950/60 rounded border border-white/5 space-y-1">
                      <p className="font-semibold text-white">Items: Industrial Motor 7.5HP (Qty: 2)</p>
                      <span className="text-slate-400">Unit Price: ₹14,500 | Total Snapshot: ₹29,000</span>
                    </div>
                    <p className="text-[11px] text-indigo-300 italic">Clicking "Confirm Delivery" automatically reduces stock by 2 units.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
