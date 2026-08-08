import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff, ArrowRight, Loader2, AlertCircle, ShieldCheck, Mail, Lock, Key } from "lucide-react";
import logoImg from "../../assets/logo.png";
import warehouseBg from "../../../warehouse.jpg";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Enter your email address.");
      return;
    }
    if (!password) {
      setError("Enter your password.");
      return;
    }
    if (!secretCode.trim()) {
      setError("Enter your secret user code.");
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password, secretCode.trim());
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Email, password, or secret code is incorrect.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-between px-6 sm:px-12 lg:px-20 overflow-hidden antialiased font-sans bg-[#0D1420]">

      {/* 1. Background Warehouse Image (Unchanged) */}
      <img
        src={warehouseBg}
        alt="OpsSphere warehouse operations background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Subtle overlay for contrast */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(7, 11, 18, 0.1) 0%, rgba(7, 11, 18, 0.2) 50%, rgba(7, 11, 18, 0.45) 85%, rgba(7, 11, 18, 0.55) 100%)",
        }}
      />

      {/* Left: Background Brand Message (positioned lower-left) */}
      <div className="hidden lg:flex flex-col justify-end h-full py-16 max-w-lg z-10 relative pointer-events-none select-none">
        <div className="space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase">
            ONE OPERATIONAL SYSTEM
          </span>
          <h2 className="text-4xl font-extrabold text-white tracking-tight leading-none space-y-1">
            <span className="block">Connect.</span>
            <span className="block">Operate.</span>
            <span className="block text-[#3B82F6]">Deliver.</span>
          </h2>
          <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
            One operational system for customers, inventory, sales, and delivery.
          </p>
        </div>
      </div>

      {/* Right: Login Card Container (Centered vertically, shifted slightly left of the right edge) */}
      <div className="w-full lg:w-auto h-full flex items-center justify-center lg:justify-end lg:pr-40 z-10 relative">
        
        {/* Whitish High-Clarity Authentication Panel */}
        <div
          className="w-full sm:w-[440px] rounded-[24px] flex flex-col justify-between"
          style={{
            maxWidth: "440px",
            padding: "36px",
            background: "rgba(255, 255, 255, 0.96)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="space-y-6">

            {/* Back to Home */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-[#3B82F6] transition-colors duration-150 group"
            >
              <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </button>

            {/* Header: Logo, Brand & Tagline */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <img src={logoImg} alt="OpsSphere Logo" className="w-7 h-7 object-contain" />
                <span className="text-xl font-extrabold tracking-tight text-[#0D1420]">OpsSphere</span>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#3B82F6] block">
                  OPERATIONS CONTROL PLATFORM
                </span>
                <div className="pt-0.5">
                  <h1 className="text-2xl font-extrabold text-[#0D1420] tracking-tight">Welcome back</h1>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Sign in to your OpsSphere workspace.
                  </p>
                </div>
              </div>
            </div>


            {/* Error Message */}
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700 font-medium">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs text-[#0D1420] pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 shadow-xs placeholder:text-slate-400 focus:outline-hidden transition-all font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#3B82F6";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.25)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Password</label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-xs text-[#0D1420] pl-10 pr-10 py-3 rounded-xl border border-slate-200 shadow-xs placeholder:text-slate-400 focus:outline-hidden transition-all font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#3B82F6";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.25)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Secret Code Input Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Secret User Code</label>
                <div className="relative flex items-center">
                  <Key className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="text"
                    placeholder="Enter secret code (e.g. 111)"
                    required
                    value={secretCode}
                    onChange={(e) => setSecretCode(e.target.value)}
                    className="w-full text-xs text-[#0D1420] pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 shadow-xs placeholder:text-slate-400 focus:outline-hidden transition-all font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#3B82F6";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.25)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer font-medium select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 bg-white/70 text-[#3B82F6] focus:ring-[#3B82F6]"
                  />
                  <span className="text-[11px]">Remember this device</span>
                </label>
                <a href="#forgot" className="text-[11px] text-[#3B82F6] font-bold hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer disabled:opacity-60 mt-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in to OpsSphere</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Security Divider & Detail */}
            <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2 font-semibold text-[#0D1420]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Secure Workspace</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Role-based access</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
