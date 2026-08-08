"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovements = exports.removeStock = exports.addStock = void 0;
const inventory_service_1 = require("../services/inventory.service");
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Handle POST /inventory/add-stock
 */
exports.addStock = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { productId, quantity, reason } = req.body;
    const createdById = req.user.id; // Guaranteed by protect middleware
    if (!productId || !quantity || quantity <= 0) {
        res.status(400).json({ success: false, message: "Valid Product ID and positive quantity are required" });
        return;
    }
    const result = await inventory_service_1.InventoryService.addStock({
        productId,
        quantity: parseInt(quantity, 10),
        reason: reason || "Purchase Order Receipt",
        createdById,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Stock added successfully",
        data: result,
    });
});
/**
 * Handle POST /inventory/remove-stock
 */
exports.removeStock = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { productId, quantity, reason } = req.body;
    const createdById = req.user.id;
    if (!productId || !quantity || quantity <= 0) {
        res.status(400).json({ success: false, message: "Valid Product ID and positive quantity are required" });
        return;
    }
    const result = await inventory_service_1.InventoryService.removeStock({
        productId,
        quantity: parseInt(quantity, 10),
        reason: reason || "Stock adjustment (Damage/Loss)",
        createdById,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Stock removed successfully",
        data: result,
    });
});
/**
 * Handle GET /inventory/movements
 */
exports.getMovements = (0, catch_async_1.catchAsync)(async (req, res) => {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "10", 10);
    const productId = req.query.productId;
    const type = req.query.type;
    const result = await inventory_service_1.InventoryService.getMovements({
        page,
        limit,
        productId,
        type,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Stock movements fetched successfully",
        data: result,
    });
});
//# sourceMappingURL=inventory.controller.js.map