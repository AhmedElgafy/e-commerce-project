import { getAllProduct, getProductImagesById } from "./api/getAllProduct";
import Body from "./components/body";
import Header from "./components/header";
import SideNav from "./components/sideNav";
import { ProductType } from "./typs/types";

// import Home from "./(Home)/home/page";

export default async function Page() {
  const allProducts: ProductType[] = await getAllProduct();
  // const allProductsImages: string[] = await getProductImagesById("1");

  // console.log(product);
  return (
    <>
      <Header />
      <div></div>
      <div className="flex">
        <SideNav />
        <Body allProducts={allProducts} />
      </div>
    </>
  );
}
