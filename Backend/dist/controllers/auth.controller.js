"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = require("../services/user.service");
const jwt_1 = require("../utils/jwt");
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Handle POST /auth/login request.
 * Verifies email/password and returns a stateless session token.
 */
exports.login = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { email, password } = req.body;
    // 1. Fetch user by email (includes the password hash)
    const user = await user_service_1.UserService.getUserByEmail(email);
    if (!user) {
        res.status(401).json({
            success: false,
            message: "Invalid email or password",
        });
        return;
    }
    // 2. Validate password hash
    const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordCorrect) {
        res.status(401).json({
            success: false,
            message: "Invalid email or password",
        });
        return;
    }
    // 3. Generate JWT
    const token = (0, jwt_1.signToken)({ id: user.id, role: user.role });
    // 4. Return sanitized user metadata (excluding password)
    const sanitizedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Login successful",
        data: {
            token,
            user: sanitizedUser,
        },
    });
});
//# sourceMappingURL=auth.controller.js.map