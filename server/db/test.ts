import { db } from "./connectingTomo";
// import { ObjectId } from "mongodb";
import { Request, Response } from "express";
import "dotenv/config";
console.log(process.env.PORT);

import ProductModel from "./types";
// // import { Query } from "mongoose";
// try {
//   db;
// } catch {
//   console.log("connection error");
// }
// // async function main() {
// //   const query = await ProductModel.find({})
// //     .where("categories")
// //     .in(["Case"])
// //     .select("-images");
// //   console.log(query);
// // }
// export async function testing(req: Request, res: Response) {
//   const fromDataBase = await ProductModel.find({
//     _id: "657c60b02b70417531a8b6c3",
//   }).select("images");
//   const b64 = Buffer.from(fromDataBase[0].images[0].data).toString("base64");
//   const image = `data:image/png;base64,${b64}`;

//   // res.set({
//   //   "Content-Type": fromDataBase[0].images[0].contentType,
//   // });
//   res.send(image);
// }
// main();
