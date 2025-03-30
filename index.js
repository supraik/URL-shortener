const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRouter = require("./routes/url");
const app = express();
const port = 8001;

app.use(express.json()); //middleware

connectToMongoDB("mongodb://localhost:27017/url-shortener").then(() => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/url", urlRouter);

app.use("/:paramid", urlRouter);
