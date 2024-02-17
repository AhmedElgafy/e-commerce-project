import { getAllProduct } from "./api/getAllProduct";
import Body from "./components/body";
import * as dotenv from "dotenv";
import SideNav from "./components/sideNav";
import { ProductType } from "./typs/types";

// import Home from "./(Home)/home/page";

export default async function Page() {
  try {
    const allProducts: ProductType[] = await getAllProduct();

    return (
      <>
        <div className="flex flex-col md:flex-row ">
          <SideNav />
          <Body allProducts={allProducts} />
        </div>
      </>
    );
  } catch {
    return (
      <p className="text-center fixed translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] ">
        Sorry Connection error with the server!!!
      </p>
    );
  }
}
