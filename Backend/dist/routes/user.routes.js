"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("../schemas/user.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_schema_2 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// Require authorization for all user routes
router.use(auth_middleware_1.protect);
router.use((0, auth_middleware_1.restrictTo)(user_schema_2.Role.ADMIN));
// GET /api/v1/users - Fetch all portal users
router.get("/", user_controller_1.getAllUsers);
// POST /api/v1/users - Create a new user with secretCode
router.post("/", (0, validate_1.validate)(user_schema_1.createUserSchema), user_controller_1.registerUser);
// PATCH /api/v1/users/:id/password - Reset user password
router.patch("/:id/password", user_controller_1.changePassword);
// GET /api/v1/users/activities - Fetch system activity logs
router.get("/activities", user_controller_1.getActivityLogs);
exports.default = router;
//# sourceMappingURL=user.routes.js.map