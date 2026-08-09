import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Trash2, Loader2, Package, MapPin, Download } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Badge } from "../../components/ui/Badge";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { ProductService } from "../../services/product.service";
import { useAuth } from "../../context/AuthContext";
import { RoleEnum } from "../../types/auth.types";
import type { Product } from "../../types/product.types";

export const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("name-asc");

  const { user } = useAuth();
  const canEdit = user?.role === RoleEnum.ADMIN || user?.role === RoleEnum.WAREHOUSE;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await ProductService.getAll({
        search: search || undefined,
        category: categoryFilter || undefined,
      });
      setProducts(data.products || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.productName.localeCompare(b.productName);
      case "name-desc":
        return b.productName.localeCompare(a.productName);
      case "price-asc":
        return a.unitPrice - b.unitPrice;
      case "price-desc":
        return b.unitPrice - a.unitPrice;
      case "stock-asc":
        return a.currentStock - b.currentStock;
      case "stock-desc":
        return b.currentStock - a.currentStock;
      case "sku-asc":
        return a.sku.localeCompare(b.sku);
      default:
        return 0;
    }
  });

  useEffect(() => {
    fetchProducts();
  }, [search, categoryFilter]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await ProductService.delete(deleteId);
      setProducts((prev) => prev.filter((p) => p.id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const exportToCSV = () => {
    const headers = ["Product Name", "SKU", "Category", "Unit Price (INR)", "Current Stock", "Minimum Stock", "Warehouse Location"];
    const rows = products.map((p) => [
      p.productName,
      p.sku,
      p.category || "",
      Number(p.unitPrice).toString(),
      p.currentStock.toString(),
      p.minimumStock.toString(),
      p.warehouseLocation || "",
    ]);
    const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `products_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Product Catalog</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage inventory SKUs, unit prices, minimum thresholds, and warehouse bin locations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            icon={<Download className="w-4 h-4 text-slate-500" />}
            onClick={exportToCSV}
            disabled={products.length === 0}
          >
            Export CSV
          </Button>
          {canEdit && (
            <Link to="/products/create">
              <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
                Add Product
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="w-full sm:flex-1">
          <Input
            placeholder="Search products by name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-4 h-4" />}
          />
        </div>
        <div className="w-full sm:w-48 flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <Input
            placeholder="Filter Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          />
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
            <option value="price-asc">Price (Low-High)</option>
            <option value="price-desc">Price (High-Low)</option>
            <option value="stock-asc">Stock (Low-High)</option>
            <option value="stock-desc">Stock (High-Low)</option>
            <option value="sku-asc">SKU (A-Z)</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-500 font-medium">No products found in catalog.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5">Product / SKU</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Unit Price</th>
                  <th className="px-6 py-3.5">Stock Level</th>
                  <th className="px-6 py-3.5">Location</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedProducts.map((p) => {
                  const isLowStock = p.currentStock <= p.minimumStock;
                  return (
                    <tr key={p.id} className="hover:bg-slate-50/60 transition">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900 flex items-center gap-2">
                          <Package className="w-4 h-4 text-slate-400 shrink-0" />
                          {p.productName}
                        </p>
                        <span className="text-xs text-slate-400 font-mono">SKU: {p.sku}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="info">{p.category}</Badge>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-900 tabular-nums">
                        ₹{Number(p.unitPrice).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={isLowStock ? "warning" : "success"}>
                          {p.currentStock} units {isLowStock && "(LOW)"}
                        </Badge>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Min: {p.minimumStock}</span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {p.warehouseLocation ? (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {p.warehouseLocation}
                          </span>
                        ) : (
                          "Unassigned"
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {canEdit && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(p.id)}
                            icon={<Trash2 className="w-4 h-4 text-rose-500" />}
                          />
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

      <ConfirmDialog
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Product Item"
        message="Are you sure you want to soft-delete this product from the inventory catalog?"
      />
    </div>
  );
};
