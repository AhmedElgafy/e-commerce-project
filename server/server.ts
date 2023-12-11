import * as puppeteer from "puppeteer";
import { gettingTheData } from "./gettingTheData";

export async function runner() {
  const browser = await puppeteer.launch({ headless: false });
  const page1 = await browser.newPage();
  const page2 = await browser.newPage();

  const categories = [
    "case",
    "cooling-systems/air-cooling",
    "cooling-systems/fans",
    "cooling-systems/water-cooling",
    "graphic-cards",
    "motherboard",
    "power-supply",
    "processors",
    "ram",
    "storage/h-d-d",
    "storage/m-2",
    "storage/s-s-d",
  ];

  // Navigate to the URL
  for (let category of categories) {
    await page1.goto(
      `https://www.hankerz.com.eg/product-category/pc-hardware-components/${category}/?count=36&paged=`
      // "https://www.hankerz.com.eg/product-category/pc-hardware-components/ram/"
      // "https://www.hankerz.com.eg/product-category/asus-motherboards/"
    );
    // Wait for the page to load and ensure all relevant elements are available
    await page1.waitForSelector(".product-inner");

    //when the page is full loading select which div to you want.
    const wontedDivs = await page1.$$(".product-inner");

    for (let wontedDiv of wontedDivs) {
      //go back to the main page and waiting for page to load.
      console.log(`###############  ${category}    #################`);

      const getLinkEle = await wontedDiv.$(".product-loop-title");
      if (getLinkEle) {
        const linkToGo = await getLinkEle.evaluate((ele) =>
          ele.getAttribute("href")
        );
        try {
          await gettingTheData(page2, linkToGo);
        } catch {
          console.log("no Data");
        }
        console.log(linkToGo);
      }

      // await page2.goto(`${linkToGo}`);
    }
  }

  // Close the browser

  await browser.close();
}
