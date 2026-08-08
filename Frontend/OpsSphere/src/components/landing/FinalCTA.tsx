import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#DCE3EC]">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D1420] tracking-tight">
          Ready to see your operation clearly?
        </h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Open the OpsSphere workspace and explore the complete platform.
        </p>

        <div className="pt-2">
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-md shadow-[#3B82F6]/25 transition cursor-pointer"
          >
            <span>Open Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
