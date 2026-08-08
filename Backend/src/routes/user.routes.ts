import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate";
import { createUserSchema } from "../schemas/user.schema";

const router = Router();

// POST /api/v1/users - Register a new portal user
router.post("/", validate(createUserSchema), registerUser);

export default router;
