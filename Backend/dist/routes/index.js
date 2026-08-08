"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const customer_routes_1 = __importDefault(require("./customer.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const inventory_routes_1 = __importDefault(require("./inventory.routes"));
const challan_routes_1 = __importDefault(require("./challan.routes"));
const router = (0, express_1.Router)();
// Mount routes
router.use("/auth", auth_routes_1.default);
router.use("/users", user_routes_1.default);
router.use("/customers", customer_routes_1.default);
router.use("/products", product_routes_1.default);
router.use("/inventory", inventory_routes_1.default);
router.use("/challans", challan_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map