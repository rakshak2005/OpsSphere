"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
// Load environment variables from .env file
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
// Start the Express server
const server = app_1.default.listen(PORT, () => {
    console.log(`🚀 OpsSphere Server booting in [${NODE_ENV}] mode on port ${PORT}`);
});
// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error("💥 Unhandled Rejection! Shutting down gracefully...");
    console.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error("💥 Uncaught Exception! Shutting down gracefully...");
    console.error(err.name, err.message);
    process.exit(1);
});
//# sourceMappingURL=server.js.map