"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import CardImage from "../components/CardImage";
import removeEGP from "../components/removerEGP";
import { useEffect, useState } from "react";
import { updateCountOfCartById } from "../store/reducers/shoppingCart";

interface CartItemProps {
  id: string;
  name: string;
  price: string;
  qty: number;
  // key: number;
}
const CartItem = ({ id, name, price, qty }: CartItemProps) => {
  // const [count, setCount] = useState(qty);

  const dispatch = useDispatch();
  return (
    <>
      <div
        // key={key}
        className="flex justify-between items-center border-b-2 h-28 overflow-hidden "
      >
        <div className="w-[10%]  ">
          <CardImage id={id} />
        </div>
        {/* <img className="w-[10%] " src="https://dummyimage.com/300" alt="" /> */}
        <h3 className="w-[40%] border-l-2 pl-2 h-full flex items-center">
          {name}
        </h3>
        <h3 className="w-[20%]  border-l-2 h-full flex items-center justify-center">
          {price}
        </h3>
        <div className="w-[10%] border-l-2 h-full flex items-center justify-center">
          <div className="flex gap-3 items-center">
            <div
              onClick={() => {
                const count2 = qty - 1 != 0 ? qty - 1 : 1;
                dispatch(updateCountOfCartById({ id, count2 }));
              }}
              className="bg-slate-300 cursor-pointer text-black 
              rounded-full w-[1.2rem] h-[1.2rem]  flex items-center justify-center"
            >
              -
            </div>
            <h3 className="">{qty}</h3>
            <div
              onClick={() => {
                const count2 = qty + 1;
                dispatch(updateCountOfCartById({ id, count2 }));
              }}
              className=" bg-slate-300 cursor-pointer text-black
               rounded-full w-[1.2rem] h-[1.2rem]  flex items-center justify-center"
            >
              +
            </div>
          </div>
        </div>
        <h3 className="w-[20%] border-x-2 h-full flex items-center justify-center">
          {removeEGP(price) * qty + "  EGP"}
        </h3>
      </div>
    </>
  );
};
const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCart.value);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log("cartItems updated");
    let total2 = 0;
    cartItems.map(
      (ele) =>
        (total2 = Number(ele.count) * removeEGP(ele.price || "0") + total2)
    );
    setTotal(total2);
  }, [cartItems]);
  return (
    <>
      <div className="flex  flex-col ">
        {cartItems.map((ele, index) => {
          return (
            <div key={index}>
              <CartItem
                // key={index}
                name={ele.name || ""}
                price={ele.price || ""}
                id={ele._id}
                qty={Number(ele.count) || 0}
              />
            </div>
          );
        })}
        <div className="flex font-semibold mt-3 text-3xl justify-between">
          <h1>Total :</h1>
          <h1 className="w-[20%] text-center">
            {total}
            <span> EGP</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default CartItems;
