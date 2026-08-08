import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const workflowSteps = [
    {
      id: 0,
      number: "01",
      title: "CUSTOMER",
      subtitle: "CRM Selection",
      details: {
        account: "Apex Logistics Pvt Ltd",
        type: "WHOLESALE",
        contact: "+91 98765 43210",
        address: "Industrial Area Phase II, BLR",
      },
    },
    {
      id: 1,
      number: "02",
      title: "PRODUCT",
      subtitle: "Catalog Mapping",
      details: {
        product: "Industrial Motor 7.5HP",
        sku: "MOT-7500-IND",
        unitPrice: "₹14,500",
        location: "Warehouse Bin A-12",
      },
    },
    {
      id: 2,
      number: "03",
      title: "INVENTORY",
      subtitle: "Stock Threshold Check",
      details: {
        currentStock: "64 Units Available",
        minimumStock: "10 Units Alert Threshold",
        status: "Healthy Reserve",
        warehouse: "Main Facility BLR-01",
      },
    },
    {
      id: 3,
      number: "04",
      title: "DELIVERY CHALLAN",
      subtitle: "Draft Compilation",
      details: {
        challanNo: "#CH-1024",
        lineItems: "2 Products (Qty: 2)",
        status: "DRAFT (Awaiting Confirmation)",
        created: "Today, 16:38 PM",
      },
    },
    {
      id: 4,
      number: "05",
      title: "STOCK UPDATED",
      subtitle: "Transactional Deduction",
      details: {
        deduction: "-2 Units Auto-Deducted",
        remainingStock: "62 Units Remaining",
        auditLog: "INVENTORY_OUT Entry Created",
        dbStatus: "Prisma Transaction Committed",
      },
    },
  ];

  const currentStep = workflowSteps[activeStep];

  return (
    <section id="workflow" className="py-24 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFB]">INTERACTIVE WORKFLOW</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">From customer selection to stock deduction.</h2>
          <p className="text-sm text-slate-400 mt-1">
            Click any step in the timeline to inspect live operational data transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {workflowSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-4 rounded-xl text-left border transition cursor-pointer ${
                activeStep === step.id
                  ? "bg-[#6D5DFB]/15 border-[#6D5DFB] text-white"
                  : "bg-[#0E131D] border-[#202838] text-slate-400 hover:border-[#333F56]"
              }`}
            >
              <span className="text-xs font-mono font-bold text-[#6D5DFB] block">{step.number}</span>
              <span className="text-xs font-bold block text-white mt-1">{step.title}</span>
              <span className="text-[10px] text-slate-500 block">{step.subtitle}</span>
            </button>
          ))}
        </div>

        <div className="bg-[#0E131D] p-6 rounded-xl border border-[#202838] space-y-4">
          <div className="flex items-center justify-between border-b border-[#202838] pb-4">
            <div>
              <span className="text-xs font-mono text-[#6D5DFB]">STAGE {currentStep.number} DETAILS</span>
              <h3 className="text-base font-bold text-white">{currentStep.title} — {currentStep.subtitle}</h3>
            </div>
            <span className="text-xs font-mono text-[#24D6A3] bg-[#24D6A3]/10 px-3 py-1 rounded border border-[#24D6A3]/20 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified Logic
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {Object.entries(currentStep.details).map(([key, val], i) => (
              <div key={i} className="p-3 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">{key}</span>
                <span className="font-bold text-white mt-1 block">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
