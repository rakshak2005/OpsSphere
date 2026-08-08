import React from "react";

export const WorkflowSection: React.FC = () => {
  const steps = [
    { num: "01", title: "Customer Account Created", desc: "Sales/Admin registers wholesale profile" },
    { num: "02", title: "Product SKU Selected", desc: "Catalog checks unit price & warehouse bin" },
    { num: "03", title: "Inventory Level Checked", desc: "Verifies stock availability & thresholds" },
    { num: "04", title: "Draft Challan Created", desc: "Multi-item order draft compiled" },
    { num: "05", title: "Delivery Confirmed", desc: "Sales/Admin confirms delivery release" },
    { num: "06", title: "Stock Deducted", desc: "Automatic transactional database update" },
  ];

  return (
    <section id="workflow" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            End-to-End Automation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From customer to delivery.
          </h2>
          <p className="text-base text-slate-400">
            Follow the complete operational transaction flow enforced by the OpsSphere backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-white/10 relative space-y-2 hover:border-indigo-500/40 transition"
            >
              <span className="text-xl font-bold font-mono text-indigo-400 block">{s.num}</span>
              <h3 className="text-xs font-bold text-white leading-tight">{s.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
