"use client";
import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/reducers/search";
import { setToggleMeno } from "../store/reducers/togglemeno";
import Link from "next/link";
import { setShowCart } from "../store/reducers/showCart";
import { usePathname } from "next/navigation";

const Header = () => {
  const search = useSelector((state: RootState) => state.search.value);
  const toggleMeno = useSelector((state: RootState) => state.toggleMeno.value);
  const cart = useSelector((state: RootState) => state.shoppingCart.value);
  const showCart = useSelector((state: RootState) => state.showCart.value);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };
  const toggle = () => {
    toggleMeno ? dispatch(setToggleMeno(false)) : dispatch(setToggleMeno(true));
  };
  return (
    <>
      <div className=" sticky bg-[#034579] shadow-lg col-span-7 justify-between flex  flex-wrap px-5 ">
        {/* Logo */}
        <div className="flex items-center hover:filter transition-all hover:invert flex-none w-[60px] ">
          {/* <Link href={process.env.NEXT_PUBLIC_HOST || ""}> */}
          <Link href={"/"}>
            <img src="../../Logo.png" className="block " alt="logo Image" />
          </Link>
        </div>
        {/* <h1 className="my-auto text-lg font-bold">Abo mohamed LL computer</h1> */}
        {/* search bar */}
        <div
          className={` ${
            pathname != "/" && "hidden"
          } p-2 grow w-[50%] md:grow-0 flex items-center mx-auto relative`}
        >
          <input
            onChange={handelSearch}
            type="text"
            placeholder="Search"
            value={search}
            className="w-[100%] block  p-4 h-[30px] text-blue-400 pr-10  rounded-3xl"
          />
          <img
            src="../../search.png"
            alt=""
            className="absolute w-5 right-[25px]"
          />
        </div>
        {/* profile, favorite, card and contacts. */}
        <div
          className=" left-0 shadow-2xl flex z-30 gap-5 rounded-t-2xl
            bg-[#034579] md:w-[30%] w-[100%] h-[10%]
            fixed md:static bottom-0 md:flex mx-auto md:mx-1 
        md:my-auto justify-center col-span-5 md:col-span-1 md:gap-2"
        >
          <div className="flex gap-2">
            <img className="w-5" src="../../contact.svg" alt="" />
            <p className="text-center my-auto"> (202) 555-0178</p>
          </div>
          <div className="flex gap-1 relative">
            <img
              className="w-5 hover:filter hover:invert cursor-pointer"
              src="../../profile.svg"
              alt="profile"
            />
            <div
              onClick={() =>
                showCart
                  ? dispatch(setShowCart(false))
                  : dispatch(setShowCart(true))
              }
              className="relative flex items-center"
            >
              <img
                className="w-5 hover:filter hover:invert cursor-pointer"
                src="../../card.svg"
                alt="card"
              />
              <div
                className={`${
                  !cart.length && "hidden"
                } absolute top-[5%] text-[10px] left-[50%]
                bg-red-500 rounded-full w-4 flex align-middle justify-center`}
              >
                {cart.length}
              </div>
            </div>
            <div className="relative flex items-center">
              <img
                className="w-5 hover:filter hover:invert cursor-pointer"
                src="../../fav.svg"
                alt="fav"
              />
              <div
                className="absolute text-[10px] top-[5%] 
              text-xs left-[50%] bg-red-500 rounded-full 
              w-4 flex align-middle justify-center"
              >
                1
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => toggle()}
          className="flex md:hidden align-middle hover:filter
            hover:invert cursor-pointer justify-center"
        >
          <img src="../../menu.svg" alt="menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
