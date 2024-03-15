import CartImage from "./cartImage";
import CartItems from "./cartItem";

const CartPage = () => {
  return (
    <>
      <div className="flex p-3 flex-col">
        <div className="flex mx-auto py-5">
          <h1 className="m-auto items-center  text-3xl align-middle ">
            Cart Page
          </h1>
          <CartImage />
        </div>
        <div className="flex justify-between   font-bold mt-2">
          <h1 className="w-[10%]  text-center bg-red-300 ">image</h1>
          <h1 className="w-[40%] border-l-2 text-center  bg-red-300">Name</h1>
          <h1 className="w-[20%] border-l-2 text-center bg-red-300">Price</h1>
          <h1 className="w-[10%] border-l-2 text-center bg-red-300">QTY</h1>
          <h1 className="w-[20%] border-l-2 text-center bg-red-300">TOTAL</h1>
        </div>
        <CartItems />
      </div>
    </>
  );
};
export default CartPage;
