import { Router } from "express";
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  addFollowUpNote,
  deleteCustomer,
} from "../controllers/customer.controller";
import { protect, restrictTo } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schema";
import { Role } from "../schemas/user.schema";

const router = Router();


router.use(protect);


router.get(
  "/",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getAllCustomers
);
router.get(
  "/:id",
  restrictTo(Role.ADMIN, Role.SALES, Role.WAREHOUSE, Role.ACCOUNTS),
  getCustomerById
);


router.post(
  "/",
  restrictTo(Role.ADMIN, Role.SALES),
  validate(createCustomerSchema),
  createCustomer
);
router.put(
  "/:id",
  restrictTo(Role.ADMIN, Role.SALES),
  validate(updateCustomerSchema),
  updateCustomer
);
router.patch(
  "/:id/notes",
  restrictTo(Role.ADMIN, Role.SALES),
  addFollowUpNote
);
router.delete(
  "/:id",
  restrictTo(Role.ADMIN, Role.SALES),
  deleteCustomer
);

export default router;
