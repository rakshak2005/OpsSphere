"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challan_controller_1 = require("../controllers/challan.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_1 = require("../middlewares/validate");
const challan_schema_1 = require("../schemas/challan.schema");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// All challan paths require authenticated sessions
router.use(auth_middleware_1.protect);
// Read permissions: Admin, Sales, Warehouse, Accounts
router.get("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), challan_controller_1.getAllChallans);
router.get("/:id", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES, user_schema_1.Role.WAREHOUSE, user_schema_1.Role.ACCOUNTS), challan_controller_1.getChallanById);
// Write permissions: Admin and Sales roles only
router.post("/", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), (0, validate_1.validate)(challan_schema_1.createChallanSchema), challan_controller_1.createDraftChallan);
router.patch("/:id/confirm", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), challan_controller_1.confirmChallan);
router.patch("/:id/cancel", (0, auth_middleware_1.restrictTo)(user_schema_1.Role.ADMIN, user_schema_1.Role.SALES), challan_controller_1.cancelChallan);
exports.default = router;
//# sourceMappingURL=challan.routes.js.map