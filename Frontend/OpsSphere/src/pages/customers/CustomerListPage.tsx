import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Plus, Search, Filter, Eye, Trash2, Loader2, Phone, Mail, 
  MoreVertical, Calendar, Building, X, Download
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Badge } from "../../components/ui/Badge";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { CustomerService } from "../../services/customer.service";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import type { Customer } from "../../types/customer.types";

export const CustomerListPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  
  
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  
  
  const [selectedKpi, setSelectedKpi] = useState<"ALL" | "ACTIVE" | "LEAD" | "TODAY">("ALL");

  
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  
  const [drawerCustomer, setDrawerCustomer] = useState<Customer | null>(null);

  
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [bulkDeleteConfirm, setBulkDeleteConfirm] = useState(false);
  const [sortBy, setSortBy] = useState("name-asc");

  const { user } = useAuth();
  const canEdit = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SALES;

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const data = await CustomerService.getAll({
        search: search || undefined,
        status: statusFilter || undefined,
      });
      setCustomers(data.customers || []);
    } catch (err) {
      console.error("Failed to fetch customers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [search, statusFilter]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await CustomerService.delete(deleteId);
      setCustomers((prev) => prev.filter((c) => c.id !== deleteId));
      setDeleteId(null);
      if (drawerCustomer?.id === deleteId) setDrawerCustomer(null);
    } catch (err) {
      console.error("Failed to delete customer:", err);
    }
  };

  const handleBulkDelete = async () => {
    try {
      
      await Promise.all(Array.from(selectedIds).map((id) => CustomerService.delete(id)));
      setCustomers((prev) => prev.filter((c) => !selectedIds.has(c.id)));
      setSelectedIds(new Set());
      setBulkDeleteConfirm(false);
      setDrawerCustomer(null);
    } catch (err) {
      console.error("Failed bulk deletion:", err);
    }
  };

  const handleStatusChange = async (id: string, newStatus: any) => {
    try {
      const updated = await CustomerService.update(id, { status: newStatus });
      setCustomers((prev) => prev.map((c) => (c.id === id ? updated : c)));
      if (drawerCustomer?.id === id) setDrawerCustomer(updated);
      setActiveMenuId(null);
    } catch (err) {
      console.error("Failed to change customer status:", err);
    }
  };

  const handleBulkStatusChange = async (newStatus: any) => {
    try {
      await Promise.all(
        Array.from(selectedIds).map((id) => CustomerService.update(id, { status: newStatus }))
      );
      setSelectedIds(new Set());
      fetchCustomers();
    } catch (err) {
      console.error("Failed bulk status change:", err);
    }
  };

  const exportToCSV = () => {
    const headers = ["Customer Name", "Business Name", "Mobile", "Email", "Type", "Status", "GST Number", "Address", "Follow-Up Date", "Notes"];
    const rows = filteredCustomers.map((c) => [
      c.customerName,
      c.businessName || "",
      c.mobile,
      c.email || "",
      c.customerType || "",
      c.status,
      c.gstNumber || "",
      c.address || "",
      c.followUpDate ? new Date(c.followUpDate).toLocaleDateString() : "",
      c.notes || "",
    ]);
    const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `customers_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  
  const checkFollowUpDays = (dateStr: string | null | undefined) => {
    if (!dateStr) return null;
    const target = new Date(dateStr);
    target.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diff = target.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const getFollowUpBadge = (dateStr: string | null | undefined) => {
    const diff = checkFollowUpDays(dateStr);
    if (diff === null) return { label: "—", colorClass: "text-slate-400 font-medium" };

    if (diff === 0) {
      return { label: "● Today", colorClass: "text-amber-600 font-bold flex items-center gap-1.5" };
    } else if (diff === 1) {
      return { label: "● Tomorrow", colorClass: "text-blue-600 font-semibold flex items-center gap-1.5" };
    } else if (diff < 0) {
      return { label: `● Overdue ${Math.abs(diff)}d`, colorClass: "text-rose-600 font-extrabold flex items-center gap-1.5" };
    } else {
      return { label: `Upcoming (${new Date(dateStr!).toLocaleDateString()})`, colorClass: "text-slate-500 font-medium" };
    }
  };

  
  const filteredCustomers = customers.filter((c) => {
    if (selectedKpi === "ACTIVE") return c.status === "ACTIVE";
    if (selectedKpi === "LEAD") return c.status === "LEAD";
    if (selectedKpi === "TODAY") return checkFollowUpDays(c.followUpDate) === 0;
    return true; 
  });

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.customerName.localeCompare(b.customerName);
      case "name-desc":
        return b.customerName.localeCompare(a.customerName);
      case "business-asc":
        return (a.businessName || "").localeCompare(b.businessName || "");
      case "followup-asc": {
        if (!a.followUpDate) return 1;
        if (!b.followUpDate) return -1;
        return new Date(a.followUpDate).getTime() - new Date(b.followUpDate).getTime();
      }
      case "followup-desc": {
        if (!a.followUpDate) return 1;
        if (!b.followUpDate) return -1;
        return new Date(b.followUpDate).getTime() - new Date(a.followUpDate).getTime();
      }
      case "created-desc":
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      case "created-asc":
        return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
      default:
        return 0;
    }
  });

  
  const totalCount = customers.length;
  const activeCount = customers.filter((c) => c.status === "ACTIVE").length;
  const leadCount = customers.filter((c) => c.status === "LEAD").length;
  const todayFollowUpCount = customers.filter((c) => checkFollowUpDays(c.followUpDate) === 0).length;

  
  const handleToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(new Set(filteredCustomers.map((c) => c.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-6 relative">
      
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Customer Directory</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage wholesale/retail customer accounts, follow-ups, and business details.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            icon={<Download className="w-4 h-4 text-slate-500" />}
            onClick={exportToCSV}
            disabled={filteredCustomers.length === 0}
          >
            Export CSV
          </Button>
          {canEdit && (
            <Link to="/customers/create">
              <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
                Add Customer
              </Button>
            </Link>
          )}
        </div>
      </div>

      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { key: "ALL", label: "Total Accounts", count: totalCount, highlight: "border-slate-200 hover:border-slate-300" },
          { key: "ACTIVE", label: "Active Customers", count: activeCount, highlight: "border-slate-200 hover:border-emerald-300" },
          { key: "LEAD", label: "Active Leads", count: leadCount, highlight: "border-slate-200 hover:border-amber-300" },
          { key: "TODAY", label: "Follow-ups Today", count: todayFollowUpCount, highlight: "border-slate-200 hover:border-blue-300" },
        ].map((card) => {
          const isActive = selectedKpi === card.key;
          return (
            <button
              key={card.key}
              onClick={() => setSelectedKpi(card.key as any)}
              className={`p-4 rounded-2xl border text-left transition-all shadow-2xs flex flex-col justify-between min-h-[90px] bg-white ${card.highlight} ${
                isActive ? "ring-2 ring-indigo-500/80 border-indigo-400" : ""
              }`}
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{card.label}</span>
              <p className="text-2xl font-extrabold text-slate-800 tabular-nums mt-2">{card.count}</p>
            </button>
          );
        })}
      </div>

      
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="w-full sm:flex-1 relative">
          <Input
            placeholder="Search by name, email, mobile, business, or GST...                 ⌘K"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4" />}
          />
        </div>
        <div className="w-full sm:w-48 flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Statuses</option>
            <option value="LEAD">LEAD</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <div className="w-full sm:w-48 flex items-center gap-2 border border-slate-200 rounded-lg px-2.5 py-1 bg-white">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full text-xs text-slate-700 bg-transparent border-0 focus:outline-hidden font-medium cursor-pointer"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="business-asc">Business Name</option>
            <option value="followup-asc">Follow-Up (Earliest)</option>
            <option value="followup-desc">Follow-Up (Latest)</option>
            <option value="created-desc">Newest Added</option>
            <option value="created-asc">Oldest Added</option>
          </select>
        </div>
      </div>

      
      {selectedIds.size > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-indigo-50 border border-indigo-100 px-5 py-3 rounded-xl">
          <span className="text-xs font-bold text-indigo-900">
            {selectedIds.size} customer{selectedIds.size > 1 ? "s" : ""} selected
          </span>
          <div className="flex items-center gap-2">
            <select
              onChange={(e) => {
                if (e.target.value) handleBulkStatusChange(e.target.value);
                e.target.value = "";
              }}
              className="bg-white text-slate-800 text-xs rounded-lg border border-slate-200 px-3 py-1.5 font-bold cursor-pointer"
            >
              <option value="">Change Status...</option>
              <option value="ACTIVE">Mark Active</option>
              <option value="LEAD">Mark Lead</option>
              <option value="INACTIVE">Mark Inactive</option>
            </select>
            {canEdit && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => setBulkDeleteConfirm(true)}
                icon={<Trash2 className="w-4 h-4" />}
              >
                Delete Selected
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedIds(new Set())}
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : sortedCustomers.length === 0 ? (
          <div className="py-12 text-center text-slate-500 text-sm font-medium">
            No customers match the current filter options.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5 w-12 text-center">
                    <input
                      type="checkbox"
                      onChange={handleToggleSelectAll}
                      checked={selectedIds.size === sortedCustomers.length && sortedCustomers.length > 0}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </th>
                  <th className="px-6 py-3.5">Customer / Business</th>
                  <th className="px-6 py-3.5">Contact Info</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Follow-Up</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedCustomers.map((c) => {
                  const isChecked = selectedIds.has(c.id);
                  const followUp = getFollowUpBadge(c.followUpDate);
                  
                  return (
                    <tr key={c.id} className={`hover:bg-slate-50/50 transition-colors ${isChecked ? "bg-indigo-50/20" : ""}`}>
                      
                      
                      <td className="px-6 py-4 text-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleSelect(c.id)}
                          className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </td>

                      
                      <td className="px-6 py-4">
                        <span 
                          onClick={() => setDrawerCustomer(c)}
                          className="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 block"
                        >
                          {c.customerName}
                        </span>
                        {c.businessName && (
                          <span className="text-xs text-slate-400 block mt-0.5">{c.businessName}</span>
                        )}
                      </td>

                      
                      <td className="px-6 py-4">
                        <div className="flex flex-col text-[11px] gap-0.5">
                          <span className="flex items-center gap-1 text-slate-700 font-medium">
                            <Phone className="w-3 h-3 text-slate-400" />
                            {c.mobile}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <Mail className="w-3 h-3 text-slate-400" />
                            {c.email}
                          </span>
                        </div>
                      </td>

                      
                      <td className="px-6 py-4">
                        <Badge variant="info">{c.customerType}</Badge>
                      </td>

                      
                      <td className="px-6 py-4">
                        <Badge variant={c.status === "ACTIVE" ? "success" : c.status === "LEAD" ? "warning" : "danger"}>
                          {c.status}
                        </Badge>
                      </td>

                      
                      <td className="px-6 py-4 font-mono font-semibold text-[11px]">
                        <span className={followUp.colorClass}>{followUp.label}</span>
                      </td>

                      
                      <td className="px-6 py-4 text-right relative">
                        <div className="flex items-center justify-end gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setDrawerCustomer(c)} 
                            icon={<Eye className="w-4 h-4 text-indigo-600" />}
                          >
                            View
                          </Button>
                          <button
                            onClick={() => setActiveMenuId(activeMenuId === c.id ? null : c.id)}
                            className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>

                        
                        {activeMenuId === c.id && (
                          <>
                            <div 
                              onClick={() => setActiveMenuId(null)}
                              className="fixed inset-0 z-20 cursor-default" 
                            />
                            <div className="absolute right-6 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg z-30 py-1.5 text-left">
                              <Link 
                                to={`/customers/${c.id}`} 
                                className="block px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 uppercase tracking-wider"
                              >
                                Full Account Profile
                              </Link>
                              
                              <div className="h-px bg-slate-100 my-1" />
                              
                              {c.status !== "ACTIVE" && (
                                <button
                                  onClick={() => handleStatusChange(c.id, "ACTIVE")}
                                  className="w-full text-left block px-4 py-2 text-xs font-bold text-emerald-600 hover:bg-slate-50 uppercase tracking-wider"
                                >
                                  Mark Active
                                </button>
                              )}
                              {c.status !== "LEAD" && (
                                <button
                                  onClick={() => handleStatusChange(c.id, "LEAD")}
                                  className="w-full text-left block px-4 py-2 text-xs font-bold text-amber-600 hover:bg-slate-50 uppercase tracking-wider"
                                >
                                  Mark Lead
                                </button>
                              )}
                              {c.status !== "INACTIVE" && (
                                <button
                                  onClick={() => handleStatusChange(c.id, "INACTIVE")}
                                  className="w-full text-left block px-4 py-2 text-xs font-bold text-slate-400 hover:bg-slate-50 uppercase tracking-wider"
                                >
                                  Mark Inactive
                                </button>
                              )}

                              {canEdit && (
                                <>
                                  <div className="h-px bg-slate-100 my-1" />
                                  <button
                                    onClick={() => {
                                      setDeleteId(c.id);
                                      setActiveMenuId(null);
                                    }}
                                    className="w-full text-left block px-4 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 uppercase tracking-wider"
                                  >
                                    Delete Customer
                                  </button>
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      
      {drawerCustomer && (
        <>
          
          <div 
            onClick={() => setDrawerCustomer(null)}
            className="fixed inset-0 z-40 bg-slate-900/35 backdrop-blur-xs transition-opacity" 
          />
          
          <div className="fixed top-0 right-0 h-full w-[420px] max-w-full bg-white border-l border-slate-200 z-50 shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-in">
            
            
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Customer Details</span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1 truncate max-w-[280px]">
                  {drawerCustomer.customerName}
                </h3>
              </div>
              <button 
                onClick={() => setDrawerCustomer(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              
              
              <div className="flex items-center gap-2">
                <Badge variant="info">{drawerCustomer.customerType}</Badge>
                <Badge variant={drawerCustomer.status === "ACTIVE" ? "success" : drawerCustomer.status === "LEAD" ? "warning" : "danger"}>
                  {drawerCustomer.status}
                </Badge>
              </div>

              
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Contact Information</span>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs space-y-2.5">
                  <a href={`tel:${drawerCustomer.mobile}`} className="flex items-center gap-2 font-bold text-slate-700 hover:text-indigo-600">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {drawerCustomer.mobile}
                  </a>
                  <a href={`mailto:${drawerCustomer.email}`} className="flex items-center gap-2 font-bold text-slate-700 hover:text-indigo-600">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {drawerCustomer.email}
                  </a>
                </div>
              </div>

              
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Business Registry</span>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs space-y-2.5">
                  <div className="flex items-start gap-2">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block">Registered Address</span>
                      <p className="text-slate-500 leading-relaxed mt-0.5">{drawerCustomer.address}</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200" />
                  <div>
                    <span className="text-slate-400 font-semibold uppercase tracking-wider text-[9px] block">GST Registration</span>
                    <span className="font-bold text-slate-800 block mt-1 font-mono">
                      {drawerCustomer.gstNumber || "Not Registered (GSTIN: —)"}
                    </span>
                  </div>
                </div>
              </div>

              
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Follow-up Status</span>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className={getFollowUpBadge(drawerCustomer.followUpDate).colorClass}>
                      {getFollowUpBadge(drawerCustomer.followUpDate).label}
                    </span>
                  </div>
                  {drawerCustomer.notes && (
                    <p className="text-[11px] text-slate-500 font-medium italic mt-2.5 bg-white border border-slate-100 p-2.5 rounded-lg leading-relaxed">
                      " {drawerCustomer.notes} "
                    </p>
                  )}
                </div>
              </div>

            </div>

            
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3.5 shrink-0">
              <button 
                onClick={() => setDrawerCustomer(null)}
                className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700"
              >
                Close
              </button>
              <Link to={`/customers/${drawerCustomer.id}`}>
                <Button variant="primary" size="sm">
                  Full Account Profile
                </Button>
              </Link>
            </div>

          </div>
        </>
      )}

      
      <ConfirmDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Customer Account"
        message="Are you sure you want to delete this customer account? This action will set their status to Inactive and delete profile records."
      />

      <ConfirmDialog
        isOpen={bulkDeleteConfirm}
        onClose={() => setBulkDeleteConfirm(false)}
        onConfirm={handleBulkDelete}
        title="Delete Selected Customers"
        message={`Are you sure you want to delete the ${selectedIds.size} selected customer accounts?`}
      />

    </div>
  );
};
