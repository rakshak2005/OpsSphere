"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_1 = require("../middlewares/validate");
const user_schema_1 = require("../schemas/user.schema");
const api_response_1 = require("../utils/api-response");
const router = (0, express_1.Router)();
// POST /api/v1/auth/login - User login
router.post("/login", (0, validate_1.validate)(user_schema_1.loginUserSchema), auth_controller_1.login);
// GET /api/v1/auth/me - Get current logged in user details
router.get("/me", auth_middleware_1.protect, (req, res) => {
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Current user profile fetched",
        data: req.user,
    });
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map