"use client";
import { ProductType } from "../typs/types";
import Link from "next/link";
import { getProductOneImageById } from "../api/getAllProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

import {
  CartProduct,
  addToTheCart,
  removeFromCartById,
} from "../store/reducers/shoppingCart";
import CardImage from "./CardImage";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = async ({ product }: ProductCardProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const x: CartProduct = {
    count: 0,
    _id: product._id,
    name: product.name,
    price: product.price,
  };
  const handelCartClick = () => {
    if (selected) {
      setSelected(false);
      dispatch(removeFromCartById(product._id));
    } else {
      dispatch(addToTheCart(x));
      setSelected(true);
    }
    console.log("clicked the card");
  };
  return (
    <>
      <div
        className="bg-[#008abb] shadow-md w-[80%] 
        md:w-[20%] sm:w-[40%] rounded-md overflow-hidden"
      >
        <Link href={`/product/${product._id}`} scroll={false} passHref>
          <CardImage id={product._id} />
        </Link>
        <div className="p-4 cursor-pointer">
          <Link href={`/product/${product._id}`} scroll={false} passHref>
            <h2
              className="text-xl truncate text-[#d4e7eb]
            cursor-pointer font-semibold mb-2"
              title={product.name || ""}
            >
              {product.name}
            </h2>
          </Link>
          <div className="flex justify-between">
            <p className="text-white">{product.price}</p>
            <div
              className={`${
                selected && "bg-green-400"
              } hover:bg-green-400 w-[15%] p-1 
               flex items-center rounded-lg`}
              onClick={handelCartClick}
            >
              <img
                className={`${
                  selected && "filter invert"
                }  hover:filter hover:invert  `}
                src="../card.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
