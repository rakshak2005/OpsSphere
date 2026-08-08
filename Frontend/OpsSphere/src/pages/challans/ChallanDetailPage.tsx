import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, User as UserIcon, Calendar, Loader2, Download } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { ChallanService } from "../../services/challan.service";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import type { Challan } from "../../types/challan.types";
import logoImg from "../../assets/logo.png";

export const ChallanDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [challan, setChallan] = useState<Challan | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const { user } = useAuth();
  const canConfirmOrCancel = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SALES;

  const fetchChallan = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const data = await ChallanService.getById(id);
      setChallan(data);
    } catch (err) {
      console.error("Failed to load challan details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChallan();
  }, [id]);

  const handleConfirm = async () => {
    if (!id) return;
    setActionLoading(true);
    try {
      const updated = await ChallanService.confirm(id);
      setChallan(updated);
      setConfirmModalOpen(false);
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to confirm challan.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!id) return;
    setActionLoading(true);
    try {
      const updated = await ChallanService.cancel(id);
      setChallan(updated);
      setCancelModalOpen(false);
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to cancel challan.");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading Challan Details...</p>
      </div>
    );
  }

  if (!challan) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-slate-500">Challan not found.</p>
      </div>
    );
  }

  const isDraft = challan.status === "DRAFT";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Print styles style block */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          aside, header, nav, button, .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .print-card {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      ` }} />

      <div className="flex items-center justify-between print:hidden">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)} icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Directory
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()} icon={<Download className="w-4 h-4" />}>
            Download PDF
          </Button>
        </div>
        
        {isDraft && canConfirmOrCancel && (
          <div className="flex items-center gap-2">
            <Button
              variant="danger"
              size="sm"
              onClick={() => setCancelModalOpen(true)}
              icon={<XCircle className="w-4 h-4" />}
            >
              Cancel Challan
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setConfirmModalOpen(true)}
              icon={<CheckCircle2 className="w-4 h-4" />}
            >
              Confirm Delivery
            </Button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 print-card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="OpsSphere Logo" className="w-12 h-12 object-contain" />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-slate-900">{challan.challanNumber}</h1>
                <Badge
                  variant={
                    challan.status === "CONFIRMED"
                      ? "success"
                      : challan.status === "DRAFT"
                      ? "warning"
                      : "danger"
                  }
                >
                  {challan.status}
                </Badge>
              </div>
              <p className="text-xs text-slate-400 mt-1">Delivery Challan Reference Document</p>
            </div>
          </div>
          <div className="text-left sm:text-right text-xs text-slate-500 space-y-1">
            <p className="flex items-center gap-1.5 justify-start sm:justify-end">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {new Date(challan.createdAt).toLocaleString()}
            </p>
            <p className="flex items-center gap-1.5 justify-start sm:justify-end">
              <UserIcon className="w-3.5 h-3.5 text-slate-400" />
              Logged By: {challan.createdBy?.name || "System"}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
          <span className="text-slate-400 font-semibold uppercase tracking-wider block">Customer Details:</span>
          <p className="font-bold text-slate-900 text-sm">{challan.customer?.customerName}</p>
          {challan.customer?.businessName && <p className="text-slate-600 font-medium">{challan.customer.businessName}</p>}
          <p className="text-slate-500">{challan.customer?.address}</p>
          <p className="text-slate-500">Contact: {challan.customer?.mobile} | {challan.customer?.email}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Product Line Items</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">SKU Snapshot</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {challan.items?.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{item.productSnapshotName}</td>
                    <td className="px-4 py-3 font-mono text-slate-500">{item.productSnapshotSku}</td>
                    <td className="px-4 py-3 tabular-nums">₹{Number(item.unitPrice).toLocaleString()}</td>
                    <td className="px-4 py-3 font-bold text-slate-800 tabular-nums">{item.quantity}</td>
                    <td className="px-4 py-3 font-bold text-slate-900 text-right tabular-nums">
                      ₹{(Number(item.unitPrice) * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoice footer sign-offs for professional print looks */}
        <div className="hidden print:flex items-center justify-between pt-16 text-xs border-t border-slate-100">
          <div>
            <div className="w-40 border-b border-slate-300 mb-1" />
            <p className="text-slate-400 font-semibold uppercase tracking-wider">Receiver Signature</p>
          </div>
          <div className="text-right">
            <div className="w-40 border-b border-slate-300 mb-1 ml-auto" />
            <p className="text-slate-400 font-semibold uppercase tracking-wider">Authorized Signatory</p>
          </div>
        </div>

      </div>

      <ConfirmDialog
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleConfirm}
        title="Confirm Delivery Challan"
        message="Are you sure you want to confirm this delivery challan? Confirming will trigger automatic stock deductions for all line items."
        variant="primary"
        confirmText="Confirm Stock Deduction"
        isLoading={actionLoading}
      />

      <ConfirmDialog
        isOpen={cancelModalOpen}
        onClose={() => setCancelModalOpen(false)}
        onConfirm={handleCancel}
        title="Cancel Delivery Challan"
        message="Are you sure you want to cancel this delivery challan? Status will change to CANCELLED."
        variant="danger"
        confirmText="Cancel Challan"
        isLoading={actionLoading}
      />
    </div>
  );
};
