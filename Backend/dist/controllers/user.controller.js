"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_service_1 = require("../services/user.service");
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Handle new portal user registration request.
 */
exports.registerUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { name, email, password, role } = req.body;
    // Check database for existing registration
    const existingUser = await user_service_1.UserService.getUserByEmail(email);
    if (existingUser) {
        res.status(409).json({
            success: false,
            message: "User with this email already exists",
        });
        return;
    }
    // Call service to hash password and write user
    const newUser = await user_service_1.UserService.createUser({
        name,
        email,
        password,
        role,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 201,
        message: "User registered successfully",
        data: newUser,
    });
});
//# sourceMappingURL=user.controller.js.map