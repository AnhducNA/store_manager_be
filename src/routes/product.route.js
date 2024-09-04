const express = require("express");
const productRoute = express.Router();
const controller = require("../controllers/product.controller");

productRoute.get("/", controller.getProduct);
productRoute.get("/:id", controller.getDetail);

module.exports = productRoute;
