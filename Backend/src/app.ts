import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "./config";
import { AppError } from "./utils/app-error";
import apiRouter from "./routes";

const app: Application = express();

// Request logging middleware
app.use(morgan("dev"));

// Enable Cross-Origin Resource Sharing
// Supports multiple origins: FRONTEND_URL can be comma-separated list
const allowedOrigins = config.frontendUrl
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Render health checks)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: Origin '${origin}' not allowed`), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parsing middleware
app.use(cookieParser());

// Base health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "OpsSphere Backend Server is healthy and running.",
    timestamp: new Date().toISOString(),
  });
});

// Mount versioned API routes
app.use("/api/v1", apiRouter);

// Global Error Handler Middleware
app.use((err: AppError, req: Request, res: Response, _next: NextFunction) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  // Log programmer/server errors to console for system monitoring
  if (!err.isOperational) {
    console.error("🔥 SYSTEM ERROR:", err);
  }

  // Formatting rules for client responses
  if (config.nodeEnv === "production") {
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
  } else {
    // In development, supply call stack details to aid debug operations
    res.status(statusCode).json({
      success: false,
      message,
      errors,
      stack: err.stack,
    });
  }
});

export default app;

