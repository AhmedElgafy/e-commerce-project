import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(process.env.DATABASE_URL || "", {
  dbName: "e-commerce",
});

db.then((data) => {
  // console.log(process.env.DATABASE_URL);
  console.log("connected >>>");
});
