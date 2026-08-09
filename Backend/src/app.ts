import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { config } from "./config";
import { AppError } from "./utils/app-error";
import apiRouter from "./routes";

const app: Application = express();


app.use(morgan("dev"));



const allowedOrigins = config.frontendUrl
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      
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


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());


app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "OpsSphere Backend Server is healthy and running.",
    timestamp: new Date().toISOString(),
  });
});


app.use("/api/v1", apiRouter);


app.use((err: AppError, req: Request, res: Response, _next: NextFunction) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  
  if (!err.isOperational) {
    console.error("🔥 SYSTEM ERROR:", err);
  }

  
  if (config.nodeEnv === "production") {
    
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
    
    res.status(statusCode).json({
      success: false,
      message,
      errors,
      stack: err.stack,
    });
  }
});

export default app;

