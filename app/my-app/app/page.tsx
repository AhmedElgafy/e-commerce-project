import Image from "next/image";
import { Metadata } from "next";
import { getData, getImage } from "./api/getAllProduct";
import DataShow from "./component/dataShow";

export const metadata: Metadata = {
  title: "Next.js",
};

export default async function Home() {
  const data = await getData();
  const image = await getImage();
  console.log(data);
  console.log("data");
  return (
    <>
      <div>
        <div>Home page</div>
        <div>my data:</div>
        {/* {data.map((ele: { name: any }) => (
        <li>{ele.name}</li>
      ))} */}
        <img src={"data:image/png;base64," + image} alt="" />

        <DataShow></DataShow>
      </div>
    </>
  );
}
