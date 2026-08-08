"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Ensure critical variables are defined
const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET"];
for (const envVar of REQUIRED_ENV) {
    if (!process.env[envVar]) {
        throw new Error(`CRITICAL: Environment variable '${envVar}' is missing!`);
    }
}
exports.config = {
    port: parseInt(process.env.PORT || "5000", 10),
    nodeEnv: process.env.NODE_ENV || "development",
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
};
//# sourceMappingURL=index.js.map