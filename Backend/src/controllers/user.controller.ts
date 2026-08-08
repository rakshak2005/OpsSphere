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
    const { name, email, password, role } = req.body;

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
    });

    sendResponse({
      res,
      statusCode: 201,
      message: "User registered successfully",
      data: newUser,
    });
  }
);
