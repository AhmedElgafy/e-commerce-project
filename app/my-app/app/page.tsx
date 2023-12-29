import Image from "next/image";
import { Metadata } from "next";
import { getAllProduct, getProductById } from "./api/getAllProduct";
import { ProductType } from "./typs/types";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import Body from "./components/body";

export const metadata: Metadata = {
  title: "Next.js",
};

export default async function Home() {
  const product: ProductType = await getProductById("657c60b02b70417531a8b6c3");
  const allProducts: ProductType[] = await getAllProduct();
  // console.log(product);
  return (
    <>
      <Header />
      <SideNav />
      <Body allProducts={allProducts} />
    </>
  );
}
