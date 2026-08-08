import React from "react";
import { Shield, Users, Warehouse, FileCheck } from "lucide-react";

export const RolesSection: React.FC = () => {
  const roles = [
    {
      title: "ADMIN",
      desc: "Full system administration, user account registration, and global operation guards.",
      icon: Shield,
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "SALES",
      desc: "Customer account creation, CRM follow-ups, and sales delivery challan generation.",
      icon: Users,
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
    {
      title: "WAREHOUSE",
      desc: "Product catalog management, stock IN/OUT transactions, and warehouse location bin tags.",
      icon: Warehouse,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "ACCOUNTS",
      desc: "Read-only access to customer ledgers, delivery notes, and operational transaction history.",
      icon: FileCheck,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];

  return (
    <section id="roles" className="py-24 bg-[#0b1120] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Role-Based Access Control
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One platform. Every team.
          </h2>
          <p className="text-base text-slate-400">
            Enforce operational boundaries while keeping department workflows synchronized.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4 hover:border-indigo-500/40 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded border ${r.badgeColor}`}>
                    {r.title}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
