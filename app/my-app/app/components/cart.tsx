"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  CartProduct,
  removeFromCartById,
} from "../store/reducers/shoppingCart";
import { getProductOneImageById } from "../api/getAllProduct";
interface CartItemsProps {
  productCart: CartProduct;
}
const CartItem = ({ productCart }: CartItemsProps) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getProductOneImageById(productCart._id, "1").then((data) => setImage(data));
  }, [productCart]);
  return (
    <>
      <div className="flex gap-2 justify-between">
        <div className="w-[30%] ">
          <img src={image} className="" alt="" />
        </div>
        <div className="w-[60%] relative">
          <h1
            title={productCart.name || ""}
            className="text-white truncate font-bold"
          >
            {productCart.name}
          </h1>
          <h1 className="absolute bottom-0 right-0"> {productCart.price}</h1>
          <img
            src="../../delete.svg"
            className="absolute cursor-pointer bottom-0 w-[15%]"
            alt=""
            onClick={() => dispatch(removeFromCartById(productCart._id))}
          />
        </div>
      </div>
    </>
  );
};
function removeEGP(text: string) {
  // Use the replace function to replace "EGP" with an empty string
  const textWithoutEGP = text.replace(/EGP/gi, ""); // 'gi' flag makes it case-insensitive

  return Number(textWithoutEGP);
}
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.value);
  const [hidCart, setHidCart] = useState<boolean>(false);
  let total = 0;
  return (
    <div
      className={`${
        hidCart && "hidden"
      } fixed flex gap-3 p-4 flex-col top-0 scrollable-div
     overflow-scroll right-0 h-screen md:w-[20%] w-[50%] bg-green-800`}
    >
      <div className="flex justify-end">
        <img
          src="../../close.svg"
          onClick={() => (hidCart ? setHidCart(false) : setHidCart(true))}
          className="w-[15%] cursor-pointer"
          alt=""
        />
      </div>
      {cartItems.length
        ? cartItems.map((ele) => {
            total = total + removeEGP(ele.price || "");
            return <CartItem productCart={ele} />;
          })
        : ""}
      {cartItems.length ? (
        <>
          <div className="bg-white h-[1px]"></div>
          <div className="flex justify-between">
            <h1>Total:</h1>
            <h1>
              {total}
              <span> EGP</span>
            </h1>
          </div>
        </>
      ) : (
        <div>
          <h1>No items in the cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
