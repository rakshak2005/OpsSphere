import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserInput } from "../schemas/user.schema";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";

/**
 * Handle new portal user registration request.
 */
export const registerUser = catchAsync(
  async (
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
  ): Promise<void> => {
    const { name, email, password, role, secretCode } = req.body;

    // Check database for existing registration
    const existingUser = await UserService.getUserByEmail(email);

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
      return;
    }

    // Call service to hash password and write user
    const newUser = await UserService.createUser({
      name,
      email,
      password,
      role,
      secretCode,
    });

    // Log the user registration action
    if (req.user?.id) {
      await UserService.logActivity(req.user.id, "USER_CREATE", `Created new user: ${name} (${role})`);
    }

    sendResponse({
      res,
      statusCode: 201,
      message: "User registered successfully",
      data: newUser,
    });
  }
);

/**
 * Get all users for admin management.
 */
export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  sendResponse({
    res,
    statusCode: 200,
    message: "Users fetched successfully",
    data: users,
  });
});

/**
 * Update password for a particular user (Admin access).
 */
export const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  if (!newPassword || newPassword.length < 8) {
    res.status(400).json({ success: false, message: "New password must be at least 8 characters long." });
    return;
  }

  const updatedUser = await UserService.updatePassword(id, newPassword);

  // Log action
  if (req.user?.id) {
    await UserService.logActivity(
      req.user.id,
      "PASSWORD_CHANGE",
      `Admin changed password for user ID: ${id} (${updatedUser.name})`
    );
  }

  sendResponse({
    res,
    statusCode: 200,
    message: "Password updated successfully",
    data: { id: updatedUser.id, name: updatedUser.name },
  });
});

/**
 * Get User activity logs (Admin audit trails).
 */
export const getActivityLogs = catchAsync(async (req: Request, res: Response) => {
  const logs = await UserService.getActivityLogs();
  sendResponse({
    res,
    statusCode: 200,
    message: "Activity logs fetched successfully",
    data: logs,
  });
});
