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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b14]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="OpsSphere Logo"
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wide leading-none">
              OpsSphere
            </span>
            <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest mt-0.5">
              ERP & CRM Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-white transition">Product</a>
          <a href="#modules" className="hover:text-white transition">Modules</a>
          <a href="#workflow" className="hover:text-white transition">Workflow</a>
          <a href="#roles" className="hover:text-white transition">Roles</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white transition px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition shadow-md shadow-indigo-600/30 border border-indigo-500/50"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1120] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Product</a>
            <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Modules</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Workflow</a>
            <a href="#roles" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Roles</a>
            <a href="#security" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Security</a>
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 py-2.5 rounded-xl border border-white/10"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 rounded-xl border border-indigo-500/50"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
