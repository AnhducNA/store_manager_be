const express = require("express");
const storeRouter = express.Router();
const controller = require("../controllers/store.controller");

storeRouter.get("/", controller.getStoreByUser);

module.exports = storeRouter;
