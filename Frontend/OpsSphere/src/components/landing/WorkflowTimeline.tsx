import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const WorkflowTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 0,
      step: "01",
      title: "CUSTOMER",
      subtitle: "CRM Account Selection",
      detail: "Select registered wholesale customer profile (e.g. Apex Logistics) with contact & GST validation.",
    },
    {
      id: 1,
      step: "02",
      title: "PRODUCT",
      subtitle: "Catalog Mapping",
      detail: "Choose active product SKUs (e.g. Industrial Motor 7.5HP) with unit price snapshot lock.",
    },
    {
      id: 2,
      step: "03",
      title: "INVENTORY",
      subtitle: "Stock Threshold Check",
      detail: "Backend verifies available stock quantity against low-stock threshold rules before note generation.",
    },
    {
      id: 3,
      step: "04",
      title: "DELIVERY CHALLAN",
      subtitle: "Draft Compilation",
      detail: "Compile draft delivery challan (#CH-1024) containing line items, snapshot totals, and dispatch address.",
    },
    {
      id: 4,
      step: "05",
      title: "STOCK UPDATED",
      subtitle: "Transactional Deduction",
      detail: "Confirming delivery note commits a Prisma database transaction, auto-deducting stock and logging INVENTORY_OUT.",
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white border-b border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
            TRANSACTIONAL WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1420] tracking-tight">
            From customer selection to stock deduction.
          </h2>
          <p className="text-base text-slate-600">
            Click any stage in the operational lifecycle to inspect data transformations.
          </p>
        </div>

        {/* Timeline Control Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-5 rounded-2xl text-left border transition cursor-pointer ${
                activeStep === s.id
                  ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-md shadow-[#3B82F6]/20"
                  : "bg-[#F7F9FC] text-slate-700 border-[#DCE3EC] hover:border-[#3B82F6]/50"
              }`}
            >
              <span className={`text-xs font-mono font-bold block ${activeStep === s.id ? "text-white/80" : "text-[#3B82F6]"}`}>
                STAGE {s.step}
              </span>
              <h3 className="text-xs font-extrabold block mt-1 tracking-tight">{s.title}</h3>
              <span className={`text-[10px] block ${activeStep === s.id ? "text-white/80" : "text-slate-500"}`}>
                {s.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Card */}
        <div className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#DCE3EC] shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#DCE3EC] pb-4">
            <div>
              <span className="text-xs font-mono text-[#3B82F6]">STAGE {steps[activeStep].step} SPECIFICATION</span>
              <h3 className="text-lg font-extrabold text-[#0D1420]">
                {steps[activeStep].title} — {steps[activeStep].subtitle}
              </h3>
            </div>
            <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Verified Logic
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {steps[activeStep].detail}
          </p>
        </div>

      </div>
    </section>
  );
};
