import { Router } from "express";
import { registerUser, getAllUsers, changePassword, getActivityLogs } from "../controllers/user.controller";
import { validate } from "../middlewares/validate";
import { createUserSchema } from "../schemas/user.schema";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { Role } from "../schemas/user.schema";

const router = Router();


router.use(protect);
router.use(restrictTo(Role.ADMIN));


router.get("/", getAllUsers);


router.post("/", validate(createUserSchema), registerUser);


router.patch("/:id/password", changePassword);


router.get("/activities", getActivityLogs);

export default router;
