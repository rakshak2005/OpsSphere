# OpsSphere — API Reference

> **Version:** v1
> **Base URL (Development):** `http://localhost:5000/api/v1`
> **Base URL (Production):** `https://api.opssphere.com/api/v1`
> **Auth:** JWT Bearer Token
> **Content-Type:** `application/json`

---

## Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Role-Based Access Control](#role-based-access-control)
- [Standard Response Format](#standard-response-format)
- [HTTP Status Codes](#http-status-codes)
- [Modules](#modules)
  - [1. Auth](#1--auth-module)
  - [2. Customers](#2--customers-module)
  - [3. Products](#3--products-module)
  - [4. Inventory](#4--inventory-module)
  - [5. Delivery Challans](#5--delivery-challans-module)
  - [6. Users](#6--users-module)
- [Data Schemas](#data-schemas)
- [Validation Rules](#validation-rules)
- [Quick Reference](#quick-reference)

---

## Overview

OpsSphere is a production-grade ERP + CRM backend that manages:

- **Auth** — JWT-based authentication with role-based secret codes
- **Customers** — Full CRM lifecycle with notes, follow-ups, and soft-delete
- **Products** — ERP product catalog with stock tracking
- **Inventory** — IN/OUT stock movements with full audit trail
- **Delivery Challans** — Transaction-safe dispatch records that auto-deduct stock on confirmation
- **Users** — Admin-managed user accounts and role assignment

All protected endpoints require a valid JWT in the `Authorization` header.

---

## Authentication

### How it works

1. Client sends `POST /auth/login` with email, password, and role-specific secret code.
2. Server validates credentials and returns a signed JWT.
3. Client stores the JWT and attaches it to every subsequent request.
4. JWT expires after `1d` by default (configurable via `JWT_EXPIRES_IN`).
5. On logout, the client discards the token (server is stateless).

### Sending the token

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Role-Based Access Control

OpsSphere enforces RBAC at the middleware layer. Every user has one of four roles:

| Role        | Description                                         |
|-------------|-----------------------------------------------------|
| `ADMIN`     | Full access to all modules and operations           |
| `SALES`     | CRM customers, issuing and confirming challans      |
| `WAREHOUSE` | ERP product catalog, inventory control              |
| `ACCOUNTS`  | Read-only access across all modules                 |

### Permission Matrix

| Operation                | ADMIN | SALES | WAREHOUSE | ACCOUNTS |
|--------------------------|:-----:|:-----:|:---------:|:--------:|
| Login                    | yes   | yes   | yes       | yes      |
| View Customers           | yes   | yes   | yes       | yes      |
| Create / Edit Customers  | yes   | yes   | —         | —        |
| Delete Customers         | yes   | yes   | —         | —        |
| View Products            | yes   | yes   | yes       | yes      |
| Create / Edit Products   | yes   | —     | yes       | —        |
| Delete Products          | yes   | —     | yes       | —        |
| View Inventory Movements | yes   | yes   | yes       | yes      |
| Add / Remove Stock       | yes   | —     | yes       | —        |
| View Challans            | yes   | yes   | yes       | yes      |
| Create Challans          | yes   | yes   | —         | —        |
| Confirm Challans         | yes   | yes   | —         | —        |
| Cancel Challans          | yes   | yes   | —         | —        |
| Manage Users             | yes   | —     | —         | —        |

---

## Standard Response Format

### Success

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

### Paginated List

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### Error

```json
{
  "success": false,
  "message": "Insufficient stock for product [Dell Monitor]. Current stock: 3, required: 5",
  "error": "STOCK_UNAVAILABLE"
}
```

---

## HTTP Status Codes

| Code  | Meaning                               |
|-------|---------------------------------------|
| `200` | OK — Request successful               |
| `201` | Created — Resource created            |
| `400` | Bad Request — Invalid input           |
| `401` | Unauthorized — Token missing/invalid  |
| `403` | Forbidden — Role not permitted        |
| `404` | Not Found — Resource not found        |
| `409` | Conflict — Duplicate or constraint    |
| `422` | Unprocessable — Validation failed     |
| `500` | Internal Server Error                 |

---

## Modules

---

## 1 · Auth Module

### `POST /auth/login`

**Access:** Public (no token required)

Authenticates a user using email, password, and role-specific secret code. Returns a signed JWT.

#### Request

```http
POST /api/v1/auth/login
Content-Type: application/json
```

```json
{
  "email": "admin@opssphere.com",
  "password": "admin123",
  "secretCode": "000"
}
```

#### Fields

| Field        | Type   | Required | Description                         |
|--------------|--------|----------|-------------------------------------|
| `email`      | string | yes      | Registered user email               |
| `password`   | string | yes      | Account password                    |
| `secretCode` | string | yes      | Role-specific 3-digit security code |

#### Response `200 OK`

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "clx7z2k0d0001abcd1234efgh",
      "name": "System Admin",
      "email": "admin@opssphere.com",
      "role": "ADMIN",
      "isActive": true
    }
  }
}
```

#### Error Responses

| Status | Scenario                               |
|--------|----------------------------------------|
| `400`  | Missing required fields                |
| `401`  | Invalid email, password, or secretCode |
| `403`  | Account deactivated                    |

---

### Test Credentials

| Role        | Name               | Email                     | Password       | Secret Code |
|-------------|--------------------|---------------------------|----------------|-------------|
| `ADMIN`     | System Admin       | `admin@opssphere.com`     | `admin123`     | `000`       |
| `ADMIN`     | Manoj              | `manoj@opssphere.com`     | `admin123`     | `111`       |
| `ADMIN`     | Vinay              | `vinay@opssphere.com`     | `admin123`     | `222`       |
| `SALES`     | Sales Executive    | `sales@opssphere.com`     | `sales123`     | `999`       |
| `SALES`     | Leo                | `leo@opssphere.com`       | `sales123`     | `333`       |
| `SALES`     | Hari               | `hari@opssphere.com`      | `sales123`     | `444`       |
| `WAREHOUSE` | Warehouse Manager  | `warehouse@opssphere.com` | `warehouse123` | `888`       |
| `WAREHOUSE` | Anusha             | `anusha@opssphere.com`    | `warehouse123` | `555`       |
| `WAREHOUSE` | Rakshak            | `rakshak@opssphere.com`   | `warehouse123` | `666`       |
| `ACCOUNTS`  | Finance Controller | `accounts@opssphere.com`  | `accounts123`  | `777`       |

---

## 2 · Customers Module

**Module:** CRM
**Auth:** Required

### Endpoints

| Method   | Endpoint                   | Roles                             | Description             |
|----------|----------------------------|-----------------------------------|-------------------------|
| `GET`    | `/customers`               | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List all customers      |
| `GET`    | `/customers/:id`           | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Get customer by ID      |
| `POST`   | `/customers`               | ADMIN, SALES                      | Create customer         |
| `PUT`    | `/customers/:id`           | ADMIN, SALES                      | Update customer         |
| `PATCH`  | `/customers/:id/notes`     | ADMIN, SALES                      | Append a follow-up note |
| `DELETE` | `/customers/:id`           | ADMIN, SALES                      | Soft-delete customer    |

---

### `GET /customers`

List customers with optional search, status filter, and pagination.

```http
GET /api/v1/customers?page=1&limit=10&search=Rahul&status=ACTIVE
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

| Parameter | Type   | Default | Description                                     |
|-----------|--------|---------|-------------------------------------------------|
| `page`    | number | `1`     | Page number                                     |
| `limit`   | number | `10`    | Results per page                                |
| `search`  | string | —       | Search by name, mobile, email, or business name |
| `status`  | string | —       | Filter: `ACTIVE`, `INACTIVE`, `LEAD`            |

#### Response `200 OK`

```json
{
  "success": true,
  "customers": [
    {
      "id": "clx7z2k0d...",
      "customerName": "Rahul Traders",
      "mobile": "9876543210",
      "email": "rahul@gmail.com",
      "businessName": "Rahul Enterprises Ltd",
      "gstNumber": "29ABCDE1234F1Z5",
      "customerType": "DISTRIBUTOR",
      "address": "Outer Ring Road, Bangalore, KA",
      "status": "ACTIVE",
      "notes": "High priority distributor partner.",
      "followUpDate": "2026-08-07T00:00:00.000Z",
      "createdAt": "2026-08-05T10:00:00.000Z",
      "updatedAt": "2026-08-05T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 10,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

---

### `GET /customers/:id`

```http
GET /api/v1/customers/clx7z2k0d0001abcd1234efgh
Authorization: Bearer <JWT_TOKEN>
```

---

### `POST /customers`

**Roles:** ADMIN, SALES

```http
POST /api/v1/customers
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

#### Request Body

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
  "notes": "High priority distributor partner.",
  "followUpDate": "2026-08-15"
}
```

#### Fields

| Field          | Type   | Required | Description                                  |
|----------------|--------|----------|----------------------------------------------|
| `customerName` | string | yes      | Full name of the customer                    |
| `mobile`       | string | yes      | 10-digit mobile number                       |
| `email`        | string | —        | Email address (must be valid if provided)    |
| `businessName` | string | —        | Business/company name                        |
| `gstNumber`    | string | —        | GST registration number                      |
| `customerType` | enum   | —        | `RETAIL`, `WHOLESALE`, `DISTRIBUTOR`         |
| `address`      | string | —        | Full address                                 |
| `status`       | enum   | —        | `ACTIVE`, `INACTIVE`, `LEAD` (default: LEAD) |
| `notes`        | string | —        | Internal notes or remarks                    |
| `followUpDate` | date   | —        | Next follow-up date (ISO 8601 format)        |

---

### `PUT /customers/:id`

**Roles:** ADMIN, SALES
Accepts any subset of the fields from `POST /customers`.

---

### `PATCH /customers/:id/notes`

**Roles:** ADMIN, SALES
Appends a new follow-up note to the customer's note history.

```json
{
  "notes": "Called today. Interested in bulk Dell Monitor order."
}
```

---

### `DELETE /customers/:id`

**Roles:** ADMIN, SALES
Performs a **soft delete** — sets `status` to `INACTIVE`. The record is retained for historical data and audit purposes.

---

## 3 · Products Module

**Module:** ERP Product Catalog
**Auth:** Required

### Endpoints

| Method   | Endpoint        | Roles                             | Description       |
|----------|-----------------|-----------------------------------|-------------------|
| `GET`    | `/products`     | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List products     |
| `GET`    | `/products/:id` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Get product by ID |
| `POST`   | `/products`     | ADMIN, WAREHOUSE                  | Create product    |
| `PUT`    | `/products/:id` | ADMIN, WAREHOUSE                  | Update product    |
| `DELETE` | `/products/:id` | ADMIN, WAREHOUSE                  | Delete product    |

---

### `GET /products`

```http
GET /api/v1/products?page=1&limit=10&search=Dell&lowStock=true
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

| Parameter  | Type    | Default | Description                                    |
|------------|---------|---------|------------------------------------------------|
| `page`     | number  | `1`     | Page number                                    |
| `limit`    | number  | `10`    | Results per page                               |
| `search`   | string  | —       | Search by name, SKU, or category               |
| `lowStock` | boolean | —       | `true` to show only items at or below minimum  |

---

### `GET /products/:id`

Returns full product details including current stock level.

---

### `POST /products`

**Roles:** ADMIN, WAREHOUSE

```json
{
  "productName": "Dell UltraSharp 24 Monitor",
  "sku": "DELL-US24-01",
  "category": "Electronics",
  "unitPrice": 15499,
  "currentStock": 45,
  "minimumStock": 8,
  "warehouseLocation": "Rack A-12"
}
```

#### Fields

| Field               | Type   | Required | Description                               |
|---------------------|--------|----------|-------------------------------------------|
| `productName`       | string | yes      | Full product name                         |
| `sku`               | string | yes      | Unique Stock Keeping Unit code            |
| `category`          | string | —        | Product category (e.g. Electronics)      |
| `unitPrice`         | number | yes      | Price per unit in INR                     |
| `currentStock`      | number | yes      | Initial quantity in warehouse             |
| `minimumStock`      | number | —        | Low stock threshold (triggers warning)    |
| `warehouseLocation` | string | —        | Physical location (e.g. Rack A-12)        |

> SKU must be unique. Duplicate SKU returns `409 Conflict`.

---

### `PUT /products/:id`

**Roles:** ADMIN, WAREHOUSE
Accepts any subset of the fields from `POST /products`.

---

### `DELETE /products/:id`

**Roles:** ADMIN, WAREHOUSE

> Products linked to any challan cannot be deleted and will return `409 Conflict`.

---

## 4 · Inventory Module

**Module:** ERP Stock Control
**Auth:** Required

All stock operations are recorded as audit trail entries (`IN` or `OUT` movements).

### Endpoints

| Method | Endpoint                  | Roles                             | Description                 |
|--------|---------------------------|-----------------------------------|-----------------------------|
| `GET`  | `/inventory/movements`    | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List stock movement history |
| `POST` | `/inventory/add-stock`    | ADMIN, WAREHOUSE                  | Add stock (IN movement)     |
| `POST` | `/inventory/remove-stock` | ADMIN, WAREHOUSE                  | Remove stock (OUT movement) |

---

### `GET /inventory/movements`

Returns paginated audit log of all stock IN/OUT movements.

```http
GET /api/v1/inventory/movements?page=1&limit=20&productId=<UUID>&type=OUT
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

| Parameter   | Type   | Default | Description                              |
|-------------|--------|---------|------------------------------------------|
| `page`      | number | `1`     | Page number                              |
| `limit`     | number | `10`    | Results per page                         |
| `productId` | UUID   | —       | Filter by specific product               |
| `type`      | enum   | —       | `IN` (replenishment) or `OUT` (dispatch) |

#### Response `200 OK`

```json
{
  "success": true,
  "movements": [
    {
      "id": "clx8a...",
      "productId": "clx7z...",
      "quantity": 5,
      "type": "OUT",
      "reason": "Challan Dispatch: CH-2026-00005",
      "createdById": "clx5a...",
      "createdAt": "2026-08-09T04:40:00.000Z",
      "product": {
        "productName": "ASUS Laptop",
        "sku": "88888888888"
      }
    }
  ]
}
```

---

### `POST /inventory/add-stock`

**Roles:** ADMIN, WAREHOUSE
Adds quantity to a product's `currentStock` and logs an `IN` movement.

```http
POST /api/v1/inventory/add-stock
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

```json
{
  "productId": "clx7z2k0d0001abcd1234efgh",
  "quantity": 25,
  "reason": "Supplier inward shipment"
}
```

#### Fields

| Field       | Type   | Required | Description                   |
|-------------|--------|----------|-------------------------------|
| `productId` | UUID   | yes      | Product to replenish          |
| `quantity`  | number | yes      | Quantity to add (must be > 0) |
| `reason`    | string | yes      | Reason for stock addition     |

---

### `POST /inventory/remove-stock`

**Roles:** ADMIN, WAREHOUSE
Manually removes quantity from a product's stock and logs an `OUT` movement.

```json
{
  "productId": "clx7z2k0d0001abcd1234efgh",
  "quantity": 5,
  "reason": "Damaged goods write-off"
}
```

> Returns `400 Bad Request` if the requested quantity exceeds `currentStock`.

---

## 5 · Delivery Challans Module

**Module:** Sales and Dispatch
**Auth:** Required

Delivery Challans are transaction-safe dispatch documents that:
- Link a customer to one or more products with quantities
- Snapshot product name, SKU, and unit price at creation time
- Automatically deduct stock and create `OUT` audit movements on confirmation
- Reverse stock on cancellation if previously confirmed

### Challan Lifecycle

```
DRAFT ──► CONFIRMED
  │            │
  │            └──► CANCELLED (stock restored)
  │
  └──► CANCELLED
```

### Endpoints

| Method  | Endpoint                | Roles                             | Description           |
|---------|-------------------------|-----------------------------------|-----------------------|
| `GET`   | `/challans`             | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List all challans     |
| `GET`   | `/challans/:id`         | ADMIN, SALES, WAREHOUSE, ACCOUNTS | Get challan by ID     |
| `POST`  | `/challans`             | ADMIN, SALES                      | Create draft challan  |
| `PATCH` | `/challans/:id/confirm` | ADMIN, SALES                      | Confirm challan       |
| `PATCH` | `/challans/:id/cancel`  | ADMIN, SALES                      | Cancel challan        |

---

### `GET /challans`

```http
GET /api/v1/challans?page=1&limit=10&status=CONFIRMED&customerId=<UUID>
Authorization: Bearer <JWT_TOKEN>
```

#### Query Parameters

| Parameter    | Type   | Default | Description                       |
|--------------|--------|---------|-----------------------------------|
| `page`       | number | `1`     | Page number                       |
| `limit`      | number | `10`    | Results per page                  |
| `status`     | enum   | —       | `DRAFT`, `CONFIRMED`, `CANCELLED` |
| `customerId` | UUID   | —       | Filter challans by customer       |

---

### `GET /challans/:id`

Returns full challan details including product snapshots and items.

```json
{
  "id": "clx9b...",
  "challanNumber": "CH-2026-00005",
  "status": "CONFIRMED",
  "customerId": "clx7z...",
  "createdById": "clx5a...",
  "createdAt": "2026-08-09T04:11:58.000Z",
  "customer": {
    "customerName": "Vertex Global",
    "businessName": "Vertex Global Exports"
  },
  "createdBy": {
    "name": "Manoj (Admin)"
  },
  "items": [
    {
      "id": "clxa1...",
      "productId": "clx7z...",
      "quantity": 1,
      "unitPriceSnapshot": 100000,
      "productNameSnapshot": "ASUS Laptop",
      "skuSnapshot": "88888888888"
    }
  ]
}
```

---

### `POST /challans`

**Roles:** ADMIN, SALES
Creates a new challan in `DRAFT` status. A sequential `challanNumber` is auto-generated (`CH-YYYY-NNNNN`). Product name, SKU, and unit price are snapshotted at creation time.

```http
POST /api/v1/challans
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

```json
{
  "customerId": "clx7z2k0d0001abcd1234efgh",
  "items": [
    {
      "productId": "clx7z2k0d0002abcd5678ijkl",
      "quantity": 2
    },
    {
      "productId": "clx7z2k0d0003abcd9012mnop",
      "quantity": 1
    }
  ]
}
```

#### Fields

| Field               | Type   | Required | Description                         |
|---------------------|--------|----------|-------------------------------------|
| `customerId`        | UUID   | yes      | Customer this challan is issued for |
| `items`             | array  | yes      | At least 1 item required            |
| `items[].productId` | UUID   | yes      | Product to include                  |
| `items[].quantity`  | number | yes      | Quantity (must be > 0)              |

> If a product ID does not exist, returns `404 Not Found`.

---

### `PATCH /challans/:id/confirm`

**Roles:** ADMIN, SALES
Confirms a `DRAFT` challan. Performs these operations atomically in a transaction:

1. Validates the challan exists and is in `DRAFT` status.
2. Checks each product has sufficient `currentStock`.
3. Decrements `currentStock` for each product.
4. Creates an `OUT` inventory movement for each product.
5. Sets challan `status` to `CONFIRMED`.

```http
PATCH /api/v1/challans/clx9b.../confirm
Authorization: Bearer <JWT_TOKEN>
```

No request body required.

#### Error Scenarios

| Status | Reason                                                          |
|--------|-----------------------------------------------------------------|
| `400`  | Challan is already `CONFIRMED` or `CANCELLED`                  |
| `400`  | Insufficient stock — returns product name, current vs required |
| `404`  | Challan not found                                               |

---

### `PATCH /challans/:id/cancel`

**Roles:** ADMIN, SALES
Cancels a challan. If the challan was previously `CONFIRMED`, stock is automatically restored and an `IN` movement is logged for each item.

```http
PATCH /api/v1/challans/clx9b.../cancel
Authorization: Bearer <JWT_TOKEN>
```

No request body required.

#### Behaviour by prior status

| Prior Status | On Cancel                                      |
|--------------|------------------------------------------------|
| `DRAFT`      | Status set to `CANCELLED`. No stock change.    |
| `CONFIRMED`  | Stock incremented back. `IN` movements logged. |
| `CANCELLED`  | Returns `400` — already cancelled.             |

---

## 6 · Users Module

**Module:** User Management
**Auth:** Required
**Access:** ADMIN only

### Endpoints

| Method  | Endpoint            | Roles | Description              |
|---------|---------------------|-------|--------------------------|
| `GET`   | `/users`            | ADMIN | List all users           |
| `GET`   | `/users/:id`        | ADMIN | Get user by ID           |
| `POST`  | `/users`            | ADMIN | Create user account      |
| `PUT`   | `/users/:id`        | ADMIN | Update user details      |
| `PATCH` | `/users/:id/status` | ADMIN | Activate/deactivate user |

---

### `POST /users`

```json
{
  "name": "John Sales",
  "email": "john@opssphere.com",
  "password": "SecurePass123",
  "role": "SALES",
  "secretCode": "555"
}
```

#### Fields

| Field        | Type   | Required | Description                               |
|--------------|--------|----------|-------------------------------------------|
| `name`       | string | yes      | Full name                                 |
| `email`      | string | yes      | Unique email address                      |
| `password`   | string | yes      | Minimum 8 characters                      |
| `role`       | enum   | yes      | `ADMIN`, `SALES`, `WAREHOUSE`, `ACCOUNTS` |
| `secretCode` | string | yes      | 3-digit code used during login            |

---

### `PATCH /users/:id/status`

Activate or deactivate a user account.

```json
{
  "isActive": false
}
```

---

## Data Schemas

### Customer

```typescript
{
  id:            string         // UUID
  customerName:  string         // required
  mobile:        string         // required
  email?:        string
  businessName?: string
  gstNumber?:    string
  customerType?: "RETAIL" | "WHOLESALE" | "DISTRIBUTOR"
  address?:      string
  status:        "ACTIVE" | "INACTIVE" | "LEAD"
  notes?:        string
  followUpDate?: string         // ISO 8601 date
  createdAt:     string
  updatedAt:     string
}
```

### Product

```typescript
{
  id:                 string
  productName:        string    // required
  sku:                string    // required, unique
  category?:          string
  unitPrice:          number    // INR, required
  currentStock:       number    // >= 0
  minimumStock:       number    // low-stock threshold
  warehouseLocation?: string
  createdAt:          string
  updatedAt:          string
}
```

### Challan

```typescript
{
  id:            string
  challanNumber: string         // e.g. "CH-2026-00005"
  customerId:    string
  createdById:   string
  status:        "DRAFT" | "CONFIRMED" | "CANCELLED"
  notes?:        string
  createdAt:     string
  updatedAt:     string
  customer?:     Customer
  createdBy?:    User
  items?:        ChallanItem[]
}
```

### ChallanItem

```typescript
{
  id:                  string
  challanId:           string
  productId:           string
  quantity:            number
  unitPriceSnapshot:   number   // price at time of creation
  productNameSnapshot: string   // name at time of creation
  skuSnapshot:         string   // SKU at time of creation
}
```

### InventoryMovement

```typescript
{
  id:          string
  productId:   string
  quantity:    number
  type:        "IN" | "OUT"
  reason:      string
  createdById: string
  createdAt:   string
  product?:    Product
}
```

### User

```typescript
{
  id:         string
  name:       string
  email:      string    // unique
  role:       "ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS"
  secretCode: string
  isActive:   boolean
  createdAt:  string
}
```

---

## Validation Rules

### User

| Field      | Rule                           |
|------------|--------------------------------|
| name       | Required, non-empty            |
| email      | Required, valid format, unique |
| password   | Required, minimum 8 characters |
| role       | Must be a valid Role enum      |
| secretCode | Required                       |

### Customer

| Field        | Rule                                     |
|--------------|------------------------------------------|
| customerName | Required                                 |
| mobile       | Required                                 |
| email        | Valid email format if provided           |
| customerType | RETAIL, WHOLESALE, or DISTRIBUTOR        |
| status       | ACTIVE, INACTIVE, or LEAD                |

### Product

| Field        | Rule                              |
|--------------|-----------------------------------|
| productName  | Required                          |
| sku          | Required, must be globally unique |
| unitPrice    | Required, must be greater than 0  |
| currentStock | Required, must be 0 or greater    |

### Challan

| Field              | Rule                         |
|--------------------|------------------------------|
| customerId         | Required, must exist         |
| items              | Required, at least 1 item    |
| items[].productId  | Required, must exist         |
| items[].quantity   | Required, must be greater than 0 |

### Inventory

| Field      | Rule                         |
|------------|------------------------------|
| productId  | Required, must exist         |
| quantity   | Required, must be greater than 0 |
| reason     | Required                     |

---

## Quick Reference

```
BASE URL
  http://localhost:5000/api/v1

AUTH
  POST   /auth/login

CUSTOMERS
  GET    /customers
  GET    /customers/:id
  POST   /customers
  PUT    /customers/:id
  PATCH  /customers/:id/notes
  DELETE /customers/:id

PRODUCTS
  GET    /products
  GET    /products/:id
  POST   /products
  PUT    /products/:id
  DELETE /products/:id

INVENTORY
  GET    /inventory/movements
  POST   /inventory/add-stock
  POST   /inventory/remove-stock

CHALLANS
  GET    /challans
  GET    /challans/:id
  POST   /challans
  PATCH  /challans/:id/confirm
  PATCH  /challans/:id/cancel

USERS  (Admin only)
  GET    /users
  GET    /users/:id
  POST   /users
  PUT    /users/:id
  PATCH  /users/:id/status
```

---

*OpsSphere API Reference — v1 — Last updated: August 2026*
