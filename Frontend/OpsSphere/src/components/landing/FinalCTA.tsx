import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.png";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#111827] to-[#070b14] border border-white/15 text-center space-y-6 shadow-2xl">
          <img src={logoImg} alt="OpsSphere Logo" className="w-16 h-16 object-contain mx-auto mb-2 drop-shadow-lg" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bring your operations into one sphere.
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Customers. Products. Inventory. Delivery Challans. Unified in one powerful workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 border border-indigo-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Enter OpsSphere Portal</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-white/10 transition-all"
            >
              Sign In to Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
