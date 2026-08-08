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
                role: input.role,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map