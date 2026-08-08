"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelChallan = exports.confirmChallan = exports.createDraftChallan = exports.getChallanById = exports.getAllChallans = void 0;
const challan_service_1 = require("../services/challan.service");
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Get all challans with pagination, status filters, and customer filters.
 */
exports.getAllChallans = (0, catch_async_1.catchAsync)(async (req, res) => {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "10", 10);
    const status = req.query.status;
    const customerId = req.query.customerId;
    const result = await challan_service_1.ChallanService.getAllChallans({
        page,
        limit,
        status,
        customerId,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Challans fetched successfully",
        data: result,
    });
});
/**
 * Get details of a single challan by ID.
 */
exports.getChallanById = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const challan = await challan_service_1.ChallanService.getChallanById(id);
    if (!challan) {
        res.status(404).json({ success: false, message: "Challan not found" });
        return;
    }
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Challan fetched successfully",
        data: challan,
    });
});
/**
 * Create a new Challan in DRAFT status.
 */
exports.createDraftChallan = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { customerId, items } = req.body;
    const createdById = req.user.id;
    const result = await challan_service_1.ChallanService.createDraftChallan({
        customerId,
        createdById,
        items,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 201,
        message: "Draft Challan created successfully",
        data: result,
    });
});
/**
 * Confirm a Challan (transitions status from DRAFT to CONFIRMED, reducing stock).
 */
exports.confirmChallan = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const result = await challan_service_1.ChallanService.confirmChallan(id, userId);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Challan confirmed successfully. Stock updated.",
        data: result,
    });
});
/**
 * Cancel a Challan (reverses stock levels if previously confirmed).
 */
exports.cancelChallan = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const result = await challan_service_1.ChallanService.cancelChallan(id, userId);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Challan cancelled successfully. Stock reverted if active.",
        data: result,
    });
});
//# sourceMappingURL=challan.controller.js.map