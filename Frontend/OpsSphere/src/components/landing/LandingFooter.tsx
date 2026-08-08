import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#05080f] border-t border-white/10 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="OpsSphere Logo" className="w-7 h-7 object-contain" />
              <span className="text-base font-bold text-white tracking-wide">OpsSphere</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Enterprise ERP & CRM Operations Platform connecting customer relationship management with real-time stock control.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-white transition">Overview</a></li>
              <li><a href="#modules" className="hover:text-white transition">Modules</a></li>
              <li><a href="#workflow" className="hover:text-white transition">Workflow</a></li>
              <li><a href="#roles" className="hover:text-white transition">Role Matrix</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-white transition">Sign In</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
              <li><a href="#security" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Technology</h4>
            <p className="text-slate-400 leading-relaxed">
              Node.js • Express • TypeScript • PostgreSQL • Prisma • React • Vite • Tailwind CSS
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 OpsSphere. Built for modern operations.</p>
          <div className="flex items-center gap-4">
            <span>Case Study Project</span>
            <span>•</span>
            <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold">
              Portal Login →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
