import dotenv from "dotenv";
import app from "./app";


dotenv.config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";


const server = app.listen(PORT, () => {
  console.log(`🚀 OpsSphere Server booting in [${NODE_ENV}] mode on port ${PORT}`);
});


process.on("unhandledRejection", (err: Error) => {
  console.error("💥 Unhandled Rejection! Shutting down gracefully...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


process.on("uncaughtException", (err: Error) => {
  console.error("💥 Uncaught Exception! Shutting down gracefully...");
  console.error(err.name, err.message);
  process.exit(1);
});
