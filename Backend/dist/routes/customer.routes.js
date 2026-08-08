"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = require("../controllers/customer.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_1 = require("../middlewares/validate");
const customer_schema_1 = require("../schemas/customer.schema");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// All CRM routes require authentication
router.use(auth_middleware_1.protect);
// Read permissions: Admin, Sales, Warehouse, Accounts
router.get("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), customer_controller_1.getAllCustomers);
router.get("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), customer_controller_1.getCustomerById);
// Write permissions: Admin, Sales only
router.post("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), (0, validate_1.validate)(customer_schema_1.createCustomerSchema), customer_controller_1.createCustomer);
router.put("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), (0, validate_1.validate)(customer_schema_1.updateCustomerSchema), customer_controller_1.updateCustomer);
router.patch("/:id/notes", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), customer_controller_1.addFollowUpNote);
router.delete("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), customer_controller_1.deleteCustomer);
exports.default = router;
//# sourceMappingURL=customer.routes.js.map