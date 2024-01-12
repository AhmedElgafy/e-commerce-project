"use client";
import { getProductById } from "@/app/api/getAllProduct";
import { ProductType } from "@/app/typs/types";
import { rejects } from "assert";
import { Island_Moments, Port_Lligat_Sans } from "next/font/google";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setLoading] = useState(true);
  // const product: ProductType = await getProductById(params.id);
  const [images, setImages] = useState<string[]>([""]);
  const [image, setImage] = useState<string>("");
  console.log(params.id);

  useEffect(() => {
    console.log("hi");
    fetch("http://192.168.100.20:8000/product/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((rejects) => console.log(rejects));
    fetch("http://192.168.100.20:8000/product/" + params.id + "/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((rejects) => console.log(rejects));
    setLoading(false);
    console.log(images);
  }, []);
  // return <>{product?._id}</>;
  // return <>hello</>;
  if (isLoading) return <p>Loading...</p>;
  if (!product) return <>sorry no data</>;
  if (product)
    return (
      <>
        <div className="flex flex-wrap p-10 items-start justify-center ">
          <div className="w-[100%] md:w-80">
            <img src={image || images[0]} alt={product.name || ""} />
            <ul className="flex pt-2 gap-3 items-center justify-between">
              {/* {optionalImages()} */}
              {images.map((ele) => (
                <li className="w-[30%]">
                  <img src={ele} onClick={() => setImage(ele)} />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:px-10 flex flex-col gap-2 w-[100%] md:w-[50%] ">
            <h1 className="border-2 font-bold  text-4xl">{product.name}</h1>
            <ul className="list-none">
              {product.shortDisc?.map((ele, index) => {
                return (
                  <li className="font-bold" key={index}>
                    {ele.name}
                    <span className="font-thin">{ele.about}</span>
                  </li>
                );
              })}
              <p className="text-2xl font-bold">{product.price}</p>
            </ul>
          </div>
        </div>
        <div>
          <h1>{product.longDisc?.title}</h1>
          <p>{product.longDisc?.about}</p>
          <p>{product.link}</p>
        </div>
      </>
    );
}
