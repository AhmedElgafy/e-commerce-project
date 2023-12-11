import axios from "axios";
const imageurl =
  "https://www.hankerz.com.eg/wp-content/uploads/2023/11/1-2.jpg";
const startFunc = async () => {
  const response = await axios.get(imageurl, { responseType: "arraybuffer" });
  console.log(response.data);
};
startFunc();
