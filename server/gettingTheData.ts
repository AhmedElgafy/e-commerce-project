import * as puppeteer from "puppeteer";
import { runner } from "./server";
interface shortDescriptionType {
  name: string | null;
  about: string | null;
}
interface ProductSchema {
  name: string | null;
  price: string | null;
  images: Map<string, number> | null;
  categories: (string | null)[] | undefined;
  link: string | null;
  disc: shortDescriptionType[] | null;
}
export async function gettingTheData(
  page2: puppeteer.Page,
  linkToGo: string | null
) {
  await page2.goto(`${linkToGo}`);
  await page2.waitForSelector(".row");
  const product: ProductSchema = {
    name: null,
    categories: undefined,
    images: null,
    link: null,
    price: null,
    disc: null,
  };
  const nameEle = await page2.$(".product_title");
  if (nameEle) {
    const nameText = await nameEle.evaluate((ele: any) => {
      return ele.textContent.trim();
    });
    product.name = nameText;
    // console.log("product Name:", nameText);
  }
  const imagesPlace = await page2.$(".product-image-slider");
  if (imagesPlace) {
    const imagesEle = await imagesPlace.$$("img");
    //we made this map cause there are duplicate images source.
    const mapping = new Map();
    let number = 0;
    for (const imgEle of imagesEle) {
      const imageSrc = await imgEle.evaluate((ele) => ele.getAttribute("href"));
      mapping.set(imageSrc, number++ - mapping.size);
    }
    product.images = mapping;
    // console.log("product images:", mapping);
  }
  const productPriceEle = await page2.$(".price");
  if (productPriceEle) {
    const productPriceText = await productPriceEle.evaluate((ele: any) =>
      ele.textContent.trim()
    );
    product.price = productPriceText;
    // console.log("product Price:", productPriceText);
  }
  //"woocommerce-product-details__short-description"
  const shortDescription: shortDescriptionType[] = await page2.$$eval(
    ".description.woocommerce-product-details__short-description li",
    (lis) => {
      return lis.map<shortDescriptionType>((li) => {
        return (
          {
            name: li.childNodes[0].textContent,
            about: li.childNodes[1].textContent,
          } || li.textContent
        );
        // li.childNodes[0].textContent, li.childNodes[1].textContent;
      });
    }
  );

  console.log(shortDescription);
  //selecting categories.
  const categories = await page2.$(".posted_in");
  const categoriesLinkEle = await categories?.$$eval("a", (aEle) =>
    aEle.map((cat) => cat.textContent)
  );
  product.categories = categoriesLinkEle;
  console.log(product);
  // console.log("categories: ", categoriesLinkEle);
}
runner();
