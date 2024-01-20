// import mongoose, { Document, Schema } from "mongoose";

export interface shortDescriptionType {
  name: string | null;
  about: string | null;
}
export interface ProductType {
  _id: string;
  name: string | null;
  price: string | null;
  // images: { contentType: string; data: Buffer; link: string }[];
  categories: (string | null)[] | undefined;
  link: string | null;
  shortDisc: shortDescriptionType[] | null;
  longDisc: { title: string | undefined; about: string | undefined } | null;
}
