import { ProductType, shortDescriptionType } from "./db/types";
import * as puppeteer from "puppeteer";
import database from "./db/connectingTomo";
import axios from "axios";
import { products } from "./web-scraping";

export async function gettingTheData(
  page2: puppeteer.Page,
  linkToGo: string | null
) {
  await page2.goto(`${linkToGo}`);
  await page2.waitForSelector(".row");

  const product: ProductType = {
    name: null,
    categories: undefined,
    images: null,
    link: null,
    price: null,
    shortDisc: null,
    longDisc: null,
  };
  product.link = linkToGo;
  try {
    const nameEle = await page2.$(".product_title");
    if (nameEle) {
      const nameText = await nameEle.evaluate((ele: any) => {
        return ele.textContent.trim();
      });
      product.name = nameText;
    }
  } catch (err) {
    console.log(err);
  }
  try {
    const imagesPlace = await page2.$(".product-image-slider");
    if (imagesPlace) {
      const imagesEle = await imagesPlace.$$("img");
      //we made this map cause there are duplicate images source.
      const mapping = new Map();
      //making a buffer array to send images as file to database.
      const buffArray: {
        contentType: string;
        data: Buffer;
        link: string;
      }[] = [];
      let number = 0;
      for (const imgEle of imagesEle) {
        const imageSrc = await imgEle.evaluate((ele) =>
          ele.getAttribute("href")
        );
        mapping.set(imageSrc, number++ - mapping.size);
      }
      for (let i of mapping) {
        const response = await axios.get(i[0], { responseType: "arraybuffer" });
        buffArray.push({
          contentType: "image/jpeg",
          data: response.data,
          link: i[0],
        });
      }
      product.images = buffArray;
      // product.images = mapping;
    }
  } catch (err) {
    console.log(err);
  }
  try {
    const productPriceEle = await page2.$(".price");
    if (productPriceEle) {
      const productPriceText = await productPriceEle.evaluate((ele: any) =>
        ele.textContent.trim()
      );
      product.price = productPriceText;
    }
  } catch (err) {
    console.log(err);
  }
  try {
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
        });
      }
    );
    product.shortDisc = shortDescription;
  } catch (err) {
    console.log(err);
  }

  //selecting categories.
  try {
    const categories = await page2.$(".posted_in");
    const categoriesLinkEle = await categories?.$$eval("a", (aEle) =>
      aEle.map((cat) => cat.textContent)
    );
    product.categories = categoriesLinkEle;
  } catch (err) {
    console.log(err);
  }

  //get product description
  try {
    await page2.waitForSelector("#tab-description", { timeout: 5000 });
    const discs = await page2.$eval("#tab-description", (ele) => {
      return {
        title: ele.querySelector("strong")?.textContent?.trim(),
        about: ele.querySelectorAll("p")[1].textContent?.trim(),
      };
    });
    product.longDisc = discs;
    // console.log(discs);
  } catch (err) {
    //this product has no description
    console.log(err);
  }
  products.push(product);
  console.log(product);
}
