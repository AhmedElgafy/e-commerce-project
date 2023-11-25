import * as puppeteer from "puppeteer";

const filtering = (text) => {
  let noPluses = text.replace(/[+]/g, "");
  let noDashes = noPluses.replace(/– /g, "");
  let noSpaces = noDashes.replace(/ /g, "-");
  return noSpaces;
};
export default async function gettingTheData(page, productNameEle) {
  if (productNameEle) {
    let productName = await productNameEle.evaluate((element) =>
      element.textContent.trim()
    );
    //filtering.

    console.log(productName);

    //   `https://www.hankerz.com.eg/product/${productName}`
  }
}
