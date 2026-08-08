import React, { useEffect, useState } from "react";
import { UserCheck, UserX, Shield, Mail, Loader2, UserPlus, Key, Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Modal } from "../../components/ui/Modal";
import { Input } from "../../components/ui/Input";
import { AuthService } from "../../services/auth.service";
import { apiClient } from "../../services/api";
import type { User } from "../../types/auth.types";

interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  details: string | null;
  createdAt: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Password reset modal states
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  // User activity log state
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [loadingActivities, setLoadingActivities] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "SALES",
    secretCode: "",
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<{ success: boolean; data: User[] }>("/users");
      setUsers(response.data.data || []);
    } catch (err) {
      console.error("Failed to fetch user directory:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivities = async () => {
    setLoadingActivities(true);
    try {
      const response = await apiClient.get<{ success: boolean; data: ActivityLog[] }>("/users/activities");
      setActivities(response.data.data || []);
    } catch (err) {
      console.error("Failed to fetch activity logs:", err);
    } finally {
      setLoadingActivities(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchActivities();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!formData.secretCode.trim()) {
      setError("Secret User Code is required");
      setSubmitting(false);
      return;
    }

    try {
      await AuthService.registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        secretCode: formData.secretCode.trim(),
      });
      setRegisterModalOpen(false);
      setFormData({ name: "", email: "", password: "", role: "SALES", secretCode: "" });
      fetchUsers();
      fetchActivities();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to register portal user.");
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !newPassword.trim() || newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    setSubmitting(true);
    try {
      await apiClient.patch(`/users/${selectedUser.id}/password`, {
        newPassword: newPassword.trim(),
      });
      setPasswordModalOpen(false);
      setSelectedUser(null);
      setNewPassword("");
      alert("Password updated successfully!");
      fetchActivities();
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to reset password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Admin User Management</h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Register portal staff accounts, manage RBAC roles, control active user access, and reset passwords.
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setRegisterModalOpen(true)}
          icon={<UserPlus className="w-4 h-4" />}
        >
          Register New User
        </Button>
      </div>

      {/* Main Grid: Left User Directory, Right Activity Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* User Directory */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Portal User Directory</h3>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
            </div>
          ) : users.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-500 font-medium">No portal users registered.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-3">User Identity</th>
                    <th className="px-5 py-3">Role</th>
                    <th className="px-5 py-3">Code</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/60 transition">
                      <td className="px-5 py-3">
                        <p className="font-semibold text-slate-900">{u.name}</p>
                        <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <Mail className="w-3 h-3 text-slate-400" />
                          {u.email}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <Badge variant="info" className="gap-1 text-[9px]">
                          <Shield className="w-3 h-3" />
                          {u.role}
                        </Badge>
                      </td>
                      <td className="px-5 py-3 font-mono text-xs font-bold text-slate-700">
                        {u.secretCode || "—"}
                      </td>
                      <td className="px-5 py-3">
                        <Badge variant={u.isActive ? "success" : "danger"} className="gap-1 text-[9px]">
                          {u.isActive ? <UserCheck className="w-3 h-3" /> : <UserX className="w-3 h-3" />}
                          {u.isActive ? "ACTIVE" : "INACTIVE"}
                        </Badge>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<Key className="w-3 h-3" />}
                          onClick={() => {
                            setSelectedUser(u);
                            setPasswordModalOpen(true);
                          }}
                        >
                          Reset Pass
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* User Activities Log Tracker */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">User Action Trails</h3>
            <Button variant="outline" size="sm" onClick={fetchActivities}>Reload</Button>
          </div>

          {loadingActivities ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
            </div>
          ) : activities.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-8">No recent activities recorded.</p>
          ) : (
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {activities.map((act) => (
                <div key={act.id} className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-xs space-y-0.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold">
                    <span className="uppercase text-indigo-600">{act.action}</span>
                    <span>{new Date(act.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="font-semibold text-slate-800">{act.details || "Action performed"}</p>
                  <span className="text-[10px] text-slate-400 block font-medium">By: {act.user?.name || "System"}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* User Registration Modal */}
      <Modal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        title="Register Portal User Account"
      >
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email Address"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Input
            label="Secret User Code (e.g. 111)"
            required
            value={formData.secretCode}
            onChange={(e) => setFormData({ ...formData, secretCode: e.target.value })}
          />
          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Assigned Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-white text-slate-900 text-sm rounded-lg border border-slate-300 px-3 py-2 focus:outline-hidden"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="SALES">SALES</option>
              <option value="WAREHOUSE">WAREHOUSE</option>
              <option value="ACCOUNTS">ACCOUNTS</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={() => setRegisterModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" isLoading={submitting}>
              Register User
            </Button>
          </div>
        </form>
      </Modal>

      {/* Password Reset Modal */}
      <Modal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        title={`Reset Password for ${selectedUser?.name}`}
      >
        <form onSubmit={handlePasswordResetSubmit} className="space-y-4">
          <div className="space-y-1.5 relative">
            <Input
              label="New Password"
              type={showNewPassword ? "text" : "password"}
              required
              placeholder="Min 8 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3.5 bottom-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={() => setPasswordModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" isLoading={submitting}>
              Update Password
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
