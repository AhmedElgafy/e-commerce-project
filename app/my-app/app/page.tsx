import { getAllProduct } from "./api/getAllProduct";
import Body from "./components/body";
import * as dotenv from "dotenv";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import { ProductType } from "./typs/types";

// import Home from "./(Home)/home/page";

export default async function Page() {
  const allProducts: ProductType[] = await getAllProduct();
  console.log(process.env.HOST);
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <SideNav />
        <Body allProducts={allProducts} />
      </div>
    </>
  );
}
