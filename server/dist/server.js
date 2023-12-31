"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./db/routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use(cors_1.default);
app.use(express_1.default.json());
app.get("/", routes_1.getAllProducts);
app.get("/product/:id/images/:imageNumber", routes_1.getAllImage);
app.get("/product/:id", routes_1.getProductById);
app.get("/products/:tag", routes_1.getProductByTag);
app.use(routes_1.notFound);
app.listen(PORT);
