import React from "react";
import { Users, Package, FileText, Shield, ArrowUpRight } from "lucide-react";

export const FeatureModulesSection: React.FC = () => {
  const modules = [
    {
      id: "crm",
      title: "Customer Relationship Management",
      badge: "CRM Module",
      desc: "Turn customer accounts into structured business relationships with complete follow-up timelines.",
      icon: Users,
      gradient: "from-indigo-500/20 to-purple-500/5",
      borderColor: "border-indigo-500/30",
      features: [
        "Wholesale & Retail Account Profiles",
        "GST Identification Number Tracking",
        "Timestamped Follow-up Notes History",
        "Customer Status Filters (LEAD, ACTIVE)",
      ],
    },
    {
      id: "inventory",
      title: "Real-Time Inventory Control",
      badge: "ERP Module",
      desc: "Know what you have, where it is stored, and get instant low-stock alerts before fulfillment delays.",
      icon: Package,
      gradient: "from-emerald-500/20 to-teal-500/5",
      borderColor: "border-emerald-500/30",
      features: [
        "SKU & Warehouse Bin Location Mapping",
        "Low-Stock Threshold Alert Indicators",
        "Stock IN / Stock OUT Audit Ledger",
        "Reason & Reference PO Logging",
      ],
    },
    {
      id: "challans",
      title: "Sales Delivery Challans",
      badge: "Sales Workflow",
      desc: "Streamline customer delivery notes from multi-product draft creation to automated stock deduction.",
      icon: FileText,
      gradient: "from-purple-500/20 to-pink-500/5",
      borderColor: "border-purple-500/30",
      features: [
        "Multi-Item Draft Challan Builder",
        "Real-Time Unit Price Calculations",
        "Automated Database Stock Deduction",
        "Product Snapshot Information Records",
      ],
    },
    {
      id: "roles",
      title: "Role-Based Team Operations",
      badge: "Administration",
      desc: "Empower every department with exact permissions required for their daily operational tasks.",
      icon: Shield,
      gradient: "from-cyan-500/20 to-blue-500/5",
      borderColor: "border-cyan-500/30",
      features: [
        "ADMIN Full System Control & User Registration",
        "SALES Customer & Challan Creation Access",
        "WAREHOUSE Catalog & Stock Management",
        "ACCOUNTS Financial & Audit Log Visibility",
      ],
    },
  ];

  return (
    <section id="modules" className="py-24 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Core Modules
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything your operations team needs.
          </h2>
          <p className="text-base text-slate-400">
            Modular enterprise capability designed specifically for structured business operations.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className={`p-8 rounded-2xl bg-gradient-to-br ${m.gradient} border ${m.borderColor} backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl space-y-6 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {m.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{m.desc}</p>
                </div>

                <ul className="space-y-2.5 pt-2 border-t border-white/10">
                  {m.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
