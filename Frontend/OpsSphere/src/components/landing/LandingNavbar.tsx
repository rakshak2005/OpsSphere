import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logoImg from "../../assets/logo.png";

export const LandingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      <div
        className={`w-full rounded-2xl transition-all duration-200 pointer-events-auto flex items-center justify-between px-5 py-3 border ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-[#3B82F6] shadow-md"
            : "bg-white/90 backdrop-blur-sm border-[#3B82F6]/60 shadow-xs"
        }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoImg} alt="OpsSphere Logo" className="w-7 h-7 object-contain" />
          <span className="text-base font-extrabold text-[#0D1420] tracking-tight">OpsSphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-600 uppercase tracking-wider">
          <a href="#overview" className="hover:text-[#3B82F6] transition">Platform</a>
          <a href="#layers" className="hover:text-[#3B82F6] transition">Solutions</a>
          <a href="#workflow" className="hover:text-[#3B82F6] transition">Workflow</a>
          <a href="#security" className="hover:text-[#3B82F6] transition">Security</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-xs font-bold text-slate-700 hover:text-[#0D1420] transition px-3 py-2"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-xl transition shadow-xs"
          >
            <span>Open Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-2xl border border-[#3B82F6]/60 p-5 shadow-xl space-y-4 pointer-events-auto">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#layers" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
            <a href="#security" onClick={() => setMobileMenuOpen(false)}>Security</a>
          </nav>
          <div className="pt-3 border-t border-[#DCE3EC] flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-bold text-slate-800 bg-slate-100 py-2.5 rounded-xl"
            >
              Sign in
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-bold text-white bg-[#3B82F6] py-2.5 rounded-xl"
            >
              Open Workspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
