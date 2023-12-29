import React from "react";
import { ProductType } from "../typs/types";
import { getAllProduct } from "../api/getAllProduct";
import Card from "./Card";
interface PropsTyp {
  allProducts: ProductType[];
}
const Body: React.FC<PropsTyp> = ({ allProducts }) => {
  return (
    <>
      <div className="border-2  h-[90vh] col-span-8 md:col-span-5 ">
        {allProducts.map((ele) => (
          <Card product={ele} />
        ))}
      </div>
    </>
  );
};

export default Body;
