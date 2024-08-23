const express = require("express");
const productRoute = express.Router();
const controller = require("../controllers/product.controller");

productRoute.get("/", controller.getProductByUser);

module.exports = productRoute;
