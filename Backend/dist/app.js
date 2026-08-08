"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// Request logging middleware
app.use((0, morgan_1.default)("dev"));
// Enable Cross-Origin Resource Sharing
// Supports multiple origins: FRONTEND_URL can be comma-separated list
const allowedOrigins = config_1.config.frontendUrl
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, curl, Render health checks)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`CORS: Origin '${origin}' not allowed`), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
// Body parsing middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Cookie parsing middleware
app.use((0, cookie_parser_1.default)());
// Base health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "OpsSphere Backend Server is healthy and running.",
        timestamp: new Date().toISOString(),
    });
});
// Mount versioned API routes
app.use("/api/v1", routes_1.default);
// Global Error Handler Middleware
app.use((err, req, res, _next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let errors = err.errors || [];
    // Log programmer/server errors to console for system monitoring
    if (!err.isOperational) {
        console.error("🔥 SYSTEM ERROR:", err);
    }
    // Formatting rules for client responses
    if (config_1.config.nodeEnv === "production") {
        // Hide unexpected programmer stack traces from customers in production
        if (!err.isOperational) {
            statusCode = 500;
            message = "Something went wrong on the server!";
            errors = [];
        }
        res.status(statusCode).json({
            success: false,
            message,
            errors,
        });
    }
    else {
        // In development, supply call stack details to aid debug operations
        res.status(statusCode).json({
            success: false,
            message,
            errors,
            stack: err.stack,
        });
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map