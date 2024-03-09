"use client";
import React, { Suspense, memo } from "react";
import { ProductType } from "../typs/types";
import Card from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Skeleton from "react-loading-skeleton";
interface PropsTyp {
  allProducts: ProductType[];
}

const Body: React.FC<PropsTyp> = ({ allProducts }) => {
  const category = useSelector((state: RootState) => state.category.value);
  const search = useSelector((state: RootState) => state.search.value);
  return (
    <>
      <div
        className=" p-3 w-[100%] justify-center
        items-start md:w-[80%] flex flex-wrap gap-3
        col-span-8 md:col-span-5 "
      >
        {category &&
          allProducts
            .filter((ele) =>
              ele.categories?.find(
                (ele) =>
                  ele?.toLowerCase().includes(category.toLowerCase()) && ele
              )
            )
            .filter((ele) =>
              search
                ? ele.name?.toLowerCase().includes(search.toLowerCase())
                : ele
            )
            .map((ele, index) => (
              <Suspense
                key={index}
                //  fallback={<Skeleton />}
              >
                <Card product={ele} />
              </Suspense>
            ))}
        {search &&
          !category &&
          allProducts.map(
            (ele, index) =>
              ele.name?.toLowerCase()?.includes(search.toLowerCase()) && (
                <Suspense
                  key={index}
                  //  fallback={<Skeleton />}
                >
                  <Card product={ele} />
                </Suspense>
              )
          )}
        {!category &&
          !search &&
          allProducts.slice(0, 15).map((ele, index) => (
            <Suspense
              key={index}
              // fallback={<Skeleton width={150} height={150} />}
            >
              <Card product={ele} />
            </Suspense>
          ))}
      </div>
    </>
  );
};

export default Body;
