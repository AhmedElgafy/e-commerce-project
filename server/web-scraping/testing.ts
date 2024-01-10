// import puppeteer from "puppeteer";
// var buffer = Buffer.from("Hello world");
// var string = buffer.toString("base64");
// console.log(string);

const getTheImage=>async(){

    const fromDataBase = await ProductModel.find({ _id: req.params.id }).select(
        "images"
      );
}