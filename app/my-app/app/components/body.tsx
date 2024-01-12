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
      <div
        className="border-2 p-3 w-[100%] justify-center
         items-start md:w-[80%] flex flex-wrap gap-3
        col-span-8 md:col-span-5 "
      >
        {allProducts.slice(0, 12).map((ele) => (
          <Card product={ele} />
        ))}
      </div>
    </>
  );
};

export default Body;
