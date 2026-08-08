import React from "react";
import logoImg from "../../assets/logo.png";

export const ProductShowcase: React.FC = () => {
  return (
    <section className="relative min-h-screen py-16 bg-[#0D1420] text-white border-b border-slate-800/80 flex items-center overflow-hidden">
      {/* Deep tech ambient background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full mb-3.5">
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything happening in your business, <br />
            <span className="text-[#3B82F6]">at a glance.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            High-fidelity dashboard interface built for live operational control and data density.
          </p>
        </div>

        {/* Scaled Core Dashboard Container for Viewport Fit */}
        <div className="w-full max-w-[1100px] mx-auto bg-[#070B12] rounded-[24px] border border-slate-800 p-5 sm:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] space-y-5">
          
          {/* Top Navigation */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="OpsSphere Logo" className="w-5.5 h-5.5 object-contain" />
              <span className="text-xs font-bold text-white tracking-wide">OpsSphere Core Dashboard</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
              <span>Environment: Production</span>
              <span className="text-[#10B981]">● REST v1 Connected</span>
            </div>
          </div>

          {/* Core Stat Widgets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl bg-[#0D1420] border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="text-[11px] text-slate-400 block font-medium">Active Customers</span>
              <p className="text-xl font-extrabold text-white mt-1 tabular-nums">1,248</p>
              <span className="text-[9px] text-[#10B981] font-bold block mt-0.5">+12% Wholesale</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1420] border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="text-[11px] text-slate-400 block font-medium">Catalog Products</span>
              <p className="text-xl font-extrabold text-white mt-1 tabular-nums">482</p>
              <span className="text-[9px] text-slate-400 block mt-0.5">Active SKUs</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1420] border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="text-[11px] text-amber-400 block font-medium">Low Stock Alerts</span>
              <p className="text-xl font-extrabold text-amber-400 mt-1 tabular-nums">7 Items</p>
              <span className="text-[9px] text-amber-300/80 block mt-0.5">Needs Replenish</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1420] border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="text-[11px] text-[#3B82F6] block font-medium">Delivery Challans</span>
              <p className="text-xl font-extrabold text-white mt-1 tabular-nums">94 Drafts</p>
              <span className="text-[9px] text-slate-400 block mt-0.5">Pending Confirm</span>
            </div>
          </div>

          {/* Operational Logs Panel */}
          <div className="bg-[#0D1420] p-4.5 rounded-xl border border-slate-800/80 space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-wider">
                Live Transaction Log & Inventory Sync
              </h3>
              <span className="text-[9.5px] font-mono text-slate-400">PostgreSQL Transactional</span>
            </div>

            <div className="space-y-2 text-[10.5px] font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#070B12] border border-slate-800/80">
                <div>
                  <p className="font-bold text-white">Challan #CH-1024 (Apex Logistics)</p>
                  <span className="text-slate-400 text-[10px]">Industrial Motor 7.5HP (Qty: 2)</span>
                </div>
                <span className="text-[#10B981] font-bold text-[10px]">STOCK DEDUCTED (-2 Units)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#070B12] border border-slate-800/80">
                <div>
                  <p className="font-bold text-white">SKU: HVA-9800 (Hydraulic Valve)</p>
                  <span className="text-slate-400 text-[10px]">Supplier Shipment Inward</span>
                </div>
                <span className="text-[#3B82F6] font-bold text-[10px]">STOCK REPLENISHED (+50 Units)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
