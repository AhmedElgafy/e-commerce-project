import {
  getAllImage,
  getAllProducts,
  getProductById,
  notFound,
} from "./db/routes";
import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());
app.get("/", getAllProducts);
app.get("/image", getAllImage);
app.get("/product/:id", getProductById);

app.use(notFound);
app.listen(PORT);
