import React from "react";
import { Users, Package, FileCheck, Layers } from "lucide-react";

export const TrustMetricsStrip: React.FC = () => {
  const items = [
    {
      step: "01",
      title: "CRM & Accounts",
      desc: "Wholesale & retail customer management",
      icon: Users,
    },
    {
      step: "02",
      title: "Inventory Control",
      desc: "Stock IN/OUT tracking with low stock alerts",
      icon: Package,
    },
    {
      step: "03",
      title: "Delivery Challans",
      desc: "Draft creation & automated stock deduction",
      icon: FileCheck,
    },
    {
      step: "04",
      title: "Role Security",
      desc: "Strict RBAC authorization for portal teams",
      icon: Layers,
    },
  ];

  return (
    <section className="py-12 bg-[#0b1120] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            One Platform. Every Operation.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition group"
              >
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition" />
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
