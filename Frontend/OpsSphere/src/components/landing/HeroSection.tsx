import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E131D] border border-[#202838] text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#24D6A3] animate-pulse" />
              SYSTEM STATUS: ALL SYSTEMS OPERATIONAL
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFB]">
                OPERATIONS / CONTROL CENTER
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Your business, <br />
                without the blind spots.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl">
              Real-time operational control over customer accounts, inventory movements, sales orders, and delivery challans — from one unified system.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                to="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-white bg-[#6D5DFB] hover:bg-[#5b4be3] border border-[#6D5DFB]/50 transition shadow-sm"
              >
                <span>Open Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#showcase"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-slate-300 bg-[#0E131D] hover:bg-[#141B2A] hover:text-white border border-[#202838] transition"
              >
                <span>See how it works</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#202838] flex items-center gap-6 text-[11px] font-mono text-slate-500">
              <span>● API CONNECTED</span>
              <span>REST v1 Endpoint</span>
              <span>PostgreSQL Transactional</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0E131D] rounded-xl border border-[#202838] p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#202838] pb-3 text-xs font-mono">
                <span className="font-bold text-white tracking-wide">OPSPHERE COMMAND</span>
                <span className="text-[#24D6A3] bg-[#24D6A3]/10 px-2 py-0.5 rounded border border-[#24D6A3]/20">
                  ● LIVE SYNC
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  OPERATIONS HEALTH METRICS
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-[#080B12] rounded-lg border border-[#202838]">
                    <span className="text-[10px] text-slate-400 block">Fulfillment</span>
                    <p className="text-lg font-bold text-white mt-1 tabular-nums">98.4%</p>
                  </div>
                  <div className="p-3 bg-[#080B12] rounded-lg border border-[#202838]">
                    <span className="text-[10px] text-[#F5B84B] block">Low Stock</span>
                    <p className="text-lg font-bold text-[#F5B84B] mt-1 tabular-nums">7 Items</p>
                  </div>
                  <div className="p-3 bg-[#080B12] rounded-lg border border-[#202838]">
                    <span className="text-[10px] text-slate-400 block">Deliveries</span>
                    <p className="text-lg font-bold text-white mt-1 tabular-nums">94 Notes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                  LIVE TRANSACTION ACTIVITY
                </span>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5 bg-[#080B12] rounded-lg border border-[#202838]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24D6A3]" />
                      <span className="text-white font-semibold">Challan #CH-1024</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Stock Deducted (-12 units)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#080B12] rounded-lg border border-[#202838]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D5DFB]" />
                      <span className="text-white font-semibold">SKU: MOT-7500</span>
                    </div>
                    <span className="text-[#24D6A3] text-[11px]">Stock Replenished (+50 units)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
