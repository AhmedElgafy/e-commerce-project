"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = mongoose_1.default.connect(process.env.DATABASE_URL || "", {
    dbName: "e-commerce",
});
exports.db.then((data) => {
    // console.log(process.env.DATABASE_URL);
    console.log("connected >>>");
});
