import express from "express";
const app = express();
const PORT = 8000;
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.body);
  res.send("welcome in your server at port: " + PORT);
});

app.listen(PORT);
