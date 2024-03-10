"use client";
import React, { useEffect, useState } from "react";

interface ImagesGalleryProps {
  name: string;
  id: string;
}
interface Images {
  data: string;
}
const ImagesGallery = ({ name, id }: ImagesGalleryProps) => {
  const [images, setImages] = useState<Images[]>();
  const [heroImage, setHeroImage] = useState("");
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
        setHeroImage(Buffer.from(data.images[0].data).toString("base64"));
      });
  }, []);
  return (
    <div className="w-[100%] md:w-80">
      <img src={"data:image/png;base64," + heroImage} alt={name || ""} />

      <ul className="flex pt-2 gap-3 items-center justify-between">
        {images &&
          images.map((ele, index) => (
            <li
              className="w-[30%] cursor-pointer hover:opacity-[50%]"
              key={index}
            >
              <img
                src={
                  "data:image/png;base64," +
                  Buffer.from(ele.data).toString("base64")
                }
                onClick={() =>
                  setHeroImage(Buffer.from(ele.data).toString("base64"))
                }
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImagesGallery;
