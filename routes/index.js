const express = require("express");
const router = express.Router();
const controller = require("../Controller/controller");

let routes = (app) => {
router.get("/", controller.getMostRecentFile);
app.use(router);
};

module.exports = routes;