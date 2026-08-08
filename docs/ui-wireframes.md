# 🎨 OpsSphere - UI Wireframes

# Overview

This document defines the user interface structure, navigation flow, page layouts, and reusable UI components for the OpsSphere ERP + CRM application.

The UI is designed to be:

- Clean
- Professional
- Responsive
- Data-focused
- Easy to navigate
- Optimized for internal business operations

---

# Design Principles

- Minimal and modern interface
- Consistent spacing
- Reusable components
- Responsive layout
- Accessible forms
- Clear visual hierarchy
- Fast navigation
- Simple business workflow

---

# Application Layout

```
+--------------------------------------------------------------+
|                         Top Navbar                           |
+-----------+--------------------------------------------------+
|           |                                                  |
|           |                                                  |
| Sidebar   |                 Main Content                     |
|           |                                                  |
|           |                                                  |
|           |                                                  |
+-----------+--------------------------------------------------+
```

---

# Sidebar Navigation

```
🏠 Dashboard

👥 Customers

📦 Products

📊 Inventory

🧾 Sales Challans

👤 Users (Admin)

⚙ Settings

🚪 Logout
```

Menu visibility depends on the logged-in user's role.

---

# Top Navigation Bar

```
-------------------------------------------------------------

🔍 Search

                             🔔 Notifications

                             👤 User Profile

-------------------------------------------------------------
```

User Profile Dropdown

```
Profile

Change Password

Logout
```

---

# Application Pages

```
Login

Dashboard

Customers
    ├── Customer List
    ├── Add Customer
    ├── Edit Customer
    └── Customer Details

Products
    ├── Product List
    ├── Add Product
    └── Edit Product

Inventory
    ├── Current Stock
    └── Stock Movements

Sales Challans
    ├── Challan List
    ├── Create Challan
    └── View Challan

Users
    ├── User List
    ├── Add User
    └── Edit User

Settings
```

---

# Login Page

```
---------------------------------------------------

                OpsSphere Logo

         Enterprise Operations Platform

---------------------------------------------------

Email

_____________________________

Password

_____________________________

☐ Remember Me

Forgot Password?

[ Login ]

---------------------------------------------------
```

---

# Dashboard

```
--------------------------------------------------------

Dashboard

--------------------------------------------------------

+------------+------------+------------+------------+

 Customers     Products      Low Stock     Challans

+------------+------------+------------+------------+

--------------------------------------------------------

Recent Challans

--------------------------------------------------------

Low Stock Products

--------------------------------------------------------

Recent Stock Movements

--------------------------------------------------------
```

Dashboard Widgets

- Total Customers
- Total Products
- Low Stock Count
- Today's Challans
- Recent Challans
- Recent Inventory Activity

---

# Customer List

```
------------------------------------------------------

Customers

                   + Add Customer

------------------------------------------------------

Search Customer

------------------------------------------------------

------------------------------------------------------
| Name | Business | Mobile | Status | Actions |
------------------------------------------------------

| Rahul Traders                                 |

| ABC Electronics                               |

------------------------------------------------------

Pagination
```

Actions

- View
- Edit
- Delete

---

# Add / Edit Customer

```
-----------------------------------------------------

Customer Information

-----------------------------------------------------

Customer Name

Business Name

Mobile

Email

GST Number

Customer Type

Address

Follow-up Date

Status

Notes

-----------------------------------------------------

Cancel        Save Customer
```

---

# Customer Details

```
-----------------------------------------------------

Customer Profile

-----------------------------------------------------

Basic Information

Business Details

Address

Follow-up History

Notes

-----------------------------------------------------

Edit Customer
```

---

# Product List

```
-----------------------------------------------------

Products

                  + Add Product

-----------------------------------------------------

Search Products

-----------------------------------------------------

-----------------------------------------------------
| Product | SKU | Stock | Price | Actions |
-----------------------------------------------------

Dell Laptop

HP Laptop

-----------------------------------------------------

Pagination
```

---

# Add Product

```
-----------------------------------------------------

Product Information

-----------------------------------------------------

Product Name

SKU

Category

Unit Price

Current Stock

Minimum Stock

Warehouse Location

-----------------------------------------------------

Cancel      Save Product
```

---

# Inventory Page

```
-----------------------------------------------------

Inventory

-----------------------------------------------------

Current Stock

-----------------------------------------------------

| Product | Stock | Minimum | Status |

-----------------------------------------------------

Stock Movement History

-----------------------------------------------------

| Product | Type | Qty | Reason | Time |

-----------------------------------------------------
```

Status

- In Stock
- Low Stock
- Out of Stock

---

# Sales Challan List

```
-----------------------------------------------------

Sales Challans

               + Create Challan

-----------------------------------------------------

Search Challan

-----------------------------------------------------

| Challan No | Customer | Status | Date | Actions |

-----------------------------------------------------

Pagination
```

---

# Create Sales Challan

```
-----------------------------------------------------

Customer

[ Select Customer ]

-----------------------------------------------------

Products

-----------------------------------------------------

+ Add Product

-----------------------------------------------------

| Product | Qty | Price | Remove |

-----------------------------------------------------

Total Quantity

-----------------------------------------------------

Save Draft

Confirm Challan
```

---

# View Challan

```
-----------------------------------------------------

Challan Number

Customer

Status

Date

-----------------------------------------------------

Products

-----------------------------------------------------

| Product | Qty | Price |

-----------------------------------------------------

Total Quantity

-----------------------------------------------------
```

---

# User Management

(Admin Only)

```
-----------------------------------------------------

Users

                 + Add User

-----------------------------------------------------

| Name | Email | Role | Status | Actions |

-----------------------------------------------------
```

---

# Settings

```
-----------------------------------------------------

Profile

Password

Theme

Application Information

-----------------------------------------------------
```

---

# Reusable Components

Buttons

- Primary Button
- Secondary Button
- Danger Button
- Icon Button

Forms

- Text Input
- Select
- Textarea
- Date Picker
- Password Input

Data Display

- Table
- Card
- Badge
- Avatar
- Empty State

Navigation

- Sidebar
- Navbar
- Breadcrumb
- Pagination

Feedback

- Toast Notifications
- Modal Dialog
- Loading Spinner
- Confirmation Dialog

---

# Color Palette

Primary

```
#2563EB
```

Primary Hover

```
#1D4ED8
```

Success

```
#16A34A
```

Warning

```
#F59E0B
```

Danger

```
#DC2626
```

Background

```
#F8FAFC
```

Card

```
#FFFFFF
```

Text

```
#0F172A
```

Border

```
#E2E8F0
```

---

# Typography

Font

```
Inter
```

Headings

- Bold
- Clear hierarchy

Body

- Medium weight
- Easy readability

---

# Icons

Library

```
Lucide React
```

Icons

- Home
- Users
- Package
- Boxes
- Receipt
- Settings
- Bell
- Search
- Log Out
- Plus
- Pencil
- Trash
- Eye

---

# Responsive Behavior

Desktop

- Full sidebar
- Multi-column layout
- Data tables

Tablet

- Collapsible sidebar
- Responsive cards
- Compact tables

Mobile

- Drawer navigation
- Horizontal scrolling tables
- Single-column forms
- Stacked dashboard cards

---

# User Navigation Flow

```
Login

↓

Dashboard

↓

Customers
      ↓
Customer Details
      ↓
Edit Customer

↓

Products
      ↓
Inventory

↓

Sales Challans
      ↓
Create Challan
      ↓
Confirm Challan

↓

Dashboard
```

---

# UI Summary

The OpsSphere interface follows a modern admin dashboard pattern with role-based navigation, reusable components, responsive layouts, and consistent design principles. The UI emphasizes usability, business efficiency, and scalability while keeping the experience clean and intuitive for internal users.