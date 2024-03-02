import * as dotenv from "dotenv";

export async function getAllProduct() {
  const res = await fetch(process.env.SERVER || "");
  // const data = await ;
  console.log("data");
  // if (!res.ok) {
  //   console.log(process.env.SERVER);
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(process.env.SERVER + "/product/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductImagesById(id: string) {
  const res = await fetch(process.env.SERVER + "/product/" + id + "/images");
  console.log(process.env.SERVER + "/product/" + id + "/images/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getProductOneImageById(id: string, index: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images/" + index
  );
  if (!res.ok) {
    console.log(
      process.env.NEXT_PUBLIC_SERVER + "/product/" + id + "/images/" + index
    );
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
