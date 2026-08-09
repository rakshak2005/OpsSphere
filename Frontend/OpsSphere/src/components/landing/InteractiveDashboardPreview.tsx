import React from "react";
import logoImg from "../../assets/logo.png";

export const InteractiveDashboardPreview: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-[#080B12] border-b border-[#202838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFB]">PRODUCT SHOWCASE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Everything happening in your business, at a glance.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            The full-width OpsSphere application interface built for data density and speed.
          </p>
        </div>

        
        <div className="w-full bg-[#0E131D] rounded-xl border border-[#202838] overflow-hidden shadow-2xl">
          
          <div className="flex items-center justify-between px-6 py-4 bg-[#080B12] border-b border-[#202838]">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Logo" className="w-6 h-6 object-contain" />
              <span className="text-xs font-bold text-white tracking-wide">OpsSphere Management Workspace</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Environment: Production</span>
              <span className="text-[#24D6A3]">● REST v1 Connected</span>
            </div>
          </div>

          
          <div className="p-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-xs text-slate-400 block font-medium">Active Customers</span>
                <p className="text-2xl font-bold text-white mt-2 tabular-nums">1,248</p>
                <span className="text-[10px] text-slate-500 block mt-1">CRM Wholesale Accounts</span>
              </div>

              <div className="p-4 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-xs text-slate-400 block font-medium">Catalog Products</span>
                <p className="text-2xl font-bold text-white mt-2 tabular-nums">482</p>
                <span className="text-[10px] text-slate-500 block mt-1">Active SKUs Mapped</span>
              </div>

              <div className="p-4 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-xs text-[#F5B84B] block font-medium">Low Stock Alerts</span>
                <p className="text-2xl font-bold text-[#F5B84B] mt-2 tabular-nums">7 Items</p>
                <span className="text-[10px] text-[#F5B84B]/80 block mt-1">Below minimum threshold</span>
              </div>

              <div className="p-4 bg-[#080B12] rounded-lg border border-[#202838]">
                <span className="text-xs text-slate-400 block font-medium">Delivery Challans</span>
                <p className="text-2xl font-bold text-white mt-2 tabular-nums">94 Drafts</p>
                <span className="text-[10px] text-slate-500 block mt-1">Pending Confirmation</span>
              </div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#080B12] p-5 rounded-lg border border-[#202838] space-y-4">
                <div className="flex items-center justify-between border-b border-[#202838] pb-3">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Recent Delivery Challans & Stock Status
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">Auto-Deduction Engine</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="text-[10px] uppercase text-slate-500 border-b border-[#202838] bg-[#0E131D]">
                      <tr>
                        <th className="p-2.5">Challan #</th>
                        <th className="p-2.5">Customer Account</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5 text-right">Items Snapshot</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#202838]">
                      <tr>
                        <td className="p-2.5 font-mono text-white">#CH-1024</td>
                        <td className="p-2.5 font-semibold">Apex Logistics Pvt Ltd</td>
                        <td className="p-2.5"><span className="text-[#F5B84B] font-bold">DRAFT</span></td>
                        <td className="p-2.5 text-right font-mono">2 Products (₹29,000)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-white">#CH-1023</td>
                        <td className="p-2.5 font-semibold">Matrix Retail Solutions</td>
                        <td className="p-2.5"><span className="text-[#24D6A3] font-bold">CONFIRMED</span></td>
                        <td className="p-2.5 text-right font-mono">5 Products (₹84,500)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#080B12] p-5 rounded-lg border border-[#202838] space-y-4">
                <div className="flex items-center justify-between border-b border-[#202838] pb-3">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    System Security & RBAC
                  </h3>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#0E131D] rounded border border-[#202838]">
                    <span className="font-bold text-white block">JWT Authentication</span>
                    <span className="text-[11px] text-slate-400">Bearer token interceptors</span>
                  </div>
                  <div className="p-3 bg-[#0E131D] rounded border border-[#202838]">
                    <span className="font-bold text-white block">Role Guards</span>
                    <span className="text-[11px] text-slate-400">ADMIN | SALES | WAREHOUSE | ACCOUNTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
