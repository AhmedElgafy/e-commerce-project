"use client";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
interface ImageProps {
  id: string;
}
const CardImage = ({ id }: ImageProps) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/image" || "")
      .then((res) => res.json())
      .then((data) => {
        setImage(Buffer.from(data.data).toString("base64"));
        // console.log(data.data);
      });
  }, []);
  return (
    <>
      {image ? (
        <img
          src={"data:image/jpeg;base64," + image}
          loading="lazy"
          className="w-full cursor-pointer hover:opacity-30 
              hover:scale-125 transition-all"
        />
      ) : (
        <div className=" relative h-full w-full bg-slate-400">
          <div
            className="absolute bg-black w-[100%] h-[50%] 
          translate-y-[50%] blur-lg animate-pulse"
          ></div>
        </div>
      )}
    </>
  );
};

export default CardImage;
