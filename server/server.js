import * as puppeteer from "puppeteer";
import axios from "axios";
import fs from "fs/promises";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const category = [
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
  for (let x of category) {
    await page.goto(
      `https://www.hankerz.com.eg/product-category/pc-hardware-components/${x}/?count=36&paged=`
    );

    // Wait for the page to load and ensure all relevant elements are available
    try {
      await page.waitForSelector(".product-inner");

      // Extract information
      const devElements = await page.$$(".product-inner");

      // Process the elements as needed
      let index = 0;
      for (const devElement of devElements) {
        // Use devElement as the context to search for elements with the class "name"
        const nameElement = await devElement.$(
          ".woocommerce-loop-product__title"
        );
        const imgSrc = await devElement.$("img");
        const price = await devElement.$(".price");
        if (nameElement && imgSrc && price) {
          const nameText = await nameElement.evaluate((ele) => ele.textContent);
          const imgSrcText = await imgSrc.evaluate((ele) =>
            ele.getAttribute("data-oi")
          );
          const priceText = await price.evaluate((ele) => ele.textContent);
          // downloading the images.
          const response = await axios.get(imgSrcText, {
            responseType: "arraybuffer",
          });
          await fs.writeFile(
            "images/" + nameText + ".jpg",
            response.data,
            "binary"
          );

          //view data in the console.
          console.log(`#####################  ${x}  #########################`);
          console.log("Name:", nameText);
          console.log("ImgSrc:", imgSrcText);
          console.log("price:", priceText);
          index++;
          console.log("number:", index);
        }

        // Extract the text content of the element with class "name"
      }
    } catch (e) {
      console.log("###################   [No data]    #######################");
      console.log(e);
    }
  }

  // Close the browser

  await browser.close();
})();
