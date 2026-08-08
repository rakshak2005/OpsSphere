import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Eye, Filter, Loader2, FileText } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { ChallanService } from "../../services/challan.service";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import type { Challan } from "../../types/challan.types";

export const ChallanListPage: React.FC = () => {
  const [challans, setChallans] = useState<Challan[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");

  const { user } = useAuth();
  const canCreate = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SALES;

  const fetchChallans = async () => {
    setLoading(true);
    try {
      const data = await ChallanService.getAll({
        status: statusFilter || undefined,
      });
      setChallans(data.challans || []);
    } catch (err) {
      console.error("Failed to fetch delivery challans:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChallans();
  }, [statusFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Delivery Challans</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage customer sales delivery notes, draft order confirmations, and stock reductions.
          </p>
        </div>
        {canCreate && (
          <Link to="/challans/create">
            <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
              Create Draft Challan
            </Button>
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <Filter className="w-4 h-4 text-slate-400 shrink-0" />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:w-48 bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Statuses</option>
          <option value="DRAFT">DRAFT</option>
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : challans.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-500 font-medium">No delivery challans found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5">Challan #</th>
                  <th className="px-6 py-3.5">Customer Account</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Date Created</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {challans.map((ch) => (
                  <tr key={ch.id} className="hover:bg-slate-50/60 transition">
                    <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                      {ch.challanNumber}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800">
                        {ch.customer?.customerName || "Customer Account"}
                      </p>
                      {ch.customer?.businessName && (
                        <span className="text-xs text-slate-400 block">{ch.customer.businessName}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={
                          ch.status === "CONFIRMED"
                            ? "success"
                            : ch.status === "DRAFT"
                            ? "warning"
                            : "danger"
                        }
                      >
                        {ch.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {new Date(ch.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/challans/${ch.id}`}>
                        <Button variant="ghost" size="sm" icon={<Eye className="w-4 h-4" />}>
                          View Note
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
