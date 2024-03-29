import ProductModel from "./types";
import { Request, Response } from "express";
import { db } from "./connectingTomo";
try {
  db;
} catch {
  console.log("Database Error");
}

export const getAllProducts = async (req: Request, res: Response) => {
  res.type("json");
  try {
    const data = await ProductModel.find({}).select("-images");
    res.send(data);
  } catch {
    res.send("sorry it is no data");
  }
  console.log("finished");
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({ _id: req.params.id }).select(
      "-images"
    );
    res.type("json");
    res.send(data[0]);
  } catch {
    res.send("sorry don't have this Id");
  }
  console.log("finished");
};
export const getProductByTag = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.find({})
      .where("categories")
      .in([req.params.tag])
      .select("-images");
    res.type("json");
    res.send(data);
  } catch {
    res.send("sorry don't have this Id");
  }
  console.log("finished");
};
export const getAllImage2 = async (req: Request, res: Response) => {
  try {
    const fromDataBase = await ProductModel.find({ _id: req.params.id }).select(
      "images"
    );
    const size = fromDataBase[0].images.length;
    const imageIndex = Number(req.params.imageNumber) % size;
    res.set({
      "Content-Type": fromDataBase[0].images[imageIndex].contentType,
    });

    res.send(fromDataBase[0].images[imageIndex].data);
  } catch (err) {
    res.send("sorry don't have these images");
    console.log(err);
  }
};
export const getOneImage = async (req: Request, res: Response) => {
  try {
    const fromDataBase = await ProductModel.find({
      _id: req.params.id,
    }).select("images");
    let images: string[] = [];
    // res.type("png");
    res.setHeader("content-type", "text/plain");
    const index = Number(req.params.index);
    const size = fromDataBase[0].images.length;
    const imageSrc =
      "data:image/jpg;base64," +
      fromDataBase[0].images[index % size].data.toString("base64");

    res.send(JSON.stringify(imageSrc));
  } catch (err) {
    res.send("sorry don't have these images");
    console.log(err);
  }
};
export const getAllImage = async (req: Request, res: Response) => {
  try {
    const fromDataBase = await ProductModel.find({
      _id: req.params.id,
    }).select("images");
    let images: string[] = [];
    res.type("json");
    for (let i of fromDataBase[0].images) {
      images.push("data:image/jpg;base64," + i.data.toString("base64"));
    }

    res.send(JSON.stringify(images));
  } catch (err) {
    res.send("sorry don't have these images");
    console.log(err);
  }
};

export const notFound = async (req: Request, res: Response) => {
  res.status(404).send("sorry not Found");
};
