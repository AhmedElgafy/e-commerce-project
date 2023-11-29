import * as puppeteer from "puppeteer";
import { runner } from "./server";
interface shortDescriptionType {
  name: string | null;
  about: string | null;
}

export async function gettingTheData(
  page2: puppeteer.Page,
  linkToGo: string | null
) {
  await page2.goto(`${linkToGo}`);
  await page2.waitForSelector(".row");
  // await page2.waitForNavigation({ waitUntil: "domcontentloaded" });
  const nameEle = await page2.$(".product_title");
  if (nameEle) {
    const nameText = await nameEle.evaluate((ele: any) => {
      return ele.textContent.trim();
    });
    console.log("product Name:", nameText);
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
    // console.log("product images:", mapping);
  }
  const productPriceEle = await page2.$(".price");
  if (productPriceEle) {
    const productPriceText = await productPriceEle.evaluate((ele: any) =>
      ele.textContent.trim()
    );
    console.log("product Price:", productPriceText);
  }
  //"woocommerce-product-details__short-description"
  const shortDescEle = await page2.$(
    ".description , .woocommerce-product-details__short-description"
  );
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
  console.table(shortDescription);
}
runner();
