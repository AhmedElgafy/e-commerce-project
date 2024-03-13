import React from "react";
interface CartItemProps {
  id: string;
  name: string;
  price: string;
  qty: number;
  total: number;
}
const CartItem = ({ name, price, qty, total }: CartItemProps) => {
  return (
    <>
      <img className="w-[10%] " src="https://dummyimage.com/300" alt="" />
      <h3 className="w-[40%]">{name}</h3>
      <h3 className="w-[20%]">{price}</h3>
      <h3 className="w-[10%]">{qty}</h3>
      <h3 className="w-[20%]">{total}</h3>
    </>
  );
};

export default CartItem;
