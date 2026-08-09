import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import prisma from "../lib/prisma";
import { sendResponse } from "../utils/api-response";
import { catchAsync } from "../utils/catch-async";


export const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string || "1", 10);
  const limit = parseInt(req.query.limit as string || "10", 10);
  const search = req.query.search as string;
  const category = req.query.category as string;
  const lowStockOnly = req.query.lowStock === "true";

  const result = await ProductService.getAllProducts({
    page,
    limit,
    search,
    category,
    lowStockOnly,
  });

  sendResponse({
    res,
    statusCode: 200,
    message: "Products fetched successfully",
    data: result,
  });
});


export const getProductById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await ProductService.getProductById(id);

  if (!product) {
    res.status(404).json({ success: false, message: "Product not found" });
    return;
  }

  sendResponse({
    res,
    statusCode: 200,
    message: "Product fetched successfully",
    data: product,
  });
});


export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const {
    productName,
    sku,
    category,
    unitPrice,
    currentStock,
    minimumStock,
    warehouseLocation,
  } = req.body;

  
  const duplicate = await prisma.product.findUnique({ where: { sku } });
  if (duplicate) {
    res.status(409).json({ success: false, message: "Product with this SKU already exists" });
    return;
  }

  const product = await ProductService.createProduct({
    productName,
    sku,
    category,
    unitPrice,
    currentStock,
    minimumStock,
    warehouseLocation,
  });

  sendResponse({
    res,
    statusCode: 201,
    message: "Product created successfully",
    data: product,
  });
});


export const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  
  if (data.sku) {
    const duplicate = await prisma.product.findFirst({
      where: {
        sku: data.sku,
        id: { not: id },
      },
    });
    if (duplicate) {
      res.status(409).json({ success: false, message: "Product with this SKU already exists" });
      return;
    }
  }

  const updatedProduct = await ProductService.updateProduct(id, data);

  sendResponse({
    res,
    statusCode: 200,
    message: "Product updated successfully",
    data: updatedProduct,
  });
});


export const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  
  const activeChallanItem = await prisma.challanItem.findFirst({
    where: { productId: id },
  });

  if (activeChallanItem) {
    res.status(400).json({
      success: false,
      message: "Cannot delete product. It is referenced inside existing challan records.",
    });
    return;
  }

  await ProductService.deleteProduct(id);

  sendResponse({
    res,
    statusCode: 200,
    message: "Product deleted successfully",
  });
});
