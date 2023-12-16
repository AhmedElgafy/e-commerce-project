import mongoose, { Document, Schema } from "mongoose";

export interface shortDescriptionType {
  name: string | null;
  about: string | null;
}
export interface ProductType {
  name: string | null;
  price: string | null;
  images: { contentType: string; data: Buffer; link: string }[] | null;
  categories: (string | null)[] | undefined;
  link: string | null;
  shortDisc: shortDescriptionType[] | null;
  longDisc: { title: string | undefined; about: string | undefined } | null;
}

interface ProductDocument extends ProductType, Document {}

export const ProductSchema = new Schema<ProductDocument>({
  name: String,
  price: String,
  link: String,
  images: [
    {
      data: { type: Buffer, required: false },
      contentType: { type: String, required: false },
      link: { type: String, required: false },
    },
  ],
  categories: [String],
  shortDisc: [{ name: String, about: String }],
  longDisc: { title: String, about: String },
});
const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);
export default ProductModel;
