"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("../schemas/user.schema");
const router = (0, express_1.Router)();
// POST /api/v1/users - Register a new portal user
router.post("/", (0, validate_1.validate)(user_schema_1.createUserSchema), user_controller_1.registerUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map