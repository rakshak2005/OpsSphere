import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Lock, Mail, AlertCircle } from "lucide-react";
import logoImg from "../../assets/logo.png";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Invalid credentials or server unavailable.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 antialiased">
      <div className="max-w-md w-full">
        {/* Brand Card Header */}
        <div className="text-center mb-8">
          <img src={logoImg} alt="OpsSphere Logo" className="w-16 h-16 object-contain mx-auto mb-3 drop-shadow-md" />
          <h1 className="text-2xl font-bold text-white tracking-tight">OpsSphere ERP</h1>
          <p className="text-slate-400 text-sm mt-1">
            Enterprise Management & CRM Portal
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Account Login</h2>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-rose-800 leading-relaxed">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="user@opssphere.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-4 h-4" />}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-4 h-4" />}
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-2 py-2.5"
              isLoading={isLoading}
            >
              Sign In to Portal
            </Button>
          </form>

          {/* Preset Demo User Info Footer */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Default Demo Roles:
            </p>
            <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <p><strong>Admin:</strong> admin@opssphere.com</p>
              <p><strong>Sales:</strong> sales@opssphere.com</p>
              <p><strong>Warehouse:</strong> warehouse@opssphere.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
