"use client";
import React, { useEffect, useState } from "react";

interface ImagesGalleryProps {
  name: string;
  id: string;
}
const ImagesGallery = ({ name, id }: ImagesGalleryProps) => {
  const [images, setImages] = useState("");
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images")
      .then((res) => res.json())
      .then((data) => {
        console.log(Buffer.from(data.images[0].data).toString("base64"));
        // setImages(Buffer.from(data.data).toString("base64"));
        // setHeroImage(Buffer.from(data.data[0]).toString("base64"))
      });
  }, []);
  return (
    <div className="w-[100%] md:w-80">
      <img src={heroImage || images[1]} alt={name || ""} />

      {/* <ul className="flex pt-2 gap-3 items-center justify-between">
        {images ? (
          images.map((ele, index) => (
            <li
              className="w-[30%] cursor-pointer hover:opacity-[50%]"
              key={index}
            >
              <img src={ele} onClick={() => setImage(ele)} />
            </li>
          ))
        ) : (
          <Skeleton
            // circle
            width="100%"
            height={200}
            containerClassName="avatar-skeleton"
          />
        )}
      </ul> */}
    </div>
  );
};

export default ImagesGallery;
