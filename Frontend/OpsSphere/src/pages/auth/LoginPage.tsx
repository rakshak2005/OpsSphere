import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import logoImg from "../../assets/logo.png";
import editorialArtwork from "../../assets/opssphere_editorial_operations.png";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Email or password is incorrect.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex overflow-hidden antialiased font-sans">
      
      {/* LEFT SIDE: 55% True Full-Screen Artwork Cover (No Text, No Margins, No Padding) */}
      <div className="hidden lg:block lg:w-[55%] h-full relative overflow-hidden shrink-0 border-r border-[#E5EAF0]">
        <img
          src={editorialArtwork}
          alt="OpsSphere Enterprise Operations Visual"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* RIGHT SIDE: 45% Full Screen Form Viewport */}
      <div className="w-full lg:w-[45%] h-full p-6 sm:p-12 lg:p-16 flex flex-col justify-between bg-white overflow-y-auto">
        <div className="max-w-[400px] w-full mx-auto space-y-6 my-auto">
          
          {/* Header: Logo & Titles */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="OpsSphere Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-[#0D1420] tracking-tight">OpsSphere</span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
              OPERATIONS CONTROL PLATFORM
            </span>
            <div className="pt-2">
              <h1 className="text-3xl font-extrabold text-[#0D1420] tracking-tight">Welcome back</h1>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Sign in to your OpsSphere workspace.
              </p>
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
              <label className="text-xs font-semibold text-[#0D1420]">Email address</label>
              <input
                type="email"
                placeholder="you@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-[#0D1420] text-xs px-3.5 py-3 rounded-xl border border-[#E2E8F0] shadow-xs placeholder:text-slate-400 focus:outline-hidden focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0D1420]">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0D1420]/0 text-[#0D1420] text-xs pl-3.5 pr-10 py-3 rounded-xl border border-[#E2E8F0] shadow-xs placeholder:text-slate-400 focus:outline-hidden focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#E2E8F0] text-[#3B82F6] focus:ring-[#3B82F6]"
                />
                <span className="text-xs">Remember this device</span>
              </label>
              <a href="#forgot" className="text-xs text-[#3B82F6] font-semibold hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs rounded-xl shadow-xs transition-all cursor-pointer disabled:opacity-60"
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

          {/* Security Detail */}
          <div className="pt-4 border-t border-[#E2E8F0] space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0D1420]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Secure workspace access</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal">
              Role-based permissions · Protected session
            </p>
          </div>

          {/* Preset Demo Accounts */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E5EAF0] text-xs font-mono space-y-1 text-slate-600">
            <span className="text-[10px] font-bold text-slate-400 block mb-1">DEMO CREDENTIALS:</span>
            <p><strong className="text-[#0D1420]">Admin:</strong> admin@opssphere.com</p>
            <p><strong className="text-[#0D1420]">Sales:</strong> sales@opssphere.com</p>
            <p><strong className="text-[#0D1420]">Warehouse:</strong> warehouse@opssphere.com</p>
          </div>

        </div>
      </div>

    </div>
  );
};
