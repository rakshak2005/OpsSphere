import { Request, Response } from "express";
import { CustomerStatus } from "@prisma/client";
import { CustomerService } from "../services/customer.service";
import prisma from "../lib/prisma";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";


export const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string || "1", 10);
  const limit = parseInt(req.query.limit as string || "10", 10);
  const search = req.query.search as string;
  const status = req.query.status as CustomerStatus;

  const result = await CustomerService.getAllCustomers({
    page,
    limit,
    search,
    status,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Customers fetched successfully",
    data: result,
  });
});


export const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await CustomerService.getCustomerById(id);

  if (!customer) {
    res.status(404).json({ success: false, message: "Customer not found" });
    return;
  }

  sendResponse({
    res,
    statusCode: 200,
    message: "Customer fetched successfully",
    data: customer,
  });
});


export const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const {
    customerName,
    mobile,
    email,
    businessName,
    gstNumber,
    customerType,
    address,
    status,
    followUpDate,
    notes,
  } = req.body;

  const duplicate = await prisma?.customer.findUnique({ where: { email } });
  if (duplicate) {
    res.status(409).json({ success: false, message: "Email already registered" });
    return;
  }

  const customer = await CustomerService.createCustomer({
    customerName,
    mobile,
    email,
    businessName,
    gstNumber,
    customerType,
    address,
    status,
    followUpDate: followUpDate ? new Date(followUpDate) : null,
    notes,
  });

  sendResponse({
    res,
    statusCode: 201,
    message: "Customer created successfully",
    data: customer,
  });
});


export const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  if (data.followUpDate) {
    data.followUpDate = new Date(data.followUpDate);
  }

  const updatedCustomer = await CustomerService.updateCustomer(id, data);

  sendResponse({
    res,
    statusCode: 200,
    message: "Customer updated successfully",
    data: updatedCustomer,
  });
});


export const addFollowUpNote = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { note } = req.body;

  if (!note || note.trim() === "") {
    res.status(400).json({ success: false, message: "Note content is required" });
    return;
  }

  const customer = await CustomerService.getCustomerById(id);

  if (!customer) {
    res.status(404).json({ success: false, message: "Customer not found" });
    return;
  }

  const timestamp = new Date().toLocaleString();
  const updatedNotes = customer.notes
    ? `${customer.notes}\n[${timestamp}]: ${note}`
    : `[${timestamp}]: ${note}`;

  const updatedCustomer = await CustomerService.updateCustomer(id, {
    notes: updatedNotes,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Follow-up note added successfully",
    data: updatedCustomer,
  });
});


export const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  await CustomerService.softDeleteCustomer(id);

  sendResponse({
    res,
    statusCode: 200,
    message: "Customer soft-deleted successfully",
  });
});
