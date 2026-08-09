import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { verifyToken } from "../utils/jwt";
import { catchAsync } from "../utils/catch-async";
import { Role } from "../schemas/user.schema";


export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let token: string | undefined;

    
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

    
    try {
      const decoded = verifyToken(token);

      
      const currentUser = await UserService.getUserById(decoded.id);

      if (!currentUser) {
        res.status(401).json({
          success: false,
          message: "The user belonging to this session token no longer exists.",
        });
        return;
      }

      
      if (!currentUser.isActive) {
        res.status(401).json({
          success: false,
          message: "This user account is currently deactivated.",
        });
        return;
      }

      
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
