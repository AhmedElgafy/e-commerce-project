"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/reducers/counterSlice";
import { setCategory } from "../store/reducers/category";
import { setToggleMeno } from "../store/reducers/togglemeno";
import { setSearch } from "../store/reducers/search";

const SideNav = () => {
  const catagories: { name: string; imageSrc: string }[] = [
    { name: "Cooling", imageSrc: "../../cooling-fan.svg" },
    { name: "Graphic Cards", imageSrc: "../../graphic-card.svg" },
    { name: "Case", imageSrc: "../../desktop.svg" },
    { name: "Storage", imageSrc: "../../hdd.svg" },
    { name: "Motherboard", imageSrc: "../../motherboard.svg" },
    { name: "RAM", imageSrc: "../../ram-memory.svg" },
    { name: "Processors", imageSrc: "../../cpu.svg" },
    { name: "Power Supply", imageSrc: "../../power-supply.png" },
    { name: "Fan", imageSrc: "../../fan.png" },
    { name: "All", imageSrc: "../../all.svg" },
  ];
  const count = useSelector((state: RootState) => state.counter.value);
  const category = useSelector((state: RootState) => state.category.value);
  const search = useSelector((state: RootState) => state.search.value);
  const toggleMeno = useSelector((state: RootState) => state.toggleMeno.value);
  const dispatch = useDispatch();
  const handelCategoryClick = (catName: string) => {
    if (catName == "All") {
      dispatch(setCategory(""));
      dispatch(setToggleMeno(false));
      dispatch(setSearch(""));
      return;
    }
    dispatch(setCategory(catName));
    dispatch(setSearch(""));
    dispatch(setToggleMeno(false));
  };

  return (
    <>
      <div
        className={`border-2 md:h-screen  w-[100%] items-center ${
          !toggleMeno && "hidden"
        }   md:w-[20%] md:block`}
      >
        <ul className="px-2 py-2 flex flex-wrap justify-center md:flex-nowrap md:flex-col">
          {catagories.map((ele, index) => {
            return (
              <li
                key={index}
                className="flex gap-2 p-3 w-[45%] cursor-pointer
                 hover:filter hover:invert
                  hover:text-black "
                onClick={(e) => {
                  handelCategoryClick(ele.name);
                }}
              >
                <img src={ele.imageSrc} className="w-8 " alt={ele.name} />
                <p className="my-auto">{ele.name}</p>
              </li>
            );
          })}
        </ul>
        {/* <h1>{count}</h1>
        <button onClick={() => handelCategoryClick}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
        {/* <h1>cur Category: {category}</h1>
        <h1>cur search: {search}</h1> */}
      </div>
    </>
  );
};

export default SideNav;
