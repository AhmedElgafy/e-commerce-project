import mongoose, { Collection } from "mongoose";
import ProductModel, { ProductType } from "./types";
const { Schema } = mongoose;
async function main() {
  await mongoose.connect(
    "mongodb+srv://ahmedelgafy50:nbJlCfRiJ2LAVH6m@cluster0.tk7nrwr.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "e-commerce",
    }
  );

  //create a small insert.
  const insertProduct: ProductType = {
    name: "cpu",
    categories: ["mohameasdg", "asdgaeadg"],
    disc: [
      { name: "asdgasdg", about: "asdgasd" },
      { name: "asdgasdg2", about: "asdgasd1" },
    ],
    images: ["asdgasdg"],
    link: "adsgasdgasdg",
    price: "15",
  };
  const product = new ProductModel(insertProduct);

  // await ProductModel.insertMany(insertProduct);
  // await ProductModel.deleteMany();
  await product.save();
  await mongoose.connection.close();
}
main();
