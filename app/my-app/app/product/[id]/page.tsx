"use client";
import { getProductById } from "@/app/api/getAllProduct";
import { ProductType } from "@/app/typs/types";
import { rejects } from "assert";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setLoading] = useState(true);
  // const product: ProductType = await getProductById(params.id);
  const [images, setImage] = useState<string>("");
  console.log(params.id);
  const optionalImages = () => {
    const images: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      images.push(
        <li
          className="w-[30%]"
          onClick={(e) =>
            setImage(
              `http://localhost:8000/product/${product?._id}/images/${i}`
            )
          }
          key={product?._id}
        >
          <img
            src={`http://localhost:8000/product/${product?._id}/images/${i}`}
            alt={product?.name || ""}
          />
        </li>
      );
    }
    return images;
  };
  useEffect(() => {
    console.log("hi");
    fetch("http://localhost:8000/product/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((rejects) => console.log(rejects));
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>No profile data</p>;
  return (
    <>
      <div className="flex flex-wrap p-10 items-start justify-center ">
        <div className="w-[100%] md:w-80">
          <img
            src={
              images || `http://localhost:8000/product/${product._id}/images/2`
            }
            alt={product.name || ""}
          />
          <ul className="flex pt-2 gap-3 items-center justify-between">
            {optionalImages()}
          </ul>
        </div>
        <div className="md:px-10 flex flex-col gap-2 w-[100%] md:w-[50%] ">
          <h1 className="border-2 font-bold  text-4xl">{product.name}</h1>
          <ul className="list-none">
            {product.shortDisc?.map((ele) => {
              return (
                <>
                  <li className="font-bold">
                    {ele.name}
                    <span className="font-thin">{ele.about}</span>
                  </li>
                </>
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
