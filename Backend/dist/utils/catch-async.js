"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
/**
 * Wraps an asynchronous Express request handler to automatically catch
 * any errors and forward them to the global error handling middleware.
 */
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.catchAsync = catchAsync;
//# sourceMappingURL=catch-async.js.map