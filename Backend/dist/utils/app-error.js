"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
/**
 * Custom Error class for operational errors.
 * Operational errors are expected errors (e.g., validation failed, record not found).
 */
class AppError extends Error {
    statusCode;
    isOperational;
    errors;
    constructor(message, statusCode, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.errors = errors;
        // Capture the call stack and omit this constructor from it
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app-error.js.map