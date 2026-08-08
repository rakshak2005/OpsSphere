import { PrismaClient } from "../generated/prisma";

// Define prisma client singleton
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

export default prisma;
