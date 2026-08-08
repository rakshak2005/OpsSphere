import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  Users,
  ShieldCheck,
  Zap,
  Package,
  Truck,
  AlertTriangle,
  FileText,
  Activity,
  Settings,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import daylightHeroBg from "../../assets/daylight_hero_bg.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#f7f9fc] flex items-center">
      {/* Background logistics image - shifted further to the right to increase left white space */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-0 h-full w-[50%] bg-cover bg-center brightness-110 saturate-105"
          style={{
            backgroundImage: `url(${daylightHeroBg})`,
          }}
        />

        {/* Soft transparent gradient transition - extended further right to 52% */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fc] via-[#f7f9fc]/95 via-[52%] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f9fc] to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-[1px] w-7 bg-[#3b82f6]" />
              <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-[#3b82f6]">
                OPERATIONS / ERP + CRM PLATFORM
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[44px] sm:text-[52px] xl:text-[60px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0d1420]">
              Your business,
              <br />
              <span className="text-[#3b82f6]">
                without the blind spots.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[480px] text-[15px] sm:text-[16px] leading-7 text-[#64748b]">
              Real-time control over customers, inventory, sales and delivery
              — from one operational system.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Link
                to="/login"
                className="group flex items-center gap-2.5 rounded-xl bg-[#3b82f6] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(59,130,246,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563eb]"
              >
                <span>Open Workspace</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#layers"
                className="group flex items-center gap-2.5 rounded-xl border border-[#dce3ec] bg-white/90 px-6 py-3.5 text-[14px] font-bold text-[#0d1420] shadow-xs backdrop-blur-xs transition-all duration-200 hover:border-[#b9c7d8] hover:bg-white"
              >
                <PlayCircle
                  size={18}
                  className="text-[#3b82f6]"
                />
                <span>See how it works</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#475569]">
              <TrustItem
                icon={<Users size={16} />}
                title="API Connected"
                type="blue"
              />

              <div className="hidden sm:block h-7 w-px bg-[#dce3ec]" />

              <TrustItem
                icon={<ShieldCheck size={16} />}
                title="Role-based Access"
                type="green"
              />

              <div className="hidden sm:block h-7 w-px bg-[#dce3ec]" />

              <TrustItem
                icon={<Zap size={16} />}
                title="Real-time Operations"
                type="blue"
              />
            </div>
          </div>

          {/* RIGHT PRODUCT PREVIEW */}
          <div className="relative flex items-center justify-end">

            {/* Glow behind dashboard */}
            <div className="absolute right-[5%] top-[12%] h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-[90px]" />

            {/* Dashboard Container */}
            <div className="relative w-full max-w-[740px] overflow-hidden rounded-[20px] border border-white/90 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl">

              {/* Dashboard header */}
              <div className="flex h-[54px] items-center justify-between border-b border-[#e5eaf0] px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#10b981]">
                    <Activity size={14} className="text-white" />
                  </div>

                  <span className="text-[13px] font-bold text-[#0d1420]">
                    OpsSphere Workspace
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-[10px] text-[#64748b]">
                      System Operational
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-[#94a3b8]">
                    v1.0.0
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef3f8] text-[11px] font-bold text-[#64748b]">
                    A
                  </div>
                </div>
              </div>

              <div className="flex">

                {/* Sidebar */}
                <aside className="hidden w-[125px] border-r border-[#e5eaf0] p-3 md:block shrink-0">
                  <SidebarItem
                    icon={<BarChart3 size={14} />}
                    label="Dashboard"
                    active
                  />
                  <SidebarItem icon={<Users size={14} />} label="Customers" />
                  <SidebarItem icon={<Package size={14} />} label="Products" />
                  <SidebarItem icon={<Package size={14} />} label="Inventory" />
                  <SidebarItem
                    icon={<ShoppingCart size={14} />}
                    label="Orders"
                  />
                  <SidebarItem icon={<Truck size={14} />} label="Delivery" />
                  <SidebarItem icon={<Activity size={14} />} label="Channels" />
                  <SidebarItem icon={<BarChart3 size={14} />} label="Reports" />
                  <SidebarItem icon={<Settings size={14} />} label="Settings" />
                </aside>

                {/* Dashboard content */}
                <main className="flex-1 p-4 space-y-3.5">

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
                    <StatCard
                      title="Customers"
                      value="1,248"
                      subtitle="+12.6% Active"
                      icon={<Users size={15} />}
                      type="blue"
                    />

                    <StatCard
                      title="Products"
                      value="482"
                      subtitle="+8.4% In Warehouse"
                      icon={<Package size={15} />}
                      type="green"
                    />

                    <StatCard
                      title="Low Stock"
                      value="7 Items"
                      subtitle="Needs Restock"
                      icon={<AlertTriangle size={15} />}
                      type="warning"
                    />

                    <StatCard
                      title="Deliveries"
                      value="94 Drafts"
                      subtitle="Pending Dispatch"
                      icon={<FileText size={15} />}
                      type="purple"
                    />
                  </div>

                  {/* Analytics */}
                  <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_190px]">

                    {/* Chart */}
                    <div className="rounded-[14px] border border-[#e2e8f0] bg-white p-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-[12px] font-bold text-[#0d1420]">
                            Operational Fulfillment Velocity
                          </h3>
                          <p className="mt-0.5 text-[10px] text-[#94a3b8]">
                            Weekly performance
                          </p>
                        </div>

                        <span className="rounded-full bg-[#ecfdf5] px-2.5 py-0.5 font-mono text-[9px] font-bold text-[#10b981]">
                          98.6% Efficiency
                        </span>
                      </div>

                      <div className="mt-4 flex h-[115px] items-end gap-2.5 rounded-[10px] bg-[#f1f6fc] px-4 pb-3 pt-3">
                        {[
                          "45%",
                          "62%",
                          "78%",
                          "55%",
                          "82%",
                          "68%",
                          "90%",
                        ].map((height, index) => (
                          <div
                            key={index}
                            className={`flex-1 rounded-t-[5px] ${
                              index === 2 || index === 5
                                ? "bg-[#3b82f6]"
                                : index === 4
                                ? "bg-[#10b981]"
                                : "bg-[#8db6f5]"
                            }`}
                            style={{ height }}
                          />
                        ))}
                      </div>

                      <div className="mt-1.5 flex justify-between px-1 text-[8px] font-semibold text-[#94a3b8]">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Audit logs */}
                    <div className="rounded-[14px] border border-[#e2e8f0] bg-white p-3.5 space-y-2">
                      <div className="flex items-center gap-1.5">
                        <Activity
                          size={14}
                          className="text-[#3b82f6]"
                        />

                        <h3 className="text-[12px] font-bold text-[#0d1420]">
                          Recent Audit Logs
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <AuditLog
                          title="Challan #CH-1024"
                          status="Confirmed & Shipped"
                          color="green"
                        />

                        <AuditLog
                          title="SKU: POT-736e"
                          status="Stock Check"
                          color="blue"
                        />

                        <AuditLog
                          title="User: Admin"
                          status="Inventory Updated"
                          color="dark"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    <BottomMetric
                      icon={<Package size={13} />}
                      label="Inventory Value"
                      value="₹24.8M"
                    />

                    <BottomMetric
                      icon={<Truck size={13} />}
                      label="On Time Delivery"
                      value="96%"
                    />

                    <BottomMetric
                      icon={<ShoppingCart size={13} />}
                      label="Active Channels"
                      value="8"
                    />

                    <BottomMetric
                      icon={<ShieldCheck size={13} />}
                      label="System Health"
                      value="98.4%"
                    />
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- HELPER COMPONENTS ---------------- */

const TrustItem = ({ icon, title, type }: { icon: React.ReactNode; title: string; type: string }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          type === "green" ? "bg-[#ecfdf5]" : "bg-[#eaf2ff]"
        } ${
          type === "green" ? "text-[#10b981]" : "text-[#3b82f6]"
        }`}
      >
        {icon}
      </div>

      <span className="whitespace-nowrap text-[12px] font-semibold text-[#475569]">
        {title}
      </span>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => {
  return (
    <div
      className={`mb-1 flex items-center gap-2 rounded-[6px] px-2.5 py-2 text-[10px] font-medium ${
        active
          ? "bg-[#edf4ff] text-[#2563eb]"
          : "text-[#64748b] hover:bg-[#f8fafc]"
      }`}
    >
      {icon}
      {label}
    </div>
  );
};

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  type = "blue",
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  type?: "blue" | "green" | "warning" | "purple";
}) => {
  const styles = {
    blue: {
      icon: "bg-[#eaf2ff] text-[#3b82f6]",
      subtitle: "text-[#10b981]",
    },
    green: {
      icon: "bg-[#ecfdf5] text-[#10b981]",
      subtitle: "text-[#10b981]",
    },
    warning: {
      icon: "bg-[#fff7ed] text-[#f59e0b]",
      subtitle: "text-[#f59e0b]",
    },
    purple: {
      icon: "bg-[#f5f3ff] text-[#8b5cf6]",
      subtitle: "text-[#64748b]",
    },
  };

  return (
    <div className="rounded-[12px] border border-[#e2e8f0] bg-white p-3">
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-semibold text-[#64748b]">
          {title}
        </span>

        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${styles[type].icon}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-1 text-[20px] font-extrabold tracking-tight text-[#0d1420]">
        {value}
      </div>

      <div className={`mt-0.5 text-[9px] font-bold ${styles[type].subtitle}`}>
        {subtitle}
      </div>
    </div>
  );
};

const AuditLog = ({ title, status, color }: { title: string; status: string; color: "green" | "blue" | "dark" }) => {
  const textColors = {
    green: "text-[#10b981]",
    blue: "text-[#3b82f6]",
    dark: "text-[#475569]",
  };

  return (
    <div className="rounded-[8px] border border-[#e2e8f0] px-2.5 py-1.5">
      <div className="font-mono text-[9px] font-bold text-[#334155]">
        {title}
      </div>

      <div className={`mt-0.5 text-[9px] font-semibold ${textColors[color]}`}>
        {status}
      </div>
    </div>
  );
};

const BottomMetric = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-[10px] border border-[#e2e8f0] bg-white px-3 py-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef5ff] text-[#3b82f6] shrink-0">
        {icon}
      </div>

      <div>
        <div className="text-[8px] font-semibold text-[#94a3b8]">
          {label}
        </div>

        <div className="mt-0.5 text-[11px] font-extrabold text-[#0d1420]">
          {value}
        </div>
      </div>
    </div>
  );
};
