import React, { useEffect, useState } from "react";
import { Plus, Minus, ArrowUpRight, ArrowDownRight, Loader2 } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Modal } from "../../components/ui/Modal";
import { Input } from "../../components/ui/Input";
import { InventoryService } from "../../services/inventory.service";
import { ProductService } from "../../services/product.service";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import type { InventoryMovement } from "../../types/inventory.types";
import type { Product } from "../../types/product.types";

export const InventoryPage: React.FC = () => {
  const [movements, setMovements] = useState<InventoryMovement[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalType, setModalType] = useState<"IN" | "OUT" | null>(null);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const { user } = useAuth();
  const canAdjustStock = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.WAREHOUSE;

  const fetchData = async () => {
    setLoading(true);
    try {
      const [movRes, prodRes] = await Promise.all([
        InventoryService.getMovements(),
        ProductService.getAll({ limit: 100 }),
      ]);
      setMovements(movRes.movements || []);
      setProducts(prodRes.products || []);
    } catch (err) {
      console.error("Failed to load inventory data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductId || !quantity || parseInt(quantity, 10) <= 0) {
      setFormError("Please select a product and valid positive quantity.");
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const qtyNum = parseInt(quantity, 10);
      if (modalType === "IN") {
        await InventoryService.addStock({
          productId: selectedProductId,
          quantity: qtyNum,
          reason,
        });
      } else {
        await InventoryService.removeStock({
          productId: selectedProductId,
          quantity: qtyNum,
          reason,
        });
      }

      setModalType(null);
      setSelectedProductId("");
      setQuantity("1");
      setReason("");
      fetchData();
    } catch (err: any) {
      setFormError(err?.response?.data?.message || "Stock transaction failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Inventory Movements</h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time stock IN/OUT ledger, audit trails, and warehouse quantity adjustments.
          </p>
        </div>
        {canAdjustStock && (
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              onClick={() => setModalType("IN")}
              icon={<Plus className="w-4 h-4" />}
            >
              Add Stock (IN)
            </Button>
            <Button
              variant="danger"
              onClick={() => setModalType("OUT")}
              icon={<Minus className="w-4 h-4" />}
            >
              Remove Stock (OUT)
            </Button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : movements.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-500 font-medium">No stock movement logs recorded.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5">Timestamp</th>
                  <th className="px-6 py-3.5">Product SKU</th>
                  <th className="px-6 py-3.5">Movement Type</th>
                  <th className="px-6 py-3.5">Quantity</th>
                  <th className="px-6 py-3.5">Reason</th>
                  <th className="px-6 py-3.5">Logged By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {movements.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/60 transition">
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">
                      {new Date(m.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{m.product?.productName || "Product"}</p>
                      <span className="text-xs text-slate-400 font-mono">SKU: {m.product?.sku}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={m.type === "IN" ? "success" : "danger"} className="gap-1">
                        {m.type === "IN" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {m.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 font-bold tabular-nums">
                      <span className={m.type === "IN" ? "text-emerald-600" : "text-rose-600"}>
                        {m.type === "IN" ? `+${m.quantity}` : `-${m.quantity}`}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600">
                      {m.reason || "Manual Stock Adjustment"}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-700">
                      {m.createdBy?.name || "System"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        title={modalType === "IN" ? "Add Stock (IN Movement)" : "Remove Stock (OUT Movement)"}
      >
        {formError && (
          <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
            {formError}
          </div>
        )}

        <form onSubmit={handleStockSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Product
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2"
              required
            >
              <option value="">-- Choose Product --</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.productName} (SKU: {p.sku}) — Current: {p.currentStock} units
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Quantity Adjustment"
            type="number"
            min="1"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Reason / Reference PO #
            </label>
            <input
              type="text"
              placeholder="e.g. Supplier Shipment PO-9821 or Stock Correction"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={() => setModalType(null)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant={modalType === "IN" ? "primary" : "danger"}
              isLoading={submitting}
            >
              Confirm {modalType === "IN" ? "Stock Addition" : "Stock Removal"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
