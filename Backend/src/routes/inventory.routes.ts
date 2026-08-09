import { Router } from "express";
import {
  addStock,
  removeStock,
  getMovements,
} from "../controllers/inventory.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { Role } from "../schemas/user.schema";

const router = Router();


router.use(protect);


router.get(
  "/movements",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getMovements
);


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
