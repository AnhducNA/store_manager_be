// Requiring module
const express = require("express");

const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const storeRouter = require("./store.route");
const productRoute = require("./product.route");

const initRoute = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/store", storeRouter);
  app.use("/api/user", userRoute);
  app.use("/api/product", productRoute);

  app.use((data, req, res, next) => {
    console.log("Handling error middleware: ", data);
    return res.status(200).json({
      data,
    });
  });
};
// url image:  http://localhost:8000/images/user/user7.png
module.exports = initRoute;
