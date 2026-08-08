"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_1 = require("../middlewares/validate");
const product_schema_1 = require("../schemas/product.schema");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// All catalog paths require authenticated sessions
router.use(auth_middleware_1.protect);
// Read permissions: Admin, Sales, Warehouse, Accounts
router.get("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), product_controller_1.getAllProducts);
router.get("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), product_controller_1.getProductById);
// Write permissions: Admin and Warehouse roles only
router.post("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.WAREHOUSE), (0, validate_1.validate)(product_schema_1.createProductSchema), product_controller_1.createProduct);
router.put("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.WAREHOUSE), (0, validate_1.validate)(product_schema_1.updateProductSchema), product_controller_1.updateProduct);
router.delete("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.WAREHOUSE), product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map