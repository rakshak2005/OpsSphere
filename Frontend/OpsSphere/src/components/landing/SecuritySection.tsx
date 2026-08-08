import React from "react";
import { Lock, ShieldCheck, Database, CheckCircle } from "lucide-react";

export const SecuritySection: React.FC = () => {
  const items = [
    { title: "JWT Token Authentication", desc: "Stateless JSON Web Tokens with strict authorization header checks", icon: Lock },
    { title: "Role-Based Route Guards", desc: "Express Middleware (`restrictTo`) enforcing API permissions", icon: ShieldCheck },
    { title: "PostgreSQL Data Integrity", desc: "Prisma ORM transactions ensuring atomic stock updates", icon: Database },
    { title: "Zod Schema Validation", desc: "Strict request payload validation preventing invalid inputs", icon: CheckCircle },
  ];

  return (
    <section id="security" className="py-24 bg-[#0b1120] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Enterprise Grade Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built around controlled access.
          </h2>
          <p className="text-base text-slate-400">
            Engineered with strict backend security practices to protect operational enterprise data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => {
            const Icon = i.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{i.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{i.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
