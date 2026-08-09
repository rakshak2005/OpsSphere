import React from "react";
import { Lock, ShieldCheck, Database, CheckCircle2 } from "lucide-react";

export const SecurityArchitecture: React.FC = () => {
  const items = [
    {
      title: "JWT Token Authentication",
      desc: "Stateless JSON Web Tokens with strict authorization header checks",
      icon: Lock,
    },
    {
      title: "Role-Based Route Guards",
      desc: "Express Middleware (`restrictTo`) enforcing API permissions",
      icon: ShieldCheck,
    },
    {
      title: "PostgreSQL Data Integrity",
      desc: "Prisma ORM transactions ensuring atomic stock updates",
      icon: Database,
    },
    {
      title: "Zod Schema Validation",
      desc: "Strict request payload validation preventing invalid inputs",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="security" className="py-24 bg-[#EEF3F8] border-b border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            ENTERPRISE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1420] tracking-tight">
            Built around controlled access.
          </h2>
          <p className="text-base text-slate-600">
            Engineered with strict backend security practices to protect operational enterprise data.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => {
            const Icon = i.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#DCE3EC] shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-[#0D1420]">{i.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{i.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
