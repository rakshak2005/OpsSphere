# OpsSphere Backend API

> **Operations & Resource Management Engine**
>
> A production-oriented backend for **CRM, ERP, Inventory, Sales Challans, Authentication, and Role-Based Access Control (RBAC)**.

Built with **Node.js · Express · TypeScript · Prisma · PostgreSQL · JWT**

---

## Table of Contents

* [Overview](#overview)
* [Technology Stack](#technology-stack)
* [Architecture](#architecture)
* [Quick Start](#quick-start)
* [Environment Configuration](#environment-configuration)
* [Database Setup](#database-setup)
* [Running the Server](#running-the-server)
* [Authentication](#authentication)
* [Test Credentials](#test-credentials)
* [Role-Based Access Control](#role-based-access-control)
* [API Base URL](#api-base-url)
* [API Modules](#api-modules)

  * [Customers](#1-customers)
  * [Products](#2-products)
  * [Inventory](#3-inventory--stock-control)
  * [Delivery Challans](#4-sales-delivery-challans)
* [Common API Conventions](#common-api-conventions)
* [Project Structure](#project-structure)
* [Security Notes](#security-notes)

---

# Overview

**OpsSphere** is a backend operations platform designed to centralize business workflows across multiple departments.

The system provides:

* Authentication with JWT
* Role-based authorization
* Customer relationship management
* Product catalog management
* Inventory and stock movement tracking
* Sales delivery challans
* Stock auditing
* Pagination and search
* Soft deletion
* Transaction-safe inventory operations
* Prisma ORM with PostgreSQL

### Core Workflow

```text
                    ┌─────────────────────┐
                    │      Frontend       │
                    │  React / Web App    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Express API      │
                    │   /api/v1/...       │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
           ┌──────────┐  ┌───────────┐  ┌───────────┐
           │   JWT    │  │   RBAC    │  │ Validation│
           │   Auth   │  │Middleware │  │           │
           └──────────┘  └───────────┘  └───────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Services       │
                    │ Business Logic      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Prisma        │
                    │        ORM          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    │      Database       │
                    └─────────────────────┘
```

---

# Technology Stack

| Layer             | Technology           |
| ----------------- | -------------------- |
| Runtime           | Node.js              |
| Framework         | Express.js           |
| Language          | TypeScript           |
| ORM               | Prisma               |
| Database          | PostgreSQL           |
| Authentication    | JWT                  |
| Password Hashing  | Bcrypt               |
| API Documentation | REST API             |
| Environment       | `.env` configuration |

---

# Quick Start

## 1. Navigate to the Backend

```bash
cd Backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create or update your `.env` file.

```env
PORT=5000

JWT_SECRET="your-development-secret"
JWT_EXPIRES_IN="1d"

NODE_ENV="development"

DATABASE_URL="postgresql://postgres:<PASSWORD>@localhost:5432/myapp?schema=public"
```

> **Security:** Never commit `.env` files, database passwords, JWT secrets, or production credentials to Git.

---

## 4. Initialize the Database

Push the Prisma schema to PostgreSQL:

```bash
npx prisma db push
```

Generate the Prisma Client:

```bash
npx prisma generate
```

---

## 5. Seed Test Data

Populate the database with development/test data:

```bash
npx ts-node-dev prisma/seed.ts
```

---

## 6. Start the Development Server

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:5000/api/v1
```

### Server Status

```text
✓ Server running
✓ Port: 5000
✓ Environment: development
✓ API Base: /api/v1
✓ Database: PostgreSQL
```

---

# Environment Configuration

| Variable         | Description                  | Example            |
| ---------------- | ---------------------------- | ------------------ |
| `PORT`           | API server port              | `5000`             |
| `JWT_SECRET`     | JWT signing secret           | `your-secret`      |
| `JWT_EXPIRES_IN` | Token expiration             | `1d`               |
| `NODE_ENV`       | Application environment      | `development`      |
| `DATABASE_URL`   | PostgreSQL connection string | `postgresql://...` |

---

# Authentication

OpsSphere uses **JWT Bearer Authentication** for protected endpoints.

## Login

### `POST /auth/login`

**Access:** Public

### Request

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

### Successful Response

**`200 OK`**

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

---

## Using the JWT

All protected endpoints require:

```http
Authorization: Bearer <JWT_TOKEN>
```

Example:

```http
GET /api/v1/customers
Authorization: Bearer eyJhbGciOi...
```

---

## Logout

JWT authentication is stateless.

The frontend should remove the stored token from its authentication state or cookie when the user logs out.

```text
Login
  ↓
JWT issued
  ↓
Client stores token
  ↓
Token sent with protected requests
  ↓
Logout
  ↓
Client clears token
```

---

# Test Credentials

The following accounts are available for local development and authorization testing.

> **Important:** These credentials are for development/testing only. Never use them in production.

| Role      | Email                     | Password       | Secret Code | Account            | Access               |
| --------- | ------------------------- | -------------- | ----------- | ------------------ | -------------------- |
| ADMIN     | `admin@opssphere.com`     | `admin123`     | `000`       | System Admin       | Full Access          |
| ADMIN     | `manoj@opssphere.com`     | `admin123`     | `111`       | Manoj              | Full Access          |
| ADMIN     | `vinay@opssphere.com`     | `admin123`     | `222`       | Vinay              | Full Access          |
| SALES     | `sales@opssphere.com`     | `sales123`     | `999`       | Sales Executive    | CRM + Challans       |
| SALES     | `leo@opssphere.com`       | `sales123`     | `333`       | Leo                | CRM + Challans       |
| SALES     | `hari@opssphere.com`      | `sales123`     | `444`       | Hari               | CRM + Challans       |
| WAREHOUSE | `warehouse@opssphere.com` | `warehouse123` | `888`       | Warehouse Manager  | Products + Inventory |
| WAREHOUSE | `anusha@opssphere.com`    | `warehouse123` | `555`       | Anusha             | Products + Inventory |
| WAREHOUSE | `rakshak@opssphere.com`   | `warehouse123` | `666`       | Rakshak            | Products + Inventory |
| ACCOUNTS  | `accounts@opssphere.com`  | `accounts123`  | `777`       | Finance Controller | Read-only            |

---

# Role-Based Access Control

OpsSphere uses **RBAC** to control access to individual API operations.

| Module           | ADMIN | SALES | WAREHOUSE | ACCOUNTS |
| ---------------- | :---: | :---: | :-------: | :------: |
| View Customers   |   ✓   |   ✓   |     ✓     |     ✓    |
| Manage Customers |   ✓   |   ✓   |     —     |     —    |
| View Products    |   ✓   |   ✓   |     ✓     |     ✓    |
| Manage Products  |   ✓   |   —   |     ✓     |     —    |
| View Inventory   |   ✓   |   ✓   |     ✓     |     ✓    |
| Modify Inventory |   ✓   |   —   |     ✓     |     —    |
| View Challans    |   ✓   |   ✓   |     ✓     |     ✓    |
| Create Challans  |   ✓   |   ✓   |     —     |     —    |
| Confirm Challans |   ✓   |   ✓   |     —     |     —    |
| Cancel Challans  |   ✓   |   ✓   |     —     |     —    |

---

# API Base URL

All API routes are prefixed with:

```text
http://localhost:5000/api/v1
```

For example:

```text
GET http://localhost:5000/api/v1/customers
```

---

# API Modules

---

# 1. Customers

**Module:** CRM

All routes require JWT authentication.

### Endpoints

| Method   | Endpoint               | Roles                             | Description          |
| -------- | ---------------------- | --------------------------------- | -------------------- |
| `GET`    | `/customers`           | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List customers       |
| `GET`    | `/customers/:id`       | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View customer        |
| `POST`   | `/customers`           | ADMIN, SALES                      | Create customer      |
| `PUT`    | `/customers/:id`       | ADMIN, SALES                      | Update customer      |
| `PATCH`  | `/customers/:id/notes` | ADMIN, SALES                      | Add follow-up note   |
| `DELETE` | `/customers/:id`       | ADMIN, SALES                      | Soft-delete customer |

---

## List Customers

### `GET /customers`

Supports pagination, search, and status filtering.

```http
GET /api/v1/customers?page=1&limit=10&search=Rahul&status=ACTIVE
```

### Query Parameters

| Parameter | Description          | Example  |
| --------- | -------------------- | -------- |
| `page`    | Page number          | `1`      |
| `limit`   | Results per page     | `10`     |
| `search`  | Search customer data | `Rahul`  |
| `status`  | Filter by status     | `ACTIVE` |

---

## Create Customer

### `POST /customers`

**Roles:** ADMIN, SALES

### Request

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

## Update Customer

### `PUT /customers/:id`

**Roles:** ADMIN, SALES

```http
PUT /api/v1/customers/<CUSTOMER_ID>
Authorization: Bearer <JWT_TOKEN>
```

---

## Add Customer Note

### `PATCH /customers/:id/notes`

**Roles:** ADMIN, SALES

Used to append follow-up notes to the customer's history.

```http
PATCH /api/v1/customers/<CUSTOMER_ID>/notes
Authorization: Bearer <JWT_TOKEN>
```

---

## Delete Customer

### `DELETE /customers/:id`

**Roles:** ADMIN, SALES

This performs a **soft delete** rather than permanently removing the record.

```text
Customer
   ↓
DELETE request
   ↓
status = INACTIVE
   ↓
Record retained for historical data
```

---

# 2. Products

**Module:** ERP Product Catalog

All routes require JWT authentication.

### Endpoints

| Method   | Endpoint        | Roles                             | Description    |
| -------- | --------------- | --------------------------------- | -------------- |
| `GET`    | `/products`     | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List products  |
| `GET`    | `/products/:id` | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View product   |
| `POST`   | `/products`     | ADMIN, WAREHOUSE                  | Create product |
| `PUT`    | `/products/:id` | ADMIN, WAREHOUSE                  | Update product |
| `DELETE` | `/products/:id` | ADMIN, WAREHOUSE                  | Delete product |

---

## List Products

### `GET /products`

Supports pagination, search, and low-stock filtering.

```http
GET /api/v1/products?page=1&limit=10&search=Laptop&lowStock=true
```

### Query Parameters

| Parameter  | Description             | Example  |
| ---------- | ----------------------- | -------- |
| `page`     | Page number             | `1`      |
| `limit`    | Results per page        | `10`     |
| `search`   | Product search          | `Laptop` |
| `lowStock` | Show low-stock products | `true`   |

---

## Product Details

### `GET /products/:id`

Returns detailed information about a specific product.

```http
GET /api/v1/products/<PRODUCT_ID>
Authorization: Bearer <JWT_TOKEN>
```

---

## Create Product

### `POST /products`

**Roles:** ADMIN, WAREHOUSE

```json
{
  "name": "Example Product",
  "sku": "OPS-001"
}
```

> Add additional product fields according to the Prisma schema.

---

## Delete Product

### `DELETE /products/:id`

**Roles:** ADMIN, WAREHOUSE

Products linked to existing challans cannot be deleted.

```text
Product
   │
   ├── Not linked to challan → Delete allowed
   │
   └── Linked to challan     → Delete rejected
```

---

# 3. Inventory — Stock Control

**Module:** ERP Inventory

Inventory operations maintain a historical movement audit trail.

### Endpoints

| Method | Endpoint                  | Roles                             | Description                 |
| ------ | ------------------------- | --------------------------------- | --------------------------- |
| `GET`  | `/inventory/movements`    | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View stock movement history |
| `POST` | `/inventory/add-stock`    | ADMIN, WAREHOUSE                  | Add stock                   |
| `POST` | `/inventory/remove-stock` | ADMIN, WAREHOUSE                  | Remove stock                |

---

## View Stock Movements

### `GET /inventory/movements`

Returns paginated inventory movement history.

```http
GET /api/v1/inventory/movements?page=1&limit=20
Authorization: Bearer <JWT_TOKEN>
```

---

## Add Stock

### `POST /inventory/add-stock`

**Roles:** ADMIN, WAREHOUSE

### Request

```json
{
  "productId": "uuid-product-id",
  "quantity": 10,
  "reason": "Restock from shipment"
}
```

### Operation

```text
Current Stock
     +
Incoming Quantity
     ↓
Updated Stock
     ↓
IN Movement Logged
```

---

## Remove Stock

### `POST /inventory/remove-stock`

**Roles:** ADMIN, WAREHOUSE

Used for manual stock deductions.

```json
{
  "productId": "uuid-product-id",
  "quantity": 5,
  "reason": "Damaged goods"
}
```

### Operation

```text
Current Stock
     -
Outgoing Quantity
     ↓
Updated Stock
     ↓
OUT Movement Logged
```

---

# 4. Sales Delivery Challans

**Module:** Sales & Dispatch

Delivery challans connect:

```text
Customer
    +
Products
    +
Quantities
    ↓
Delivery Challan
    ↓
Confirmation
    ↓
Inventory OUT Movement
```

### Endpoints

| Method  | Endpoint                | Roles                             | Description          |
| ------- | ----------------------- | --------------------------------- | -------------------- |
| `GET`   | `/challans`             | ADMIN, SALES, WAREHOUSE, ACCOUNTS | List challans        |
| `GET`   | `/challans/:id`         | ADMIN, SALES, WAREHOUSE, ACCOUNTS | View challan         |
| `POST`  | `/challans`             | ADMIN, SALES                      | Create draft challan |
| `PATCH` | `/challans/:id/confirm` | ADMIN, SALES                      | Confirm challan      |
| `PATCH` | `/challans/:id/cancel`  | ADMIN, SALES                      | Cancel challan       |

---

## List Challans

### `GET /challans`

Supports pagination and status filtering.

```http
GET /api/v1/challans?page=1&limit=10&status=DRAFT
Authorization: Bearer <JWT_TOKEN>
```

---

## View Challan

### `GET /challans/:id`

Returns challan details including product snapshots.

```http
GET /api/v1/challans/<CHALLAN_ID>
Authorization: Bearer <JWT_TOKEN>
```

---

## Create Draft Challan

### `POST /challans`

**Roles:** ADMIN, SALES

A newly created challan starts in the `DRAFT` state.

### Request

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

### Lifecycle

```text
                 ┌───────────┐
                 │   DRAFT   │
                 └─────┬─────┘
                       │
              Confirm  │  Cancel
                       │
              ┌────────▼────────┐
              │                 │
              ▼                 ▼
        ┌───────────┐     ┌───────────┐
        │ CONFIRMED │     │ CANCELLED │
        └─────┬─────┘     └───────────┘
              │
              ▼
       Stock automatically
          reduced
              │
              ▼
        OUT movement
           logged
```

---

## Confirm Challan

### `PATCH /challans/:id/confirm`

**Roles:** ADMIN, SALES

Confirmation performs the following operations:

1. Validates the challan.
2. Verifies product availability.
3. Checks stock boundaries.
4. Reduces inventory.
5. Creates an `OUT` inventory movement.
6. Updates the challan status to `CONFIRMED`.

```http
PATCH /api/v1/challans/<CHALLAN_ID>/confirm
Authorization: Bearer <JWT_TOKEN>
```

### Stock Flow

```text
Challan Confirmation
        │
        ▼
Check Available Stock
        │
        ├── Insufficient ──► Reject
        │
        ▼
Deduct Stock
        │
        ▼
Create OUT Audit
        │
        ▼
Challan = CONFIRMED
```

---

## Cancel Challan

### `PATCH /challans/:id/cancel`

**Roles:** ADMIN, SALES

If a confirmed challan is cancelled, the associated stock deduction is reversed.

```text
CONFIRMED
    │
    ▼
 CANCEL
    │
    ▼
Stock Restored
    │
    ▼
IN Movement Logged
    │
    ▼
CANCELLED
```

---

# Common API Conventions

## Authentication Header

Protected endpoints use:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Content Type

Requests containing JSON payloads should use:

```http
Content-Type: application/json
```

---

## Pagination

List endpoints support pagination where applicable.

```text
?page=1&limit=10
```

Recommended response structure:

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

---

# HTTP Status Codes

| Status | Meaning                                 |
| ------ | --------------------------------------- |
| `200`  | Request successful                      |
| `201`  | Resource created                        |
| `400`  | Invalid request                         |
| `401`  | Authentication required / invalid token |
| `403`  | Insufficient permissions                |
| `404`  | Resource not found                      |
| `409`  | Resource conflict                       |
| `422`  | Validation error                        |
| `500`  | Internal server error                   |

---

# Error Response

API errors should follow a consistent structure.

```json
{
  "success": false,
  "message": "Insufficient stock",
  "error": "STOCK_UNAVAILABLE"
}
```

---

# Project Structure

A recommended backend structure:

```text
Backend/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### Architectural Flow

```text
HTTP Request
     │
     ▼
Route
     │
     ▼
Middleware
     │
     ├── JWT Authentication
     ├── Role Authorization
     └── Validation
     │
     ▼
Controller
     │
     ▼
Service Layer
     │
     ▼
Prisma
     │
     ▼
PostgreSQL
     │
     ▼
HTTP Response
```

---

# Security Notes

## Never Commit Secrets

The following should remain in `.env` and must **not** be committed to Git:

* `DATABASE_URL`
* PostgreSQL passwords
* `JWT_SECRET`
* Production API keys
* Private credentials

Add this to `.gitignore`:

```gitignore
.env
.env.local
.env.development
.env.production
```

If a real database password or JWT secret has already been pushed to a repository, **rotate it immediately**.

---

# Development Commands

| Command                          | Purpose                   |
| -------------------------------- | ------------------------- |
| `npm install`                    | Install dependencies      |
| `npm run dev`                    | Start development server  |
| `npx prisma db push`             | Push schema to database   |
| `npx prisma generate`            | Generate Prisma Client    |
| `npx ts-node-dev prisma/seed.ts` | Seed development database |

---

# API Quick Reference

```text
BASE URL
└── http://localhost:5000/api/v1

AUTH
└── POST   /auth/login

CUSTOMERS
├── GET    /customers
├── GET    /customers/:id
├── POST   /customers
├── PUT    /customers/:id
├── PATCH  /customers/:id/notes
└── DELETE /customers/:id

PRODUCTS
├── GET    /products
├── GET    /products/:id
├── POST   /products
├── PUT    /products/:id
└── DELETE /products/:id

INVENTORY
├── GET    /inventory/movements
├── POST   /inventory/add-stock
└── POST   /inventory/remove-stock

CHALLANS
├── GET    /challans
├── GET    /challans/:id
├── POST   /challans
├── PATCH  /challans/:id/confirm
└── PATCH  /challans/:id/cancel
```

---

# OpsSphere at a Glance

```text
┌──────────────────────────────────────────────┐
│                  OPSSPHERE                   │
│          Backend Operations Engine           │
├──────────────────────────────────────────────┤
│                                              │
│  AUTH          CRM          ERP              │
│  JWT           Customers    Products         │
│  RBAC          Profiles     Inventory        │
│                            Stock Audits       │
│                                              │
│                  SALES                       │
│              Delivery Challans               │
│                                              │
├──────────────────────────────────────────────┤
│ Node.js │ Express │ TypeScript │ Prisma      │
│ PostgreSQL │ JWT │ Bcrypt                    │
└──────────────────────────────────────────────┘
```

## Status

**Backend:** Development
**API Version:** `v1`
**Database:** PostgreSQL
**Authentication:** JWT + RBAC
**ORM:** Prisma
**Environment:** Development
