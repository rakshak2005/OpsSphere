"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivityLogs = exports.changePassword = exports.getAllUsers = exports.registerUser = void 0;
const user_service_1 = require("../services/user.service");
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Handle new portal user registration request.
 */
exports.registerUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { name, email, password, role, secretCode } = req.body;
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
        secretCode,
    });
    // Log the user registration action
    if (req.user?.id) {
        await user_service_1.UserService.logActivity(req.user.id, "USER_CREATE", `Created new user: ${name} (${role})`);
    }
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 201,
        message: "User registered successfully",
        data: newUser,
    });
});
/**
 * Get all users for admin management.
 */
exports.getAllUsers = (0, catch_async_1.catchAsync)(async (req, res) => {
    const users = await user_service_1.UserService.getAllUsers();
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Users fetched successfully",
        data: users,
    });
});
/**
 * Update password for a particular user (Admin access).
 */
exports.changePassword = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 8) {
        res.status(400).json({ success: false, message: "New password must be at least 8 characters long." });
        return;
    }
    const updatedUser = await user_service_1.UserService.updatePassword(id, newPassword);
    // Log action
    if (req.user?.id) {
        await user_service_1.UserService.logActivity(req.user.id, "PASSWORD_CHANGE", `Admin changed password for user ID: ${id} (${updatedUser.name})`);
    }
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Password updated successfully",
        data: { id: updatedUser.id, name: updatedUser.name },
    });
});
/**
 * Get User activity logs (Admin audit trails).
 */
exports.getActivityLogs = (0, catch_async_1.catchAsync)(async (req, res) => {
    const logs = await user_service_1.UserService.getActivityLogs();
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Activity logs fetched successfully",
        data: logs,
    });
});
//# sourceMappingURL=user.controller.js.map