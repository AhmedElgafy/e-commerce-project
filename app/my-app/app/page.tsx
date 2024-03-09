import { getAllProduct } from "./api/getAllProduct";
import Body from "./components/body";
import SideNav from "./components/sideNav";
import { ProductType } from "./typs/types";
export default async function Page() {
  const allProducts: ProductType[] = await getAllProduct();
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <SideNav />
        <Body allProducts={allProducts} />
      </div>
    </>
  );
}
