import { Router } from "express";
import {
  addStock,
  removeStock,
  getMovements,
} from "../controllers/inventory.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { Role } from "../schemas/user.schema";

const router = Router();

// All stock paths require authenticated sessions
router.use(protect);

// Read permissions: Admin, Sales, Warehouse, Accounts
router.get(
  "/movements",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getMovements
);

// Write permissions: Admin and Warehouse roles only
router.post(
  "/add-stock",
  restrictTo(Role.ADMIN, Role.WAREHOUSE),
  addStock
);
router.post(
  "/remove-stock",
  restrictTo(Role.ADMIN, Role.WAREHOUSE),
  removeStock
);

export default router;
