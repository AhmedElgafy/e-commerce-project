import {
  getAllImage,
  getAllProducts,
  getProductById,
  getProductByTag,
  notFound,
} from "./db/routes";
import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());
app.get("/", getAllProducts);
app.get("/product/:id/images/:imageNumber", getAllImage);
app.get("/product/:id", getProductById);
app.get("/products/:tag", getProductByTag);

app.use(notFound);
app.listen(PORT);
