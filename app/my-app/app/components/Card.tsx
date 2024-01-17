"use client";
import { ProductType } from "../typs/types";
import Link from "next/link";
import { getProductOneImageById } from "../api/getAllProduct";
import { Suspense, useEffect, useState } from "react";
interface ProductCardProps {
  product: ProductType;
}

const ProductCard = async ({ product }: ProductCardProps) => {
  // const images: string[] = await getProductImagesById(product._id);
  const [image, setImage] = useState("");
  useEffect(() => {
    getProductOneImageById(product._id, "1").then((data) => setImage(data));
  }, []);

  return (
    <>
      <div className="bg-white shadow-md w-[80%] md:w-[20%] sm:w-[40%] rounded-md overflow-hidden">
        <Link href={`/product/${product._id}`} scroll={false}>
          <img
            src={image}
            // alt={image || undefined}
            // loading="lazy"
            className="w-full"
          />

          <div className="p-4">
            <h2 className="text-xl truncate text-black font-semibold mb-2">
              {/* {add3Dots(product.name || "", 15)} */}
              {product.name}
            </h2>
            <p className="text-green-600">{product.price}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
