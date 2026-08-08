import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { verifyToken } from "../utils/jwt";
import { catchAsync } from "../utils/catch-async";
import { Role } from "../schemas/user.schema";

/**
 * Middleware to protect API routes.
 * Verifies the client's JWT token and attaches the authenticated User object to req.user.
 */
export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let token: string | undefined;

    // 1. Extract token from Authorization header or cookies
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      res.status(401).json({
        success: false,
        message: "You are not logged in. Please log in to gain access.",
      });
      return;
    }

    // 2. Cryptographically verify token signature
    try {
      const decoded = verifyToken(token);

      // 3. Confirm that the user account still exists in PostgreSQL
      const currentUser = await UserService.getUserById(decoded.id);

      if (!currentUser) {
        res.status(401).json({
          success: false,
          message: "The user belonging to this session token no longer exists.",
        });
        return;
      }

      // 4. Ensure the user account has not been deactivated
      if (!currentUser.isActive) {
        res.status(401).json({
          success: false,
          message: "This user account is currently deactivated.",
        });
        return;
      }

      // 5. Attach the authenticated user object to the request context
      req.user = {
        ...currentUser,
        role: currentUser.role as unknown as Role,
      };

      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Invalid token or session expired.",
      });
    }
  }
);

/**
 * Middleware to restrict route access to specific roles.
 */
export const restrictTo = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action.",
      });
      return;
    }
    next();
  };
};
