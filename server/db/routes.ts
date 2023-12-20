import ProductModel from "./types";
import { Request, Response } from "express";
import { db } from "./connectingTomo";
db;

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({}).limit(10).select("-images");
    res.send(data);
  } catch {
    res.send("sorry it is no data");
  }
  console.log("finished");
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({ _id: req.params.id });
    res.send(data[0].images[0].link);
  } catch {
    res.send("sorry don't have this Id");
  }
  console.log("finished");
};

export const notFound = async (req: Request, res: Response) => {
  res.status(404).send("sorry not Found");
};
