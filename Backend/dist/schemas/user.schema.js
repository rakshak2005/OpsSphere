"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = exports.Role = void 0;
const zod_1 = require("zod");
// Match the Role enum from our Prisma client
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["SALES"] = "SALES";
    Role["WAREHOUSE"] = "WAREHOUSE";
    Role["ACCOUNTS"] = "ACCOUNTS";
})(Role || (exports.Role = Role = {}));
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required",
        })
            .trim()
            .min(2, "Name must be at least 2 characters"),
        email: zod_1.z
            .string({
            required_error: "Email is required",
        })
            .trim()
            .email("Invalid email address"),
        password: zod_1.z
            .string({
            required_error: "Password is required",
        })
            .min(8, "Password must be at least 8 characters"),
        role: zod_1.z
            .nativeEnum(Role, {
            required_error: "Role is required",
            invalid_type_error: "Invalid role value",
        })
            .default(Role.SALES),
    }),
});
exports.loginUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: "Email is required",
        })
            .trim()
            .email("Invalid email address"),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
//# sourceMappingURL=user.schema.js.map