import mongoose from "mongoose";
import ProductModel from "./types";

export const db = mongoose.connect(
  "mongodb+srv://ahmedelgafy50:nbJlCfRiJ2LAVH6m@cluster0.tk7nrwr.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "e-commerce",
  }
);
db.then((data) => console.log("connected >>>"));
