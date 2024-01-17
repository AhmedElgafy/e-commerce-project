"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/reducers/counterSlice";
import { setCategory } from "../store/reducers/category";

const SideNav = () => {
  const catagories: { name: string; imageSrc: string }[] = [
    { name: "Cooling", imageSrc: "../../cooling-fan.svg" },
    { name: "GPU", imageSrc: "../../graphic-card.svg" },
    { name: "Case", imageSrc: "../../desktop.svg" },
    { name: "Storage", imageSrc: "../../hdd.svg" },
    { name: "Motherboard", imageSrc: "../../motherboard.svg" },
    { name: "RAM", imageSrc: "../../ram-memory.svg" },
    { name: "CPU", imageSrc: "../../cpu.svg" },
    { name: "Power Supply", imageSrc: "../../power-supply.png" },
    { name: "Fan", imageSrc: "../../fan.png" },
  ];
  const count = useSelector((state: RootState) => state.counter.value);
  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();
  const handelCategoryClick = (catName: string) => {
    dispatch(setCategory(catName));
    console.log("ima working");
  };
  return (
    <>
      <div className="border-2 h-screen w-[20%] hidden md:block">
        <ul className="px-2 py-2 ">
          {catagories.map((ele, index) => {
            return (
              <li
                key={index}
                className="flex gap-2 p-3 "
                onClick={() => handelCategoryClick(ele.name)}
              >
                <img src={ele.imageSrc} className="w-8" alt={ele.name} />
                <p className="my-auto">{ele.name}</p>
              </li>
            );
          })}
        </ul>
        <h1>{count}</h1>
        <button onClick={() => handelCategoryClick}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>cur Category: {category}</h1>
      </div>
    </>
  );
};

export default SideNav;
