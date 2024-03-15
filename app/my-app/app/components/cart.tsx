"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  CartProduct,
  removeFromCartById,
} from "../store/reducers/shoppingCart";
import { setShowCart } from "../store/reducers/showCart";
import CardImage from "./CardImage";
import Link from "next/link";
import removeEGP from "./removerEGP";
interface CartItemsProps {
  productCart: CartProduct;
}
const CartItem = ({ productCart }: CartItemsProps) => {
  const dispatch = useDispatch();
  console.log(productCart._id);
  return (
    <>
      <div className="flex gap-2  justify-between" key={productCart._id}>
        <div className="w-[30%] h-[4rem]">
          <CardImage id={productCart._id} />
        </div>
        <div className="w-[60%] relative">
          <h1
            title={productCart.name || ""}
            className="text-white truncate font-bold"
          >
            {productCart.name}
          </h1>
          <h1 className="absolute bottom-0 right-0">
            {removeEGP(productCart.price || "0") * Number(productCart.count) +
              " EGP"}
          </h1>
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

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.value);
  const showCart = useSelector((state: RootState) => state.showCart.value);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div
      className={`${
        !showCart && "opacity-0 right-[-100%]"
      } transition-all ease-in-out duration-500 fixed 
      flex gap-3 p-4 flex-col top-0 scrollable-div
      overflow-scroll right-0 z-50 h-screen md:w-[20%] w-[50%] bg-green-800`}
    >
      <div className="flex justify-end">
        <img
          src="../../close.svg"
          onClick={() =>
            showCart
              ? dispatch(setShowCart(false))
              : dispatch(setShowCart(true))
          }
          className="w-[15%] cursor-pointer"
          alt=""
        />
      </div>
      {cartItems.length
        ? cartItems.map((ele, index) => {
            total = total + removeEGP(ele.price || "");
            return (
              <div key={index}>
                <CartItem productCart={ele} />;
              </div>
            );
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
          <Link href={"/cart"}>
            <div
              className="mx-auto bg-green-500 w-40 h-10 flex items-center 
          justify-center rounded-lg cursor-pointer transition-colors
           duration-200 hover:text-black
          hover:bg-green-100"
            >
              Cart page
            </div>
          </Link>
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
