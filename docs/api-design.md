# 🌐 OpsSphere - API Design

# Overview

This document defines the REST API specification for the OpsSphere ERP + CRM application.

The API follows RESTful principles with JSON request and response bodies.

---

# Base URL

Development

```
http://localhost:5000/api/v1
```

Production

```
https://api.opssphere.com/api/v1
```

---

# API Standards

## Request Format

```
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
```

---

## Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": []
}
```

---

# Authentication APIs

---

## Login

### Endpoint

```
POST /auth/login
```

### Access

Public

### Request

```json
{
  "email": "admin@opssphere.com",
  "password": "Password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token",
    "user": {}
  }
}
```

---

## Get Current User

```
GET /auth/me
```

Access

Authenticated Users

---

## Logout

```
POST /auth/logout
```

Access

Authenticated Users

---

# Customer APIs

---

## Get All Customers

```
GET /customers
```

Query Parameters

```
?page=1

?limit=10

?search=rahul

?status=Active
```

Access

Admin

Sales

---

## Get Customer By ID

```
GET /customers/:id
```

---

## Create Customer

```
POST /customers
```

### Request

```json
{
  "customerName": "Rahul Traders",
  "mobile": "9876543210",
  "email": "rahul@gmail.com",
  "businessName": "Rahul Traders",
  "gstNumber": "29ABCDE1234F1Z5",
  "customerType": "Wholesale",
  "address": "Bangalore",
  "status": "Lead",
  "followUpDate": "2026-08-15",
  "notes": "Potential customer"
}
```

---

## Update Customer

```
PUT /customers/:id
```

---

## Delete Customer

```
DELETE /customers/:id
```

Soft delete recommended.

---

# Product APIs

---

## Get Products

```
GET /products
```

Query

```
?page=1

?limit=10

?search=laptop

?category=Electronics
```

---

## Get Product

```
GET /products/:id
```

---

## Create Product

```
POST /products
```

Request

```json
{
  "productName": "Dell Laptop",
  "sku": "DL1001",
  "category": "Laptop",
  "unitPrice": 50000,
  "currentStock": 50,
  "minimumStock": 5,
  "warehouseLocation": "Rack A"
}
```

---

## Update Product

```
PUT /products/:id
```

---

## Delete Product

```
DELETE /products/:id
```

---

# Inventory APIs

---

## Current Inventory

```
GET /inventory
```

---

## Stock Movement History

```
GET /inventory/movements
```

Query

```
?page=1

?productId=

?type=IN

?type=OUT
```

---

## Add Stock

```
POST /inventory/add-stock
```

Request

```json
{
  "productId": "",
  "quantity": 25,
  "reason": "Purchase"
}
```

---

## Remove Stock

```
POST /inventory/remove-stock
```

Request

```json
{
  "productId": "",
  "quantity": 5,
  "reason": "Damaged"
}
```

---

# Sales Challan APIs

---

## Get Challans

```
GET /challans
```

---

## Get Challan

```
GET /challans/:id
```

---

## Create Challan

```
POST /challans
```

Request

```json
{
  "customerId": "uuid",
  "items": [
    {
      "productId": "uuid",
      "quantity": 2
    },
    {
      "productId": "uuid",
      "quantity": 5
    }
  ],
  "status": "Draft"
}
```

---

## Update Challan

```
PUT /challans/:id
```

---

## Confirm Challan

```
PATCH /challans/:id/confirm
```

Business Logic

- Validate stock
- Reduce inventory
- Create stock movement
- Change status to Confirmed

---

## Cancel Challan

```
PATCH /challans/:id/cancel
```

---

# User APIs

(Admin Only)

---

## Get Users

```
GET /users
```

---

## Get User

```
GET /users/:id
```

---

## Create User

```
POST /users
```

Request

```json
{
  "name": "John",
  "email": "john@opssphere.com",
  "password": "Password123",
  "role": "SALES"
}
```

---

## Update User

```
PUT /users/:id
```

---

## Deactivate User

```
PATCH /users/:id/status
```

---

# Dashboard APIs

---

## Dashboard Summary

```
GET /dashboard
```

Response

```json
{
  "totalCustomers": 150,
  "totalProducts": 75,
  "lowStockProducts": 4,
  "todayChallans": 12
}
```

---

## Recent Challans

```
GET /dashboard/recent-challans
```

---

## Recent Stock Movements

```
GET /dashboard/stock-movements
```

---

# Validation Rules

## User

- Name required
- Email required
- Email unique
- Password minimum 8 characters

---

## Customer

- Customer Name required
- Mobile required
- Email valid
- GST optional

---

## Product

- Product Name required
- SKU unique
- Price > 0
- Stock >= 0

---

## Challan

- Customer required
- At least one product
- Quantity > 0
- Draft or Confirmed only

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# Role Permissions

| API | Admin | Sales | Warehouse | Accounts |
|------|:-----:|:------:|:----------:|:---------:|
| Authentication | ✅ | ✅ | ✅ | ✅ |
| Customers | ✅ | ✅ | 👁️ | 👁️ |
| Products | ✅ | 👁️ | ✅ | 👁️ |
| Inventory | ✅ | 👁️ | ✅ | 👁️ |
| Challans | ✅ | ✅ | 👁️ | 👁️ |
| Users | ✅ | ❌ | ❌ | ❌ |
| Dashboard | ✅ | ✅ | ✅ | ✅ |

Legend

- ✅ Full Access
- 👁️ Read Only
- ❌ No Access

---

# API Versioning

Current Version

```
v1
```

Example

```
/api/v1/customers

/api/v1/products

/api/v1/challans
```

Future versions can be released as

```
/api/v2
```

without breaking existing clients.

---

# Summary

The OpsSphere API follows RESTful architecture with JWT-based authentication, role-based authorization, consistent request and response formats, proper HTTP status codes, and versioned endpoints. This design provides a scalable foundation for the ERP + CRM system while keeping the frontend and backend loosely coupled.