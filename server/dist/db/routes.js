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
exports.notFound = exports.getAllImage = exports.getOneImage = exports.getAllImage2 = exports.getProductByTag = exports.getProductById = exports.getAllProducts = void 0;
const types_1 = __importDefault(require("./types"));
const connectingTomo_1 = require("./connectingTomo");
try {
    connectingTomo_1.db;
}
catch (_a) {
    console.log("Database Error");
}
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.type("json");
    try {
        const data = yield types_1.default.find({}).select("-images");
        res.send(data);
    }
    catch (_b) {
        res.send("sorry it is no data");
    }
    console.log("finished");
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield types_1.default.find({ _id: req.params.id }).select("-images");
        res.type("json");
        res.send(data[0]);
    }
    catch (_c) {
        res.send("sorry don't have this Id");
    }
    console.log("finished");
});
exports.getProductById = getProductById;
const getProductByTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield types_1.default.find({})
            .where("categories")
            .in([req.params.tag])
            .select("-images");
        res.type("json");
        res.send(data);
    }
    catch (_d) {
        res.send("sorry don't have this Id");
    }
    console.log("finished");
});
exports.getProductByTag = getProductByTag;
const getAllImage2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fromDataBase = yield types_1.default.find({ _id: req.params.id }).select("images");
        const size = fromDataBase[0].images.length;
        const imageIndex = Number(req.params.imageNumber) % size;
        res.set({
            "Content-Type": fromDataBase[0].images[imageIndex].contentType,
        });
        res.send(fromDataBase[0].images[imageIndex].data);
    }
    catch (err) {
        res.send("sorry don't have these images");
        console.log(err);
    }
});
exports.getAllImage2 = getAllImage2;
const getOneImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fromDataBase = yield types_1.default.find({
            _id: req.params.id,
        }).select("images");
        let images = [];
        // res.type("png");
        res.setHeader("content-type", "text/plain");
        const index = Number(req.params.index);
        const size = fromDataBase[0].images.length;
        const imageSrc = "data:image/jpg;base64," +
            fromDataBase[0].images[index % size].data.toString("base64");
        res.send(JSON.stringify(imageSrc));
    }
    catch (err) {
        res.send("sorry don't have these images");
        console.log(err);
    }
});
exports.getOneImage = getOneImage;
const getAllImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fromDataBase = yield types_1.default.find({
            _id: req.params.id,
        }).select("images");
        let images = [];
        res.type("json");
        for (let i of fromDataBase[0].images) {
            images.push("data:image/jpg;base64," + i.data.toString("base64"));
        }
        res.send(JSON.stringify(images));
    }
    catch (err) {
        res.send("sorry don't have these images");
        console.log(err);
    }
});
exports.getAllImage = getAllImage;
const notFound = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).send("sorry not Found");
});
exports.notFound = notFound;
