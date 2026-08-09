import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserService } from "../services/user.service";
import { LoginUserInput } from "../schemas/user.schema";
import { signToken } from "../utils/jwt";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";


export const login = catchAsync(
  async (
    req: Request<{}, {}, LoginUserInput["body"]>,
    res: Response
  ): Promise<void> => {
    const { email, password, secretCode } = req.body;

    
    const user = await UserService.getUserBySecretCode(secretCode);

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid secret user code",
      });
      return;
    }

    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    
    await UserService.logActivity(user.id, "LOGIN", `Successful login by user ${user.name}`);

    
    const token = signToken({ id: user.id, role: user.role });

    
    const sanitizedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      secretCode: user.secretCode,
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
