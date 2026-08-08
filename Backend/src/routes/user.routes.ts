import { Router } from "express";
import { registerUser, getAllUsers, changePassword, getActivityLogs } from "../controllers/user.controller";
import { validate } from "../middlewares/validate";
import { createUserSchema } from "../schemas/user.schema";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { Role } from "../schemas/user.schema";

const router = Router();

// Require authorization for all user routes
router.use(protect);
router.use(restrictTo(Role.ADMIN));

// GET /api/v1/users - Fetch all portal users
router.get("/", getAllUsers);

// POST /api/v1/users - Create a new user with secretCode
router.post("/", validate(createUserSchema), registerUser);

// PATCH /api/v1/users/:id/password - Reset user password
router.patch("/:id/password", changePassword);

// GET /api/v1/users/activities - Fetch system activity logs
router.get("/activities", getActivityLogs);

export default router;
