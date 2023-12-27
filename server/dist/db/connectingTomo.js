"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.db = mongoose_1.default.connect("mongodb+srv://ahmedelgafy50:nbJlCfRiJ2LAVH6m@cluster0.tk7nrwr.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "e-commerce",
});
exports.db.then((data) => console.log("connected >>>"));
