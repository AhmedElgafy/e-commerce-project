"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/reducers/counterSlice";
import { setCategory } from "../store/reducers/category";
import { setToggleMeno } from "../store/reducers/togglemeno";
import { setSearch } from "../store/reducers/search";
import Link from "next/link";

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
        className={`border-opacity-25 border-white border-x-2 border-b-2
       overflow-hidden md:h-screen delay-100 w-[100%] items-center ${
         !toggleMeno ? "  h-0" : "h-80"
       }   md:w-[20%] transition-all overflow-x-hidden overflow-scroll `}
      >
        <ul
          className="px-2 py-2 flex flex-wrap 
        justify-center md:flex-nowrap md:flex-col"
        >
          {catagories.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex transition-all 
                 hover:translate-x-4 gap-2
                 p-3 w-[45%] cursor-pointer
                 hover:filter hover:invert
                  hover:text-black "
                onClick={(e) => {
                  handelCategoryClick(ele.name);
                }}
              >
                <li
                  key={index}
                  className="flex transition-all 
                   hover:translate-x-4 gap-1
                  p-3 w-[100%] cursor-pointer
                  hover:filter hover:invert
                   hover:text-black "
                  onClick={(e) => {
                    handelCategoryClick(ele.name);
                  }}
                >
                  <img
                    src={ele.imageSrc}
                    className="w-8 bg-white rounded-md"
                    alt={ele.name}
                  />
                  <p className="my-auto">{ele.name}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
