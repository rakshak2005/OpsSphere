I have created a comprehensive, production-grade Frontend UI Architecture & Specification Document for OpsSphere.

This document outlines every single screen, component design system, role-based permission matrix, user flow step, responsive layout change, and backend API mapping based directly on your existing Express/TypeScript backend and PostgreSQL schema.

NOTE

Per your instructions, no code has been written and no project files were created or modified. This specification is an artifact stored for your architectural review.

Artifact Created
You can view the full 20-section specification in the artifact below:

📄 
OpsSphere Frontend UI Architecture & Specification Document

Executive Summary of Key Document Sections
1. Page Inventory (22 Pages)
Includes standard enterprise pages plus specialized status views:

Auth: Login, Profile / Settings
Core Ops: Dashboard, Customers (List, Detail, Create, Edit), Products (List, Detail, Create, Edit), Inventory (Overview, Movements, Stock Adjust), Sales Challans (List, Detail, Create, Confirm, Cancel)
Admin: User Management (List, Detail, Create User, Edit User)
System: 404 Not Found, 403 Forbidden, 500 Global Error
2. Role-Based Access Matrix
Derived strictly from backend route guards (isAdmin, isSalesOrAdmin, isWarehouseOrAdmin):

Page / Feature	ADMIN	SALES	WAREHOUSE	ACCOUNTS
Dashboard	Full Access	Full Access	Full Access	Full Access
Customer Directory & Details	Full Access	Full Access	Read-Only	Read-Only
Customer Create/Edit	Full Access	Full Access	⛔ 403	⛔ 403
Product List & Details	Full Access	Full Access	Full Access	Read-Only
Product Create/Edit	Full Access	⛔ 403	Full Access	⛔ 403
Inventory Overview & Movements	Full Access	Read-Only	Full Access	Read-Only
Add / Remove Stock	Full Access	⛔ 403	Full Access	⛔ 403
Challans List & Details	Full Access	Full Access	Full Access	Full Access
Create Draft Challan	Full Access	Full Access	⛔ 403	⛔ 403
Confirm / Cancel Challan	Full Access	Full Access	⛔ 403	⛔ 403
User Management (All)	Full Access	⛔ 403	⛔ 403	⛔ 403
3. Design System Summary
Palette: Charcoal/Slate Dark sidebar with crisp neutral background (#F8FAFC), Slate Primary Indigo (#4F46E5), Emerald Success (#059669), Amber Warning (#D97706), Rose Danger (#E11D48).
Typography: Inter / Plus Jakarta Sans with high contrast text hierarchies and tabular numbers (font-variant-numeric: tabular-nums).
Aesthetic: Modern enterprise SaaS (clean borders, high scannability, sticky headers, zero excessive gradients/glassmorphism).
4. Backend API Alignment
The UI specification uses only existing backend endpoints:

Authentication: POST /api/auth/login, GET /api/auth/me
Customers: GET /api/customers, POST /api/customers, GET /api/customers/:id, PUT /api/customers/:id
Products: GET /api/products, POST /api/products, GET /api/products/:id, PUT /api/products/:id
Inventory: GET /api/inventory, GET /api/inventory/movements, POST /api/inventory/add-stock, POST /api/inventory/remove-stock
Challans: GET /api/challans, POST /api/challans, GET /api/challans/:id, POST /api/challans/:id/confirm, POST /api/challans/:id/cancel
User Management: GET /api/users, POST /api/users, GET /api/users/:id, PUT /api/users/:id/role, PUT /api/users/:id/status
5. Backend Changes Required (Items Identified)
To deliver a smooth UX, 4 minor API additions/enhancements are recommended for future consideration:

GET /api/dashboard/stats (Single aggregated payload endpoint for operational metrics).
Pagination query params (page, limit) across list endpoints.
Partial string search query support (?search=) in list endpoints.
Challan status filtering (?status=DRAFT|CONFIRMED|CANCELLED).
Next Steps & Review
Please review the complete specification artifact: 👉 
Open UI Architecture Specification Document

Once you have reviewed the document:

Let me know if any page definitions, field listings, or role access rules require adjustments.
Provide your approval to proceed to the frontend implementation phase when ready!