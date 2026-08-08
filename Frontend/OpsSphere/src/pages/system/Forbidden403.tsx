import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";

export const Forbidden403: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-lg mx-auto my-12 shadow-xs">
      <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mx-auto mb-4">
        <ShieldAlert className="w-7 h-7" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">403 — Access Forbidden</h1>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Your current user role does not have authorization permissions to access this administrative module. Please contact your system admin if you believe this is an error.
      </p>
      <Link to="/dashboard">
        <Button variant="outline" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};
