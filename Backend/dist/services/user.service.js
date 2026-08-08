"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../lib/prisma"));
class UserService {
    /**
     * Look up a user by email.
     * Internal method used during registration checks and login authentication.
     */
    static async getUserByEmail(email) {
        return prisma_1.default.user.findUnique({
            where: { email },
        });
    }
    /**
     * Look up a user by secret code.
     */
    static async getUserBySecretCode(secretCode) {
        return prisma_1.default.user.findUnique({
            where: { secretCode },
        });
    }
    /**
     * Look up a user by ID, returning details without the password hash.
     */
    static async getUserById(id) {
        return prisma_1.default.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
                secretCode: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    /**
     * Hash password and insert user into the database.
     */
    static async createUser(input) {
        // Generate bcrypt salt and hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(input.password, saltRounds);
        // Save user record
        const user = await prisma_1.default.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: hashedPassword,
                role: input.role, // Cast to any to align with generated prisma types
                secretCode: input.secretCode,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
                secretCode: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return user;
    }
    /**
     * Update password for a particular user.
     */
    static async updatePassword(id, newPassword) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(newPassword, saltRounds);
        return prisma_1.default.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
    }
    /**
     * Fetch all users for Admin management.
     */
    static async getAllUsers() {
        return prisma_1.default.user.findMany({
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
                secretCode: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    /**
     * Save a record in the activities audit log.
     */
    static async logActivity(userId, action, details) {
        return prisma_1.default.userActivity.create({
            data: {
                userId,
                action,
                details,
            },
        });
    }
    /**
     * Fetch audit activity logs for ADMIN access.
     */
    static async getActivityLogs() {
        return prisma_1.default.userActivity.findMany({
            orderBy: { createdAt: "desc" },
            take: 50,
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        role: true,
                    },
                },
            },
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map