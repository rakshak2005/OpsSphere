import React, { useEffect, useState } from "react";
import { Plus, Minus, ArrowUpRight, ArrowDownRight, Loader2, Mail } from "lucide-react";
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

  // Stock Request via Email state variables
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestProductId, setRequestProductId] = useState("");
  const [requestQuantity, setRequestQuantity] = useState("10");
  const [requestNotes, setRequestNotes] = useState("");

  const { user } = useAuth();
  const canAdjustStock = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.WAREHOUSE;
  const canRequestStock = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.SALES || user?.role === RoleEnum.WAREHOUSE;

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

  const handleRequestMail = (e: React.FormEvent) => {
    e.preventDefault();
    const prod = products.find((p) => p.id === requestProductId);
    if (!prod) return;

    const subject = encodeURIComponent(`[Stock Replenishment Request] SKU: ${prod.sku}`);
    const body = encodeURIComponent(
      `Hello Procurement Team,\n\n` +
      `We require a stock replenishment for the following product:\n\n` +
      `• Product Name: ${prod.productName}\n` +
      `• SKU: ${prod.sku}\n` +
      `• Current Stock: ${prod.currentStock} units\n` +
      `• Requested Quantity: ${requestQuantity} units\n` +
      `• Warehouse Location: ${prod.warehouseLocation || "Not Specified"}\n\n` +
      `Additional Notes: ${requestNotes || "None"}\n\n` +
      `Requested By: ${user?.name || "System User"} (${user?.role || "Staff"})\n` +
      `OpsSphere ERP Platform`
    );

    // Open native client mail draft
    window.location.href = `mailto:procurement@opssphere.com?subject=${subject}&body=${body}`;

    setRequestModalOpen(false);
    setRequestProductId("");
    setRequestQuantity("10");
    setRequestNotes("");
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
        <div className="flex items-center gap-2">
          {canRequestStock && (
            <Button
              variant="outline"
              onClick={() => setRequestModalOpen(true)}
              icon={<Mail className="w-4 h-4 text-[#3B82F6]" />}
            >
              Request Stock
            </Button>
          )}
          {canAdjustStock && (
            <>
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
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : movements.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            No stock movements logged. Use "Add Stock (IN)" or dispatch a challan to log entries.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Product SKU</th>
                  <th className="px-6 py-4">Movement Type</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Reason</th>
                  <th className="px-6 py-4">Logged By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {movements.map((m) => {
                  const isIN = m.type === "IN";
                  return (
                    <tr key={m.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-slate-500 font-medium">
                        {new Date(m.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-slate-900 block">{m.product?.productName}</span>
                        <span className="text-[10px] text-slate-400 font-mono">SKU: {m.product?.sku}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={isIN ? "success" : "danger"}>
                          <span className="flex items-center gap-1">
                            {isIN ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                            {m.type}
                          </span>
                        </Badge>
                      </td>
                      <td className={`px-6 py-4 font-extrabold tabular-nums ${isIN ? "text-emerald-600" : "text-rose-600"}`}>
                        {isIN ? `+${m.quantity}` : `-${m.quantity}`}
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{m.reason}</td>
                      <td className="px-6 py-4 text-slate-900 font-semibold">{m.createdBy?.name || "System"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal: IN/OUT Stock Adjustments */}
      <Modal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        title={modalType === "IN" ? "Restock Catalog Item (IN)" : "Deduct Catalog Item (OUT)"}
      >
        <form onSubmit={handleStockSubmit} className="space-y-4 pt-2">
          {formError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
              {formError}
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Select Product SKU
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

      {/* Modal: Request Stock via Email */}
      <Modal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        title="Draft Stock Replenishment Request"
      >
        <form onSubmit={handleRequestMail} className="space-y-4 pt-2">
          <p className="text-xs text-slate-500">
            Select a product and enter the replenishment volume. When you click send, it will launch your mail client pre-filled.
          </p>

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Target Product SKU
            </label>
            <select
              value={requestProductId}
              onChange={(e) => setRequestProductId(e.target.value)}
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
            label="Requested Volume"
            type="number"
            min="1"
            required
            value={requestQuantity}
            onChange={(e) => setRequestQuantity(e.target.value)}
          />

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Additional Notes
            </label>
            <textarea
              placeholder="e.g. Urgent shipment required for customer project delivery"
              value={requestNotes}
              onChange={(e) => setRequestNotes(e.target.value)}
              rows={3}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={() => setRequestModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Request Mail
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
