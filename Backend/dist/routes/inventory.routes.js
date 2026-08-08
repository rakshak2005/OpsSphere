"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventory_controller_1 = require("../controllers/inventory.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// All stock paths require authenticated sessions
router.use(auth_middleware_1.protect);
// Read permissions: Admin, Sales, Warehouse, Accounts
router.get("/movements", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), inventory_controller_1.getMovements);
// Write permissions: Admin and Warehouse roles only
router.post("/add-stock", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.WAREHOUSE), inventory_controller_1.addStock);
router.post("/remove-stock", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.WAREHOUSE), inventory_controller_1.removeStock);
exports.default = router;
//# sourceMappingURL=inventory.routes.js.map