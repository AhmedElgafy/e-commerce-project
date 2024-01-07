import React from "react";

const Header = () => {
  return (
    <>
      <div className=" sticky shadow-lg col-span-7 flex  flex-wrap px-5 ">
        {/* Logo */}
        <div className="flex items-center flex-none w-[60px] ">
          <img src="../../Logo.png" className="block " alt="logo Image" />
        </div>
        {/* <h1 className="my-auto text-lg font-bold">Abo mohamed LL computer</h1> */}
        {/* search bar */}
        <div className="  p-2 grow w-[50%] md:grow-0 flex items-center mx-auto relative">
          <input
            type="text"
            className="w-[100%] block  p-4 h-[30px] text-blue-400 pr-10  rounded-3xl"
          />
          <img
            src="../../search.png"
            alt=""
            className="absolute w-5 right-[25px]"
          />
        </div>
        {/* profile, favorite, card and contacts. */}
        <div className=" flex-none hidden md:flex mx-auto md:mx-1 align-middle justify-center col-span-5 md:col-span-1 gap-2">
          <img className="w-5" src="../../contact.svg" alt="" />
          <p className="text-center my-auto"> (202) 555-0178</p>
          <div className="flex gap-1">
            <img className="w-5" src="../../profile.svg" alt="profile" />
            <img className="w-5" src="../../card.svg" alt="card" />
            <img className="w-5" src="../../fav.svg" alt="fav" />
          </div>
        </div>
        <div className="flex md:hidden align-middle justify-center">
          <img src="../../menu.svg" alt="menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
