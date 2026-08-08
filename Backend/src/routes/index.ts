import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import customerRouter from "./customer.routes";
import productRouter from "./product.routes";
import inventoryRouter from "./inventory.routes";
import challanRouter from "./challan.routes";

const router = Router();

// Mount routes
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/customers", customerRouter);
router.use("/products", productRouter);
router.use("/inventory", inventoryRouter);
router.use("/challans", challanRouter);

export default router;
