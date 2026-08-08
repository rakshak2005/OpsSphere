import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Building, FileText, Calendar, MessageSquare, Plus, Loader2 } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { CustomerService } from "../../services/customer.service";
import type { Customer } from "../../types/customer.types";

export const CustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState("");
  const [addingNote, setAddingNote] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchCustomer = async () => {
      setLoading(true);
      try {
        const data = await CustomerService.getById(id);
        setCustomer(data);
      } catch (err) {
        console.error("Failed to load customer details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !newNote.trim()) return;

    setAddingNote(true);
    try {
      const updated = await CustomerService.addNote(id, newNote.trim());
      setCustomer(updated);
      setNewNote("");
    } catch (err) {
      console.error("Failed to add note:", err);
    } finally {
      setAddingNote(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading Customer Account...</p>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-slate-500">Customer account not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={() => navigate(-1)} icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Directory
        </Button>
        <div className="flex gap-2">
          <Badge variant="info">{customer.customerType}</Badge>
          <Badge variant={customer.status === "ACTIVE" ? "success" : "warning"}>{customer.status}</Badge>
        </div>
      </div>

      {/* Main Info Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{customer.customerName}</h1>
          {customer.businessName && (
            <p className="text-sm font-semibold text-indigo-600 mt-1 flex items-center gap-1.5">
              <Building className="w-4 h-4" />
              {customer.businessName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <span className="text-slate-400 block font-medium">Mobile Number:</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              {customer.mobile}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Email Address:</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              {customer.email}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">GST Identification:</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              {customer.gstNumber || "N/A"}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Next Follow-up Date:</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {customer.followUpDate ? new Date(customer.followUpDate).toLocaleString() : "Not Scheduled"}
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Registered Address
          </span>
          <p className="text-sm text-slate-700 font-medium">{customer.address}</p>
        </div>
      </div>

      {/* Notes & Follow-ups Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-600" />
          Follow-up Logs & History
        </h2>

        {/* Add Note Form */}
        <form onSubmit={handleAddNote} className="flex gap-2">
          <input
            type="text"
            placeholder="Type a new follow-up update..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="flex-1 bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          />
          <Button type="submit" variant="primary" isLoading={addingNote} icon={<Plus className="w-4 h-4" />}>
            Add Note
          </Button>
        </form>

        {/* Display Timeline */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono whitespace-pre-wrap leading-relaxed text-slate-700">
          {customer.notes || "No notes logged for this customer."}
        </div>
      </div>
    </div>
  );
};
