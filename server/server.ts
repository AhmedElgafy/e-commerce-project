import {
  getAllImage,
  getAllProducts,
  getOneImage,
  getProductById,
  getProductByTag,
  notFound,
} from "./db/routes";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", getAllProducts);
app.get("/product/:id/images", getAllImage);
app.get("/product/:id/images/:index", getOneImage);
app.get("/product/:id", getProductById);
app.get("/products/:tag", getProductByTag);
// app.get("/test", getAllImage2);
app.use(notFound);

//app.listen(process.env.PORT || 8000);
