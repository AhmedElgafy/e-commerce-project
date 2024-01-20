"use client";
import { ProductType } from "../typs/types";
import Link from "next/link";
import { getProductOneImageById } from "../api/getAllProduct";
import { useEffect, useState } from "react";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = async ({ product }: ProductCardProps) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    getProductOneImageById(product._id, "1").then((data) => setImage(data));
  }, [product]);

  return (
    <>
      <div
        className="bg-white shadow-md w-[80%] md:w-[20%] hover:opacity-50 cursor-pointer
      sm:w-[40%] rounded-md overflow-hidden"
      >
        <Link href={`/product/${product._id}`} scroll={false}>
          <img src={image} loading="lazy" className="w-full" />
          <div className="p-4">
            <h2 className="text-xl truncate text-black font-semibold mb-2">
              {product.name}
            </h2>
            <div className="flex justify-between">
              <p className="text-green-600">{product.price}</p>
              <img className="w-[10%]" src="../card.svg" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
