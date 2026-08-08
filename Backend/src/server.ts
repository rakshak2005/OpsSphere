import dotenv from "dotenv";
import app from "./app";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Start the Express server
const server = app.listen(PORT, () => {
  console.log(`🚀 OpsSphere Server booting in [${NODE_ENV}] mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.error("💥 Unhandled Rejection! Shutting down gracefully...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  console.error("💥 Uncaught Exception! Shutting down gracefully...");
  console.error(err.name, err.message);
  process.exit(1);
});
