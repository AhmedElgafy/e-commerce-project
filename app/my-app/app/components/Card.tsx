// ProductCard.tsx
import React from "react";
import { ProductType } from "../typs/types";
import Link from "next/link";
import { getProductImagesById } from "../api/getAllProduct";
interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = async ({ product }) => {
  const images: string[] = await getProductImagesById(product._id);

  return (
    <>
      <div className="bg-white shadow-md w-[80%] md:w-[20%] sm:w-[40%] rounded-md overflow-hidden">
        <Link href={`/product/${product._id}`} scroll={false}>
          <img
            src={images[1 % images.length]}
            alt={product.name || undefined}
            loading="lazy"
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
