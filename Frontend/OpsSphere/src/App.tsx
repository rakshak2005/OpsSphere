import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedLayout, RequireRole } from "./components/layout/ProtectedLayout";
import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { CustomerListPage } from "./pages/customers/CustomerListPage";
import { CustomerCreatePage } from "./pages/customers/CustomerCreatePage";
import { CustomerDetailPage } from "./pages/customers/CustomerDetailPage";
import { ProductListPage } from "./pages/products/ProductListPage";
import { ProductCreatePage } from "./pages/products/ProductCreatePage";
import { InventoryPage } from "./pages/inventory/InventoryPage";
import { ChallanListPage } from "./pages/challans/ChallanListPage";
import { ChallanCreatePage } from "./pages/challans/ChallanCreatePage";
import { ChallanDetailPage } from "./pages/challans/ChallanDetailPage";
import { UserManagementPage } from "./pages/users/UserManagementPage";
import { Forbidden403 } from "./pages/system/Forbidden403";
import { NotFound404 } from "./pages/system/NotFound404";
import { RoleEnum } from "./types/auth.types";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Landing Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Public Authentication Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Application Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />

            <Route path="customers" element={<CustomerListPage />} />
            <Route path="customers/create" element={<CustomerCreatePage />} />
            <Route path="customers/:id" element={<CustomerDetailPage />} />

            <Route path="products" element={<ProductListPage />} />
            <Route path="products/create" element={<ProductCreatePage />} />

            <Route path="inventory" element={<InventoryPage />} />

            <Route path="challans" element={<ChallanListPage />} />
            <Route path="challans/create" element={<ChallanCreatePage />} />
            <Route path="challans/:id" element={<ChallanDetailPage />} />

            <Route element={<RequireRole allowedRoles={[RoleEnum.ADMIN]} />}>
              <Route path="users" element={<UserManagementPage />} />
            </Route>

            <Route path="403" element={<Forbidden403 />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
