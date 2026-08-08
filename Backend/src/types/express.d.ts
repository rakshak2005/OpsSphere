import { Role } from "../schemas/user.schema";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        email: string;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  }
}
