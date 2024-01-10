import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(
  process.env.DATABASE_URL || "",
  // "mongodb+srv://ahmedelgafy50:nbJlCfRiJ2LAVH6m@cluster0.tk7nrwr.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "e-commerce",
  }
);

db.then((data) => console.log("connected >>>"));
