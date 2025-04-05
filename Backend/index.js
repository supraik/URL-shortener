const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const app = express();
const port = 8001;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //middleware
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
connectToMongoDB("mongodb://localhost:27017/url-shortener").then(() => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/url", urlRouter);
app.use("/:paramid", urlRouter);
app.use("/", staticRouter);

app.get("/test", (req, res) => {
  //...
  return res.json([{ message: "Adit aaa gaya !" }]);
});
