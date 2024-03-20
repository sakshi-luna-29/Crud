const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();
const productRoute = require("./route/product.route.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

mongoose
  .connect("mongodb+srv://sakshiluna09900:iwOLjL7sUTy1iNN5@cluster0.fmpdp8c.mongodb.net/LoginSystem?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Database Connected.");
    app.listen(3001, () => {
      console.log("server is running");
    });
  })
  .catch(() => {
    console.log("Database Not Connected.");
  });
