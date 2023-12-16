import mongoose from "mongoose";
import { Product } from "puppeteer";
import ProductModel, { ProductType } from "./types";
const { Schema } = mongoose;
export default async function database(products: ProductType[]) {
  await mongoose.connect(
    "mongodb+srv://ahmedelgafy50:nbJlCfRiJ2LAVH6m@cluster0.tk7nrwr.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "e-commerce",
    }
  );
  await ProductModel.deleteMany({});
  await ProductModel.insertMany(products);
  await mongoose.connection.close();
}
// database();
