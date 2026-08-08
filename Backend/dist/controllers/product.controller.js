"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_service_1 = require("../services/product.service");
const prisma_1 = __importDefault(require("../lib/prisma"));
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Get all products with search, category filtering, low-stock threshold queries, and pagination.
 */
exports.getAllProducts = (0, catch_async_1.catchAsync)(async (req, res) => {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "10", 10);
    const search = req.query.search;
    const category = req.query.category;
    const lowStockOnly = req.query.lowStock === "true";
    const result = await product_service_1.ProductService.getAllProducts({
        page,
        limit,
        search,
        category,
        lowStockOnly,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Products fetched successfully",
        data: result,
    });
});
/**
 * Get product details by ID.
 */
exports.getProductById = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const product = await product_service_1.ProductService.getProductById(id);
    if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
        return;
    }
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Product fetched successfully",
        data: product,
    });
});
/**
 * Create a new product.
 */
exports.createProduct = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { productName, sku, category, unitPrice, currentStock, minimumStock, warehouseLocation, } = req.body;
    // Enforce SKU code uniqueness
    const duplicate = await prisma_1.default.product.findUnique({ where: { sku } });
    if (duplicate) {
        res.status(409).json({ success: false, message: "Product with this SKU already exists" });
        return;
    }
    const product = await product_service_1.ProductService.createProduct({
        productName,
        sku,
        category,
        unitPrice,
        currentStock,
        minimumStock,
        warehouseLocation,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 201,
        message: "Product created successfully",
        data: product,
    });
});
/**
 * Update product details.
 */
exports.updateProduct = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    // Prevent duplicate SKU updating if sku is being updated
    if (data.sku) {
        const duplicate = await prisma_1.default.product.findFirst({
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
    const updatedProduct = await product_service_1.ProductService.updateProduct(id, data);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Product updated successfully",
        data: updatedProduct,
    });
});
/**
 * Delete product.
 */
exports.deleteProduct = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    // Confirm if product is linked to any active challans
    const activeChallanItem = await prisma_1.default.challanItem.findFirst({
        where: { productId: id },
    });
    if (activeChallanItem) {
        res.status(400).json({
            success: false,
            message: "Cannot delete product. It is referenced inside existing challan records.",
        });
        return;
    }
    await product_service_1.ProductService.deleteProduct(id);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Product deleted successfully",
    });
});
//# sourceMappingURL=product.controller.js.map