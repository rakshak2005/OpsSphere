import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Package, FileText, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import logoImg from "../../assets/logo.png";

export const HeroSection: React.FC = () => {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Next-Gen Enterprise ERP & CRM Operations
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Run Every Operation. <br />
            From <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">One Sphere.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            OpsSphere unifies customer accounts, product catalogs, inventory movements, and delivery challans into one high-performance operational workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 border border-indigo-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Workspace</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#preview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-white/10 transition-all"
            >
              <Play className="w-4 h-4 fill-current text-indigo-400" />
              <span>View Interactive Demo</span>
            </a>
          </div>
        </div>

        <div id="preview" className="mt-16 sm:mt-24 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#0f172a]/90 border border-white/15 p-3 sm:p-4 shadow-2xl backdrop-blur-xl animate-float">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 bg-[#070b14]/60 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-500">opssphere.app/dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={logoImg} alt="Logo" className="w-4 h-4 object-contain" />
                <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">OpsSphere Core</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-[#1e293b]/60 border border-white/10 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Customers</span>
                    <Users className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1 tabular-nums">1,248</p>
                  <span className="text-[10px] text-emerald-400 font-semibold">+12% this month</span>
                </div>

                <div className="bg-[#1e293b]/60 border border-white/10 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Catalog SKUs</span>
                    <Package className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1 tabular-nums">482</p>
                  <span className="text-[10px] text-slate-400">Warehouse location mapped</span>
                </div>

                <div className="bg-[#1e293b]/60 border border-white/10 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Low Stock Alerts</span>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-xl font-bold text-amber-400 mt-1 tabular-nums">7 Items</p>
                  <span className="text-[10px] text-amber-300">Needs replenishment</span>
                </div>

                <div className="bg-[#1e293b]/60 border border-white/10 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Delivery Challans</span>
                    <FileText className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1 tabular-nums">94 Drafts</p>
                  <span className="text-[10px] text-indigo-300">Ready for confirmation</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="lg:col-span-2 bg-[#1e293b]/40 border border-white/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                      Live Inventory Transactions
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Live Sync</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-white/5">
                      <div>
                        <p className="font-semibold text-white">Industrial Motor 7.5HP</p>
                        <span className="text-[10px] text-slate-400 font-mono">SKU: MOT-7500-IND</span>
                      </div>
                      <span className="font-bold text-emerald-400">+50 Units (Stock IN)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-white/5">
                      <div>
                        <p className="font-semibold text-white">Hydraulic Valve Assembly</p>
                        <span className="text-[10px] text-slate-400 font-mono">SKU: HVA-9800</span>
                      </div>
                      <span className="font-bold text-rose-400">-12 Units (Challan Delivery)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e293b]/40 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      System Access & Roles
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-center justify-between">
                        <span>ADMIN</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SALES</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>WAREHOUSE</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-center">
                    <span className="text-[10px] text-slate-400">REST API connected to PostgreSQL</span>
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
