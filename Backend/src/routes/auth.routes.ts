import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { protect } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import { loginUserSchema } from "../schemas/user.schema";
import { sendResponse } from "../utils/api-response";

const router = Router();


router.post("/login", validate(loginUserSchema), login);


router.get("/me", protect, (req, res) => {
  sendResponse({
    res,
    statusCode: 200,
    message: "Current user profile fetched",
    data: req.user,
  });
});

export default router;
