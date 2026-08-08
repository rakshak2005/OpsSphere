# OpsSphere - Backend API Portal Documentation

Welcome to the **OpsSphere Backend operations engine**. This server is built using Node.js, Express, TypeScript, Prisma, and PostgreSQL.

---

## 🚀 Quick Start Guide

### 1. Configure Environment Variables
Verify your [Backend/.env](file:///c:/PROJECTS/OpsSphere/Backend/.env) file is populated with the following keys:
```env
PORT=5000
JWT_SECRET="ops_sphere_secret_key_validation_token_2026_dev"
JWT_EXPIRES_IN="1d"
NODE_ENV="development"
DATABASE_URL="postgresql://postgres:98769876Rr@localhost:5432/myapp?schema=public"
```

### 2. Install Packages & Initialize Database
From your terminal, navigate to the `Backend` folder and run:
```bash
# Install dependencies
npm install

# Push relational schema to PostgreSQL
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Populate database with mock seed data
npx ts-node-dev prisma/seed.ts
```

### 3. Start Development Server
Run the hot-reloading boot script:
```bash
npm run dev
```
The server will bind to port `5000` and listen for requests at `http://localhost:5000/api/v1`.

---

## 👥 Seed Test Credentials

Use these seeded logins to test authorization restrictions. All accounts use passwords hashed via Bcrypt.

| Role | Test Email | Password | Allowed Scopes / Modules |
|---|---|---|---|
| **ADMIN** | `admin@opssphere.com` | `admin123` | Full Access (Users, Customers, Products, Inventory, Challans) |
| **SALES** | `sales@opssphere.com` | `sales123` | CRM Customers, Issuing/Confirming Challans (Read-only catalog) |
| **WAREHOUSE** | `warehouse@opssphere.com` | `warehouse123` | ERP Products catalog, Stock Control audits (Read-only challans) |
| **ACCOUNTS** | `accounts@opssphere.com` | `accounts123` | Portal-wide Read-only Access (Audits & Challan checks) |

---

## 🌐 API Route Endpoint Directory

All route paths must be prefixed with `http://localhost:5000/api/v1`.

### 1. Authentication Module

#### Login Request
* **Endpoint**: `POST /auth/login`
* **Access**: Public (Unprotected)
* **Headers**: `Content-Type: application/json`
* **Body Request**:
  ```json
  {
    "email": "admin@opssphere.com",
    "password": "admin123"
  }
  ```
* **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "token": "eyJhbGciOi...",
      "user": {
        "id": "uuid-string",
        "name": "System Admin",
        "email": "admin@opssphere.com",
        "role": "ADMIN",
        "isActive": true
      }
    }
  }
  ```

#### Logout Strategy
JSON Web Tokens (JWT) are stateless. To log out, the client (frontend) simply clears the token from its local memory (state or cookies).

---

### 2. CRM Customers Module
*All routes below require `Authorization: Bearer <JWT_TOKEN>`*

| HTTP Method | Route Path | Roles Permitted | Purpose |
|---|---|---|---|
| **GET** | `/customers` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Fetch all customers (supports pagination/search query) |
| **GET** | `/customers/:id` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View detailed customer profile |
| **POST** | `/customers` | ADMIN, SALES | Register a new customer |
| **PUT** | `/customers/:id` | ADMIN, SALES | Edit customer properties |
| **PATCH** | `/customers/:id/notes` | ADMIN, SALES | Add a follow-up note (appends note to history log) |
| **DELETE** | `/customers/:id` | ADMIN, SALES | Soft-delete a customer (sets status to INACTIVE) |

#### Search & Filter Parameters:
* Query parameters: `?page=1&limit=10&search=Rahul&status=ACTIVE`

#### Add Customer Payload Example (`POST /customers`):
```json
{
  "customerName": "Rahul Traders",
  "mobile": "9876543210",
  "email": "rahul@gmail.com",
  "businessName": "Rahul Enterprises Ltd",
  "gstNumber": "29ABCDE1234F1Z5",
  "customerType": "DISTRIBUTOR",
  "address": "Outer Ring Road, Bangalore, KA",
  "status": "ACTIVE",
  "notes": "Premium client"
}
```

---

### 3. ERP Products Module
*All routes below require `Authorization: Bearer <JWT_TOKEN>`*

| HTTP Method | Route Path | Roles Permitted | Purpose |
|---|---|---|---|
| **GET** | `/products` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Fetch all products (supports search/low-stock filter) |
| **GET** | `/products/:id` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View product details |
| **POST** | `/products` | ADMIN, WAREHOUSE | Add a new product to the catalog |
| **PUT** | `/products/:id` | ADMIN, WAREHOUSE | Edit product specifications |
| **DELETE** | `/products/:id` | ADMIN, WAREHOUSE | Remove product (prevents delete if linked to challans) |

#### Query Parameters:
* Query parameters: `?page=1&limit=10&search=Laptop&lowStock=true`

---

### 4. ERP Stock Control Module
*All routes below require `Authorization: Bearer <JWT_TOKEN>`*

| HTTP Method | Route Path | Roles Permitted | Purpose |
|---|---|---|---|
| **GET** | `/inventory/movements` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Fetch paginated historical audit logs |
| **POST** | `/inventory/add-stock` | ADMIN, WAREHOUSE | Add quantity to stock levels (IN movement) |
| **POST** | `/inventory/remove-stock` | ADMIN, WAREHOUSE | Remove quantity from stock levels (OUT movement) |

#### Add Stock Payload (`POST /inventory/add-stock`):
```json
{
  "productId": "uuid-product-id",
  "quantity": 10,
  "reason": "Restock from shipment"
}
```

---

### 5. Sales Delivery Challans Module
*All routes require `Authorization: Bearer <JWT_TOKEN>`*

| HTTP Method | Route Path | Roles Permitted | Purpose |
|---|---|---|---|
| **GET** | `/challans` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List all challans (supports pagination/status filter) |
| **GET** | `/challans/:id` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View challan details (includes product snapshots) |
| **POST** | `/challans` | ADMIN, SALES | Create a new DRAFT challan |
| **PATCH** | `/challans/:id/confirm` | ADMIN, SALES | Confirm challan (reduces stock, checks bounds, logs OUT audit) |
| **PATCH** | `/challans/:id/cancel` | ADMIN, SALES | Cancel challan (reverses stock if confirmed, logs IN audit) |

#### Create Draft Challan Body (`POST /challans`):
```json
{
  "customerId": "uuid-customer-id",
  "items": [
    {
      "productId": "uuid-product-id-1",
      "quantity": 2
    },
    {
      "productId": "uuid-product-id-2",
      "quantity": 5
    }
  ]
}
```
