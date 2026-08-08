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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#080B12]/90 backdrop-blur-xs border-b border-[#202838] py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="OpsSphere Logo" className="w-8 h-8 object-contain" />
          <span className="text-base font-bold text-white tracking-wide">OpsSphere</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <a href="#overview" className="hover:text-white transition">Platform</a>
          <a href="#layers" className="hover:text-white transition">Solutions</a>
          <a href="#workflow" className="hover:text-white transition">How It Works</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-xs font-semibold text-slate-300 hover:text-white transition px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#6D5DFB] hover:bg-[#5b4be3] px-4 py-2 rounded-lg transition border border-[#6D5DFB]/50"
          >
            <span>Open Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-[#0E131D] transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E131D] border-b border-[#202838] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#layers" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#security" onClick={() => setMobileMenuOpen(false)}>Security</a>
          </nav>
          <div className="pt-4 border-t border-[#202838] flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold text-slate-200 bg-[#080B12] py-2.5 rounded-lg border border-[#202838]"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold text-white bg-[#6D5DFB] py-2.5 rounded-lg"
            >
              Open Workspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
