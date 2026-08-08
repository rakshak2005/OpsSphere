"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.addFollowUpNote = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
const customer_service_1 = require("../services/customer.service");
const prisma_1 = __importDefault(require("../lib/prisma"));
const api_response_1 = require("../utils/api-response");
const catch_async_1 = require("../utils/catch-async");
/**
 * Get all customers with search, status filters, and pagination.
 */
exports.getAllCustomers = (0, catch_async_1.catchAsync)(async (req, res) => {
    const page = parseInt(req.query.page || "1", 10);
    const limit = parseInt(req.query.limit || "10", 10);
    const search = req.query.search;
    const status = req.query.status;
    const result = await customer_service_1.CustomerService.getAllCustomers({
        page,
        limit,
        search,
        status,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Customers fetched successfully",
        data: result,
    });
});
/**
 * Get customer details by ID.
 */
exports.getCustomerById = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const customer = await customer_service_1.CustomerService.getCustomerById(id);
    if (!customer) {
        res.status(404).json({ success: false, message: "Customer not found" });
        return;
    }
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Customer fetched successfully",
        data: customer,
    });
});
/**
 * Add a new customer.
 */
exports.createCustomer = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { customerName, mobile, email, businessName, gstNumber, customerType, address, status, followUpDate, notes, } = req.body;
    const duplicate = await prisma_1.default?.customer.findUnique({ where: { email } });
    if (duplicate) {
        res.status(409).json({ success: false, message: "Email already registered" });
        return;
    }
    const customer = await customer_service_1.CustomerService.createCustomer({
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
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 201,
        message: "Customer created successfully",
        data: customer,
    });
});
/**
 * Update customer details.
 */
exports.updateCustomer = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (data.followUpDate) {
        data.followUpDate = new Date(data.followUpDate);
    }
    const updatedCustomer = await customer_service_1.CustomerService.updateCustomer(id, data);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Customer updated successfully",
        data: updatedCustomer,
    });
});
/**
 * Add a follow-up note to a customer.
 */
exports.addFollowUpNote = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const { note } = req.body;
    if (!note || note.trim() === "") {
        res.status(400).json({ success: false, message: "Note content is required" });
        return;
    }
    const customer = await customer_service_1.CustomerService.getCustomerById(id);
    if (!customer) {
        res.status(404).json({ success: false, message: "Customer not found" });
        return;
    }
    const timestamp = new Date().toLocaleString();
    const updatedNotes = customer.notes
        ? `${customer.notes}\n[${timestamp}]: ${note}`
        : `[${timestamp}]: ${note}`;
    const updatedCustomer = await customer_service_1.CustomerService.updateCustomer(id, {
        notes: updatedNotes,
    });
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Follow-up note added successfully",
        data: updatedCustomer,
    });
});
/**
 * Soft delete customer.
 */
exports.deleteCustomer = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await customer_service_1.CustomerService.softDeleteCustomer(id);
    (0, api_response_1.sendResponse)({
        res,
        statusCode: 200,
        message: "Customer soft-deleted successfully",
    });
});
//# sourceMappingURL=customer.controller.js.map