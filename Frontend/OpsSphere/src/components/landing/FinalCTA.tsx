import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready to see your operation clearly?
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Open the OpsSphere workspace and explore the complete ERP + CRM system.
        </p>

        <div className="pt-2">
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-xs text-white bg-[#6D5DFB] hover:bg-[#5b4be3] border border-[#6D5DFB]/50 transition shadow-sm"
          >
            <span>Enter Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
