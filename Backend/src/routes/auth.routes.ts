import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { protect } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import { loginUserSchema } from "../schemas/user.schema";
import { sendResponse } from "../utils/api-response";

const router = Router();

// POST /api/v1/auth/login - User login
router.post("/login", validate(loginUserSchema), login);

// GET /api/v1/auth/me - Get current logged in user details
router.get("/me", protect, (req, res) => {
  sendResponse({
    res,
    statusCode: 200,
    message: "Current user profile fetched",
    data: req.user,
  });
});

export default router;
