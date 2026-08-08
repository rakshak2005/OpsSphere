import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { loginUserSchema } from "../schemas/user.schema";

const router = Router();

// POST /api/v1/auth/login - User login
router.post("/login", validate(loginUserSchema), login);

export default router;
