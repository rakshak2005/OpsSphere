import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Eliminate Operational Friction
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your operations shouldn't live in silos.
          </h2>
          <p className="text-base text-slate-400">
            Disconnects between sales teams, inventory records, and delivery notes lead to stockouts and human error.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Siloed Problems */}
          <div className="p-8 rounded-2xl bg-rose-950/10 border border-rose-500/20 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Siloed Manual Operations</h3>
                <span className="text-xs text-rose-400 font-medium">Traditional fragmented workflow</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <p className="font-semibold text-rose-300">Scattered Customer Records</p>
                <p className="text-xs text-slate-400">Customer follow-ups and contact history stored across separate spreadsheets.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <p className="font-semibold text-rose-300">Delayed Stock Visibility</p>
                <p className="text-xs text-slate-400">Sales promises orders without real-time knowledge of warehouse inventory levels.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                <p className="font-semibold text-rose-300">Manual Stock Deductions</p>
                <p className="text-xs text-slate-400">Delivery challans confirmed manually without automatic database inventory sync.</p>
              </div>
            </div>
          </div>

          {/* Connected Solution */}
          <div className="p-8 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The OpsSphere Way</h3>
                <span className="text-xs text-emerald-400 font-medium">Unified transactional operational hub</span>
              </div>
            </div>

            {/* Connected Node Visualization */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-xs">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <span className="font-bold text-white block">Customer Account Selected</span>
                  <span className="text-slate-400">Verified CRM profile & contact records</span>
                </div>
              </div>

              <div className="flex justify-center text-indigo-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-xs">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <span className="font-bold text-white block">Live Stock Verified</span>
                  <span className="text-slate-400">Product SKU unit price & warehouse location check</span>
                </div>
              </div>

              <div className="flex justify-center text-indigo-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-xs">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <span className="font-bold text-white block">Delivery Challan Confirmed</span>
                  <span className="text-slate-400">Automatic database stock deduction & audit log entry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
