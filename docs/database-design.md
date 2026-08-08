# 🗄️ OpsSphere - Database Design

# Overview

The OpsSphere database is designed using a relational model to support ERP and CRM operations for a wholesale distribution business.

The design follows Third Normal Form (3NF) to eliminate data redundancy while maintaining data integrity and scalability.

Primary goals of the database:

- Store customer information
- Manage products
- Track inventory
- Record stock movements
- Create sales challans
- Support role-based authentication
- Preserve historical sales information

---

# Database Technology

Database: PostgreSQL

ORM: Prisma ORM

Primary Keys: UUID

Relationships: Foreign Keys

Timestamps: UTC

---

# Database Schema

```
Users

Customers

Products

StockMovements

Challans

ChallanItems
```

---

# Entity Relationship Diagram (ERD)

```
                  +------------------+
                  |      USERS       |
                  +------------------+
                  | id (PK)          |
                  | name             |
                  | email            |
                  | password         |
                  | role             |
                  +--------+---------+
                           |
        +------------------+------------------+
        |                  |                  |
        |                  |                  |
        ▼                  ▼                  ▼

+---------------+   +---------------+   +------------------+
| CUSTOMERS     |   | PRODUCTS      |   | CHALLANS         |
+---------------+   +---------------+   +------------------+
| id            |   | id            |   | id               |
| createdBy FK  |   | createdBy FK  |   | customerId FK    |
+---------------+   +---------------+   | createdBy FK     |
        |                  |            +---------+--------+
        |                  |                      |
        |                  |                      |
        |                  ▼                      ▼
        |          +------------------+   +--------------------+
        |          | STOCK MOVEMENTS  |   | CHALLAN ITEMS      |
        |          +------------------+   +--------------------+
        |          | productId FK     |   | challanId FK       |
        |          | createdBy FK     |   | productId FK       |
        |          +------------------+   | product snapshot   |
                                          +--------------------+
```

---

# Table Design

---

# 1. Users

Purpose

Stores employee login information.

Fields

| Column | Type | Constraint |
|---------|------|------------|
| id | UUID | Primary Key |
| name | VARCHAR | NOT NULL |
| email | VARCHAR | UNIQUE |
| password | VARCHAR | NOT NULL |
| role | ENUM | NOT NULL |
| isActive | BOOLEAN | Default TRUE |
| createdAt | TIMESTAMP | Auto |
| updatedAt | TIMESTAMP | Auto |

---

Role Enum

```
ADMIN

SALES

WAREHOUSE

ACCOUNTS
```

---

# 2. Customers

Purpose

Stores CRM customer information.

Fields

| Column | Type |
|---------|------|
| id | UUID |
| customerName | VARCHAR |
| mobile | VARCHAR |
| email | VARCHAR |
| businessName | VARCHAR |
| gstNumber | VARCHAR |
| customerType | ENUM |
| address | TEXT |
| status | ENUM |
| followUpDate | DATE |
| notes | TEXT |
| createdBy | UUID FK |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |

---

CustomerType

```
Retail

Wholesale

Distributor
```

---

Customer Status

```
Lead

Active

Inactive
```

---

# 3. Products

Purpose

Stores product master data.

Fields

| Column | Type |
|---------|------|
| id | UUID |
| productName | VARCHAR |
| sku | VARCHAR |
| category | VARCHAR |
| unitPrice | DECIMAL |
| currentStock | INTEGER |
| minimumStock | INTEGER |
| warehouseLocation | VARCHAR |
| createdBy | UUID FK |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |

---

# 4. Stock Movements

Purpose

Maintains inventory audit history.

Every stock modification creates one movement record.

Fields

| Column | Type |
|---------|------|
| id | UUID |
| productId | UUID FK |
| quantity | INTEGER |
| movementType | ENUM |
| reason | VARCHAR |
| createdBy | UUID FK |
| createdAt | TIMESTAMP |

---

Movement Types

```
IN

OUT
```

Example

```
Laptop

Quantity +20

Reason

Purchase
```

Example

```
Laptop

Quantity -5

Reason

Sales Challan
```

---

# 5. Challans

Purpose

Stores Sales Challan header information.

Fields

| Column | Type |
|---------|------|
| id | UUID |
| challanNumber | VARCHAR |
| customerId | UUID FK |
| totalQuantity | INTEGER |
| status | ENUM |
| createdBy | UUID FK |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |

---

Status

```
Draft

Confirmed

Cancelled
```

---

# 6. Challan Items

Purpose

Stores products inside a sales challan.

Fields

| Column | Type |
|---------|------|
| id | UUID |
| challanId | UUID FK |
| productId | UUID FK |
| productNameSnapshot | VARCHAR |
| skuSnapshot | VARCHAR |
| unitPriceSnapshot | DECIMAL |
| quantity | INTEGER |
| createdAt | TIMESTAMP |

---

# Why Product Snapshot?

Suppose

```
Laptop

Price

₹50,000
```

After six months

```
Laptop

Price

₹65,000
```

Old challans should still display

```
₹50,000
```

Therefore the product name, SKU, and price are stored inside ChallanItems as snapshots.

---

# Relationships

| Parent | Child | Relationship |
|----------|---------|-------------|
| User | Customer | One-to-Many |
| User | Product | One-to-Many |
| User | StockMovement | One-to-Many |
| User | Challan | One-to-Many |
| Customer | Challan | One-to-Many |
| Product | StockMovement | One-to-Many |
| Product | ChallanItem | One-to-Many |
| Challan | ChallanItem | One-to-Many |

---

# Database Constraints

## Unique

```
User.email

Product.sku

Challan.challanNumber
```

---

## Required Fields

```
Customer.customerName

Product.productName

Product.unitPrice

Product.currentStock

Challan.customerId
```

---

## Nullable

```
Customer.gstNumber

Customer.notes

Customer.followUpDate
```

---

# Indexing Strategy

Indexes improve search performance.

```
User.email

Customer.mobile

Customer.businessName

Customer.status

Product.sku

Product.category

Challan.challanNumber

StockMovement.productId

Challan.customerId
```

---

# Business Rules

## Authentication

- Only authenticated users can access the system.

---

## Authorization

- Every user has one role.
- Features are restricted based on role.

---

## Inventory Rules

- Stock cannot become negative.
- Every stock update creates a StockMovement record.
- Draft challans do not modify inventory.
- Confirmed challans reduce stock.

---

## Customer Rules

- Mobile number should be unique (recommended).
- GST Number is optional.
- Customer status determines sales pipeline stage.

---

## Challan Rules

- Challan numbers are auto-generated.
- One challan can contain multiple products.
- Challan items store product snapshots.
- Cancelled challans do not affect inventory after proper reversal logic (future enhancement).

---

# Database Normalization

The schema follows Third Normal Form (3NF).

- No duplicate customer information
- No duplicate product information
- No repeated challan data
- Separate stock history table
- Separate challan item table
- Foreign keys maintain referential integrity

---

# Future Enhancements

Additional tables can be introduced later.

```
Suppliers

PurchaseOrders

Invoices

Payments

Warehouses

Categories

ProductImages

AuditLogs

Notifications
```

These modules are intentionally excluded from the current version to keep the implementation aligned with the assignment scope while allowing future expansion.

---

# Database Summary

The OpsSphere database is designed around six core entities with normalized relationships and clear separation of concerns. The schema supports authentication, CRM, inventory management, and sales workflows while preserving historical business data and maintaining referential integrity.