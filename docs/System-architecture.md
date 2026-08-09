# 🏗️ OpsSphere - System Design

## Project Overview

**Project Name:** OpsSphere

**Project Type:** Mini ERP + CRM Operations Portal

**Description:**

OpsSphere is a web-based Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) platform designed for wholesale and distribution businesses. The system enables employees to securely manage customers, products, inventory, and sales operations while maintaining accurate stock records and role-based access.

---

# Objectives

- Provide secure authentication using JWT.
- Manage customer information and follow-ups.
- Manage products and inventory.
- Track stock movements.
- Create and manage sales challans.
- Prevent invalid business operations such as negative inventory.
- Build a scalable and maintainable full-stack application.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- TanStack Query
- Axios
- React Hook Form
- Zod

---

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- JWT Authentication
- bcrypt

---

## Database

- PostgreSQL (Neon)

---

## Deployment

Frontend
- Vercel

Backend
- Render

Database
- Neon PostgreSQL

---

# High Level Architecture

```
                    Users
                       │
                       ▼
             React Frontend (Vite)
                       │
                 REST API (HTTPS)
                       │
                       ▼
        Express + TypeScript Backend
                       │
      ┌────────────────┼────────────────┐
      │                │                │
 Authentication   Business Logic   Validation
      │                │                │
      └────────────────┴────────────────┘
                       │
                  Prisma ORM
                       │
                       ▼
             PostgreSQL Database
```

---

# System Modules

## Authentication

Responsibilities

- Login
- JWT Authentication
- Authorization
- Protected Routes

---

## Dashboard

Displays

- Total Customers
- Total Products
- Low Stock Products
- Today's Challans
- Recent Stock Movements

---

## Customer CRM

Features

- Add Customer
- Edit Customer
- Search Customer
- Customer Details
- Follow-up Management

---

## Product Management

Features

- Add Product
- Edit Product
- Product Listing
- Search Products

---

## Inventory Management

Features

- Current Stock
- Stock Movement History
- Stock IN
- Stock OUT

---

## Sales Challan

Features

- Create Challan
- Draft Challan
- Confirm Challan
- Cancel Challan
- Product Snapshot Storage

---

## User Management

Admin Only

Features

- Create User
- Edit User
- Manage Roles
- Activate/Deactivate User

---

# User Roles

## Admin

Permissions

- Full Access
- User Management
- Customer Management
- Product Management
- Inventory
- Challans

---

## Sales

Permissions

- Customer Management
- Create Challans
- View Dashboard

---

## Warehouse

Permissions

- Product Management
- Inventory Management

---

## Accounts

Permissions

- View Challans
- Dashboard

---

# Business Workflow

```
Login

↓

Dashboard

↓

Customer Created

↓

Products Available

↓

Create Sales Challan

↓

Draft

↓

Confirm

↓

Validate Stock

↓

Reduce Inventory

↓

Create Stock Movement

↓

Success
```

---

# Authentication Flow

```
User Login

↓

Email + Password

↓

Backend Validation

↓

JWT Generated

↓

Frontend Stores Token

↓

Protected Dashboard
```

---

# Product Flow

```
Add Product

↓

Store Product

↓

Update Inventory

↓

Track Stock Movement
```

---

# Customer Flow

```
Add Customer

↓

Store Customer

↓

Search Customer

↓

Customer Details

↓

Follow-up
```

---

# Sales Challan Flow

```
Select Customer

↓

Select Products

↓

Enter Quantity

↓

Save Draft

↓

Confirm

↓

Validate Stock

↓

Reduce Inventory

↓

Create Stock Movement

↓

Return Success
```

---

# Backend Architecture

```
Routes

↓

Controllers

↓

Services

↓

Repositories

↓

Prisma ORM

↓

Database
```

---

# Frontend Architecture

```
Pages

↓

Layouts

↓

Components

↓

Services

↓

REST APIs

↓

Backend
```

---

# Project Structure

```
OpsSphere

│

├── backend

│   ├── src

│   │   ├── config

│   │   ├── controllers

│   │   ├── middlewares

│   │   ├── repositories

│   │   ├── routes

│   │   ├── services

│   │   ├── validators

│   │   ├── utils

│   │   ├── types

│   │   ├── constants

│   │   └── app.ts

│   │

│   └── prisma

│

├── frontend

│   ├── src

│   │   ├── assets

│   │   ├── components

│   │   ├── context

│   │   ├── hooks

│   │   ├── layouts

│   │   ├── pages

│   │   ├── routes

│   │   ├── services

│   │   ├── store

│   │   ├── styles

│   │   ├── types

│   │   ├── utils

│   │   └── constants

│

├── docs

└── README.md
```

---

# Security Design

- JWT Authentication
- Password Hashing using bcrypt
- Role-Based Authorization
- Request Validation using Zod
- Environment Variables
- Protected API Routes
- Proper HTTP Status Codes
- Centralized Error Handling

---

# Error Handling

Every API will return standardized responses.

Success

```json
{
  "success": true,
  "message": "Customer created successfully",
  "data": {}
}
```

Error

```json
{
  "success": false,
  "message": "Insufficient stock"
}
```

---

# Deployment Architecture

```
Users

↓

Vercel

↓

Render Backend

↓

Neon PostgreSQL
```

---

# Future Enhancements

- Purchase Orders
- Supplier Management
- Invoice PDF Generation
- AWS S3 Product Images
- Email Notifications
- Analytics Dashboard
- Docker
- GitHub Actions CI/CD

---

# System Summary

OpsSphere follows a layered architecture with a React frontend, Express backend, Prisma ORM, and PostgreSQL database. The system is designed to be modular, secure, scalable, and maintainable while implementing real-world ERP and CRM workflows for wholesale distribution businesses.