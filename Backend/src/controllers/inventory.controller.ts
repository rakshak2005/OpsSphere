import { Request, Response } from "express";
import { MovementType } from "@prisma/client";
import { InventoryService } from "../services/inventory.service";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";

/**
 * Handle POST /inventory/add-stock
 */
export const addStock = catchAsync(async (req: Request, res: Response) => {
  const { productId, quantity, reason } = req.body;
  const createdById = req.user!.id; // Guaranteed by protect middleware

  if (!productId || !quantity || quantity <= 0) {
    res.status(400).json({ success: false, message: "Valid Product ID and positive quantity are required" });
    return;
  }

  const result = await InventoryService.addStock({
    productId,
    quantity: parseInt(quantity, 10),
    reason: reason || "Purchase Order Receipt",
    createdById,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Stock added successfully",
    data: result,
  });
});

/**
 * Handle POST /inventory/remove-stock
 */
export const removeStock = catchAsync(async (req: Request, res: Response) => {
  const { productId, quantity, reason } = req.body;
  const createdById = req.user!.id;

  if (!productId || !quantity || quantity <= 0) {
    res.status(400).json({ success: false, message: "Valid Product ID and positive quantity are required" });
    return;
  }

  const result = await InventoryService.removeStock({
    productId,
    quantity: parseInt(quantity, 10),
    reason: reason || "Stock adjustment (Damage/Loss)",
    createdById,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Stock removed successfully",
    data: result,
  });
});

/**
 * Handle GET /inventory/movements
 */
export const getMovements = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string || "1", 10);
  const limit = parseInt(req.query.limit as string || "10", 10);
  const productId = req.query.productId as string;
  const type = req.query.type as MovementType;

  const result = await InventoryService.getMovements({
    page,
    limit,
    productId,
    type,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Stock movements fetched successfully",
    data: result,
  });
});
