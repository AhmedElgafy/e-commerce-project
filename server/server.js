import * as puppeteer from "puppeteer";
import gettingTheData from "./gettingTheData.js";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

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
    await page.goto(
      `https://www.hankerz.com.eg/product-category/pc-hardware-components/${category}/?count=36&paged=`
    );

    // Wait for the page to load and ensure all relevant elements are available

    await page.waitForSelector(".product-inner");

    // Extract information
    const devElements = await page.$$(".product-inner");

    // Process the elements as needed
    let index = 0;
    for (let productPage of devElements) {
      await page.waitForSelector(".product-inner");

      try {
        const productNameEle = await productPage.$(
          ".woocommerce-loop-product__title"
        );
      } catch {}
      index++;
      //get product name to redirect the page to the product page.
      // await gettingTheData(page, productNameEle);
      await page.goto(
        `https://www.hankerz.com.eg/product-category/pc-hardware-components/${category}/`
      );
      await page.waitForSelector(".woocommerce-loop-product__title");
      console.log("up", index);

      // Wait for the page to load and ensure all relevant elements are available
    }
  }

  // Close the browser

  await browser.close();
})();
