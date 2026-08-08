import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserService } from "../services/user.service";
import { LoginUserInput } from "../schemas/user.schema";
import { signToken } from "../utils/jwt";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";

/**
 * Handle POST /auth/login request.
 * Verifies email/password and returns a stateless session token.
 */
export const login = catchAsync(
  async (
    req: Request<{}, {}, LoginUserInput["body"]>,
    res: Response
  ): Promise<void> => {
    const { email, password } = req.body;

    // 1. Fetch user by email (includes the password hash)
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // 2. Validate password hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // 3. Generate JWT
    const token = signToken({ id: user.id, role: user.role });

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

    sendResponse({
      res,
      statusCode: 200,
      message: "Login successful",
      data: {
        token,
        user: sanitizedUser,
      },
    });
  }
);
