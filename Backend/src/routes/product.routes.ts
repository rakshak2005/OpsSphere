import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema";
import { Role } from "../schemas/user.schema";

const router = Router();


router.use(protect);


router.get(
  "/",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getAllProducts
);
router.get(
  "/:id",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getProductById
);


router.post(
  "/",
  restrictTo(Role.ADMIN, Role.WAREHOUSE),
  validate(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  restrictTo(Role.ADMIN, Role.WAREHOUSE),
  validate(updateProductSchema),
  updateProduct
);
router.delete(
  "/:id",
  restrictTo(Role.ADMIN, Role.WAREHOUSE),
  deleteProduct
);

export default router;
