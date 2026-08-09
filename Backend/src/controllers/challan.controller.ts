import { Request, Response } from "express";
import { ChallanStatus } from "@prisma/client";
import { ChallanService } from "../services/challan.service";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";


export const getAllChallans = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string || "1", 10);
  const limit = parseInt(req.query.limit as string || "10", 10);
  const status = req.query.status as ChallanStatus;
  const customerId = req.query.customerId as string;

  const result = await ChallanService.getAllChallans({
    page,
    limit,
    status,
    customerId,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Challans fetched successfully",
    data: result,
  });
});


export const getChallanById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const challan = await ChallanService.getChallanById(id);

  if (!challan) {
    res.status(404).json({ success: false, message: "Challan not found" });
    return;
  }

  sendResponse({
    res,
    statusCode: 200,
    message: "Challan fetched successfully",
    data: challan,
  });
});


export const createDraftChallan = catchAsync(async (req: Request, res: Response) => {
  const { customerId, items } = req.body;
  const createdById = req.user!.id;

  const result = await ChallanService.createDraftChallan({
    customerId,
    createdById,
    items,
  });

  sendResponse({
    res,
    statusCode: 201,
    message: "Draft Challan created successfully",
    data: result,
  });
});


export const confirmChallan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user!.id;

  const result = await ChallanService.confirmChallan(id, userId);

  sendResponse({
    res,
    statusCode: 200,
    message: "Challan confirmed successfully. Stock updated.",
    data: result,
  });
});


export const cancelChallan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user!.id;

  const result = await ChallanService.cancelChallan(id, userId);

  sendResponse({
    res,
    statusCode: 200,
    message: "Challan cancelled successfully. Stock reverted if active.",
    data: result,
  });
});
