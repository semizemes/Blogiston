import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const posts = [];

const y = new Date();
const currYear = y.getFullYear();
let options = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  month: "numeric",
  day: "numeric",
  year: "numeric",
};
let formattedTime = y.toLocaleString("en-US", options);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    year: currYear,
  });
});

  
app.listen(port, () => {
  console.log(`working on this port ${port}`);
});
