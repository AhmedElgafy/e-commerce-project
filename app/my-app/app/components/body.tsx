"use client";
import React, { Suspense, useState } from "react";
import { ProductType } from "../typs/types";
import Card from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../store";
interface PropsTyp {
  allProducts: ProductType[];
}

const Body: React.FC<PropsTyp> = ({ allProducts }) => {
  const category = useSelector((state: RootState) => state.category.value);
  return (
    <>
      <div
        className="border-2 p-3 w-[100%] justify-center
         items-start md:w-[80%] flex flex-wrap gap-3
        col-span-8 md:col-span-5 "
      >
        {category
          ? allProducts
              .filter((ele) =>
                ele.categories?.find((ele) => {
                  console.log("ele: " + ele);
                  console.log("category: " + category);
                  return ele?.toLowerCase().includes(category.toLowerCase());
                })
              )
              .map((ele, index) => (
                <Suspense key={index} fallback={<p>Loading feed...</p>}>
                  <Card product={ele} />
                </Suspense>
              ))
          : allProducts.slice(0, 20).map((ele, index) => (
              <Suspense key={index} fallback={<p>Loading feed...</p>}>
                <Card product={ele} />
              </Suspense>
            ))}
      </div>
    </>
  );
};

export default Body;
