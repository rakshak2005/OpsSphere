import React from "react";
import { XCircle, CheckCircle2, AlertTriangle, ArrowRightLeft, ShieldCheck } from "lucide-react";

export const ProblemSolution: React.FC = () => {
  return (
    <section className="relative min-h-screen py-16 bg-radial from-[#F0F4F8] via-[#EEF3F8] to-[#E2E8F0] border-b border-[#DCE3EC] flex items-center overflow-hidden">
      {/* Dynamic ambient colored mesh spots for wow lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] bg-white border border-[#3B82F6]/30 px-3.5 py-1 rounded-full shadow-xs">
            OPERATIONAL EFFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1420] tracking-tight">
            Eliminate Operational Friction.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Your operations shouldn't live in disconnected silos. Here is the difference.
          </p>
        </div>

        {/* Dynamic Split Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Siloed Manual Operations (The Problem Card) */}
          <div className="p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_20px_40px_-15px_rgba(13,20,32,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(13,20,32,0.1)] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
            {/* Red top accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-rose-500" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-rose-500 uppercase block">TRADITIONAL FLOW</span>
                  <h3 className="text-lg font-extrabold text-[#0D1420]">Siloed Manual Operations</h3>
                </div>
                <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  High Risk of Errors
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 mt-0.5">
                    <XCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Disconnected Customer Records</h4>
                    <p className="text-xs leading-relaxed">Sales teams log notes manually without real-time credit limit or stock visibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 mt-0.5">
                    <XCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Manual Inventory Visibility</h4>
                    <p className="text-xs leading-relaxed">Warehouse staff manually count stock levels, leading to stockout delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 mt-0.5">
                    <XCircle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Delayed Order Updates</h4>
                    <p className="text-xs leading-relaxed">Delivery challans created on paper without instant database stock deduction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Connected Operations (The Solution Card) */}
          <div className="p-8 rounded-[24px] bg-white/70 backdrop-blur-md border border-white/50 hover:border-[#3B82F6]/30 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.12)] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
            {/* Electric Blue top accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#3B82F6] uppercase block">MODERN OPS SYSTEM</span>
                  <h3 className="text-lg font-extrabold text-[#0D1420]">The OpsSphere Connected Way</h3>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  Automated Flow
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/5 flex items-center justify-center shrink-0 border border-[#3B82F6]/10 mt-0.5 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Customer Select → Real-time Stock Check</h4>
                    <p className="text-xs leading-relaxed">Instantly inspect inventory catalog availability before creating delivery notes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/5 flex items-center justify-center shrink-0 border border-[#3B82F6]/10 mt-0.5 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                    <ArrowRightLeft className="w-4.5 h-4.5 text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Delivery Confirmation → Auto Stock Deduction</h4>
                    <p className="text-xs leading-relaxed">Confirming delivery challans instantly deducts product stock in database transaction.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 hover:text-[#0D1420] transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/5 flex items-center justify-center shrink-0 border border-[#3B82F6]/10 mt-0.5 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                    <ShieldCheck className="w-5 h-5 text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0D1420] mb-0.5">Unified Audit Log & Role Protection</h4>
                    <p className="text-xs leading-relaxed">Full transaction trace log with Express middleware securing specific route scopes.</p>
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
