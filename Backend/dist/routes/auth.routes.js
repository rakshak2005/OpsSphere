"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// POST /api/v1/auth/login - User login
router.post("/login", (0, validate_1.validate)(user_schema_1.loginUserSchema), auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map