"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = sendResponse;
/**
 * Standardized success response utility.
 */
function sendResponse({ res, statusCode, message, data, }) {
    return res.status(statusCode).json({
        success: true,
        message,
        data: data ?? null,
    });
}
//# sourceMappingURL=api-response.js.map