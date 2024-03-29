"use client";
import { ProductType } from "@/app/typs/types";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import ImagesGallery from "./ImagesGallery";
export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductType>();
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER + "/product/" + params.id)
      // getProductById(params.id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((rejects) => console.log(rejects));
  }, []);
  if (product)
    return (
      <>
        <div className="flex flex-wrap p-10 items-start justify-center">
          <ImagesGallery name={product.name || ""} id={product._id} />
          <div className="md:px-10 flex flex-col gap-2 w-[100%] md:w-[50%] ">
            <h1 className=" font-bold  text-4xl">{product.name}</h1>
            <ul className="list-none">
              {product.shortDisc?.map((ele, index) => {
                return (
                  <li className="font-bold" key={index}>
                    {ele.name}
                    <span className="font-thin">{ele.about}</span>
                  </li>
                );
              })}
              <ul className="flex gap-2">
                <span className="font-bold">Categories:</span>
                {product.categories?.map((ele, index) => (
                  <li key={index}>{ele}</li>
                ))}
              </ul>
              <p className="text-2xl font-bold">{product.price}</p>
            </ul>
          </div>
        </div>
        <div className="px-10">
          <h1 className="text-lg font-bold">{product.longDisc?.title}</h1>
          <p>{product.longDisc?.about}</p>
          {/* <p>{product.link}</p> */}
        </div>
      </>
    );
}
