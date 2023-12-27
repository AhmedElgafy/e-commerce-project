import { db } from "./connectingTomo";
import { ObjectId } from "mongodb";
import ProductModel from "./types";
import { Query } from "mongoose";
try {
  db;
} catch {
  console.log("connection error");
}
async function main() {
  const query = await ProductModel.find({})
    .where("categories")
    .in(["Case"])
    .select("-images");
  console.log(query);
}
main();
