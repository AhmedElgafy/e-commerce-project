// ProductCard.tsx
import React from "react";
import { ProductType } from "../typs/types";
import Link from "next/link";
interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product);
  function add3Dots(string: string, limit: number) {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }

    return string;
  }
  return (
    <>
      <div className="bg-white shadow-md w-[80%] md:w-[20%] sm:w-[40%] rounded-md overflow-hidden">
        <Link href={`/product/${product._id}`} scroll={false}>
          <img
            src={`http://localhost:8000/product/${product._id}/images/2`}
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
