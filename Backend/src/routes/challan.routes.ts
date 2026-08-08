import { Router } from "express";
import {
  getAllChallans,
  getChallanById,
  createDraftChallan,
  confirmChallan,
  cancelChallan,
} from "../controllers/challan.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import {
  createChallanSchema,
} from "../schemas/challan.schema";
import { Role } from "../schemas/user.schema";

const router = Router();

// All challan paths require authenticated sessions
router.use(protect);

// Read permissions: Admin, Sales, Warehouse, Accounts
router.get(
  "/",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getAllChallans
);
router.get(
  "/:id",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getChallanById
);

// Write permissions: Admin and Sales roles only
router.post(
  "/",
  restrictTo(Role.ADMIN, Role.SALES),
  validate(createChallanSchema),
  createDraftChallan
);
router.patch(
  "/:id/confirm",
  restrictTo(Role.ADMIN, Role.SALES),
  confirmChallan
);
router.patch(
  "/:id/cancel",
  restrictTo(Role.ADMIN, Role.SALES),
  cancelChallan
);

export default router;
