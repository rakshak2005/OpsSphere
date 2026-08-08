import React from "react";
import { Users, Package, FileText, ShieldCheck } from "lucide-react";

export const PlatformLayers: React.FC = () => {
  const layers = [
    {
      step: "01",
      title: "CRM & ACCOUNTS",
      desc: "Custom wholesale customer profiles, milestone follow-ups, and contact directories.",
      icon: Users,
    },
    {
      step: "02",
      title: "INVENTORY & CATALOG",
      desc: "Real-time stock catalog, automated reorder thresholds, and stock IN/OUT ledger.",
      icon: Package,
    },
    {
      step: "03",
      title: "SALES & CHALLANS",
      desc: "Multi-product delivery notes, draft confirmation workflows, and automatic stock deduction.",
      icon: FileText,
    },
    {
      step: "04",
      title: "ROLE AUTHORIZATION",
      desc: "Express RBAC middleware enforcing strict permissions for Admin, Sales, and Warehouse staff.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="layers" className="py-24 bg-[#0D1420] text-white border-y border-slate-800/60 relative overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            One system. Four operational layers.
          </h2>
          <p className="text-base text-slate-400">
            Connect every part of your operation without forcing teams into disconnected tools.
          </p>
        </div>

        {/* Dynamic Glassmorphism Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {layers.map((l, idx) => {
            const Icon = l.icon;
            return (
              <div
                key={idx}
                className="relative p-7 rounded-[22px] bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/5 hover:border-[#3B82F6]/60 transition-all duration-300 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[#3B82F6]/10"
              >
                {/* Subtle top glow line on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[22px]" />

                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 flex items-center justify-center font-bold group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                    {l.step}
                  </span>
                </div>

                <h3 className="text-[15px] font-extrabold text-white mb-2.5 tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                  {l.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal group-hover:text-slate-300 transition-colors duration-300">
                  {l.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
