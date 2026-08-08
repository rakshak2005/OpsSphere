import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#0D1420] text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="OpsSphere Logo" className="w-6 h-6 object-contain" />
              <span className="text-sm font-extrabold text-white tracking-wide">OpsSphere</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              ERP + CRM Operations Platform
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#overview" className="hover:text-white transition">Overview</a></li>
              <li><a href="#layers" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#workflow" className="hover:text-white transition">Workflow</a></li>
              <li><a href="#roles" className="hover:text-white transition">Roles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/login" className="hover:text-white transition">Customer CRM</Link></li>
              <li><Link to="/login" className="hover:text-white transition">Inventory Ledger</Link></li>
              <li><Link to="/login" className="hover:text-white transition">Delivery Challans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Technology</h4>
            <p className="text-slate-400 text-xs leading-relaxed font-mono">
              Node.js • Express • TypeScript • PostgreSQL • Prisma • React • Vite
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <p>© 2026 OpsSphere Operations Platform.</p>
          <div className="flex items-center gap-4">
            <span>Case Study Project</span>
            <span>•</span>
            <Link to="/login" className="text-[#3B82F6] hover:underline font-semibold">
              Open Workspace →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
