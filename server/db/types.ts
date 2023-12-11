import mongoose, { Document, Schema } from "mongoose";

interface shortDescriptionType {
  name: string | null;
  about: string | null;
}
export interface ProductType {
  name: string | null;
  price: string | null;
  images: { contentType: string; data: BufferEncoding }[];
  categories: (string | null)[] | undefined;
  link: string | null;
  disc: shortDescriptionType[] | null;
}

interface ProductDocument extends ProductType, Document {}

export const ProductSchema = new Schema<ProductDocument>({
  name: String,
  price: String,
  link: String,
  images: {
    data: { type: Buffer, required: false },
    contentType: { type: String, required: false },
  },
  categories: [String],
  disc: [{ name: String, about: String }],
});
const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);
export default ProductModel;
