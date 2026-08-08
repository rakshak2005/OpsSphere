import dotenv from "dotenv";

dotenv.config();

// Ensure critical variables are defined
const REQUIRED_ENV = ["DATABASE_URL", "JWT_SECRET"];

for (const envVar of REQUIRED_ENV) {
  if (!process.env[envVar]) {
    throw new Error(`CRITICAL: Environment variable '${envVar}' is missing!`);
  }
}

export const config = {
  port: parseInt(process.env.PORT || "5000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
} as const;
