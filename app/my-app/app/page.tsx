import Image from "next/image";
import { Metadata } from "next";
import { getAllProduct, getProductById } from "./api/getAllProduct";
import DataShow from "./component/dataShow";
import { ProductType } from "./typs/types";

export const metadata: Metadata = {
  title: "Next.js",
};

export default async function Home() {
  const allProducts: ProductType[] = await getAllProduct();
  const product: ProductType[] = await getProductById(
    "657c60b02b70417531a8b6c3"
  );
  console.log(product);
  return (
    <>
      <div>
        {allProducts.map((ele: ProductType) => {
          return (
            <div>
              <h1>{ele.name}</h1>
              <div className="w-52">
                <img
                  src={`http://localhost:8000/product/${ele._id}/images/5`}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        {/* <h1>{b64}</h1>
        <img src={`data:${mimeType};base64,${b64}`} /> */}
        <DataShow></DataShow>
      </div>
    </>
  );
}
