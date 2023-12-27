"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.getAllImage = exports.getProductById = exports.getAllProducts = void 0;
const types_1 = __importDefault(require("./types"));
const connectingTomo_1 = require("./connectingTomo");
connectingTomo_1.db;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield types_1.default.find({}).select("-images");
        res.send(data);
    }
    catch (_a) {
        res.send("sorry it is no data");
    }
    console.log("finished");
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield types_1.default.find({ _id: req.params.id }).select("-images");
        res.set({});
        res.send(data);
    }
    catch (_b) {
        res.send("sorry don't have this Id");
    }
    console.log("finished");
});
exports.getProductById = getProductById;
const getAllImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fromDataBase = yield types_1.default.find({}).select("images").limit(1);
        res.set({ "Content-Type": fromDataBase[0].images[0].contentType });
        res.send(fromDataBase[0].images[0].data);
    }
    catch (err) {
        console.log(err);
        res.send("sorry don't have these images");
    }
});
exports.getAllImage = getAllImage;
const notFound = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).send("sorry not Found");
});
exports.notFound = notFound;
