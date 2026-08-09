import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { CustomerService } from "../../services/customer.service";
import { ProductService } from "../../services/product.service";
import { ChallanService } from "../../services/challan.service";
import type { Customer } from "../../types/customer.types";
import type { Product } from "../../types/product.types";

interface ChallanRow {
  productId: string;
  quantity: number;
}

export const ChallanCreatePage: React.FC = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<ChallanRow[]>([{ productId: "", quantity: 1 }]);

  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      try {
        const [cRes, pRes] = await Promise.all([
          CustomerService.getAll({ limit: 100 }),
          ProductService.getAll({ limit: 100 }),
        ]);
        setCustomers(cRes.customers || []);
        setProducts(pRes.products || []);
      } catch (err) {
        console.error("Failed to load options:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOptions();
  }, []);

  const handleAddItem = () => {
    setItems([...items, { productId: "", quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: keyof ChallanRow, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomerId) {
      setError("Please select a customer.");
      return;
    }

    const validItems = items.filter((i) => i.productId && i.quantity > 0);
    if (validItems.length === 0) {
      setError("Please select at least one valid product line item.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const challan = await ChallanService.createDraft({
        customerId: selectedCustomerId,
        items: validItems,
        notes,
      });
      navigate(`/challans/${challan.id}`);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to create draft challan.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-sm text-slate-500">Loading Form Options...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={() => navigate(-1)} icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Challans
        </Button>
        <h1 className="text-lg font-bold text-slate-900">Create Sales Delivery Challan</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Customer Account *
            </label>
            <select
              value={selectedCustomerId}
              onChange={(e) => setSelectedCustomerId(e.target.value)}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2"
              required
            >
              <option value="">-- Choose Customer --</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.customerName} {c.businessName ? `(${c.businessName})` : ""} — {c.mobile}
                </option>
              ))}
            </select>
          </div>

          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Product Items & Delivery Quantities *
              </label>
              <Button type="button" variant="outline" size="sm" onClick={handleAddItem} icon={<Plus className="w-3.5 h-3.5" />}>
                Add Item Row
              </Button>
            </div>

            {items.map((row, index) => {
              const selectedProduct = products.find((p) => p.id === row.productId);
              return (
                <div key={index} className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex-1 w-full">
                    <select
                      value={row.productId}
                      onChange={(e) => handleItemChange(index, "productId", e.target.value)}
                      className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2"
                      required
                    >
                      <option value="">-- Choose Product --</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.productName} (SKU: {p.sku}) — Available: {p.currentStock} units
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full sm:w-32">
                    <input
                      type="number"
                      min="1"
                      placeholder="Qty"
                      value={row.quantity}
                      onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value, 10) || 1)}
                      className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2"
                      required
                    />
                  </div>

                  <div className="w-full sm:w-32 text-xs font-medium text-slate-600 text-right tabular-nums">
                    {selectedProduct ? `₹${(selectedProduct.unitPrice * row.quantity).toLocaleString()}` : "₹0"}
                  </div>

                  {items.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveItem(index)}
                      icon={<Trash2 className="w-4 h-4 text-rose-500" />}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Challan Notes / Delivery Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Special packing required or Gate entry reference"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" isLoading={submitting} icon={<Save className="w-4 h-4" />}>
              Save Draft Challan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
