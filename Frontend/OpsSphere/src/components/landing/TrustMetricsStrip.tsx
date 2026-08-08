import React from "react";
import { Users, Package, FileText, Layers } from "lucide-react";

export const TrustMetricsStrip: React.FC = () => {
  const layers = [
    { title: "CRM & ACCOUNTS", desc: "Wholesale profiles & follow-up timelines", icon: Users },
    { title: "INVENTORY & CATALOG", desc: "SKU mapping & stock IN/OUT ledger", icon: Package },
    { title: "SALES & CHALLANS", desc: "Multi-item draft delivery notes", icon: FileText },
    { title: "ROLE AUTHORIZATION", desc: "Express RBAC middleware security", icon: Layers },
  ];

  return (
    <section id="layers" className="py-16 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFB]">OPERATIONS</span>
          <h2 className="text-2xl font-bold text-white mt-1">One system. Four operational layers.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((l, idx) => {
            const Icon = l.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-[#0E131D] rounded-xl border border-[#202838] hover:border-[#333F56] transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#6D5DFB]" />
                  <span className="text-xs font-bold text-white tracking-wide">{l.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{l.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
