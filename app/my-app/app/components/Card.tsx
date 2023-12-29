// ProductCard.tsx
import React from "react";
import { ProductType } from "../typs/types";
interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src=""
        alt={product.name || undefined}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-green-600">${Number(product.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
