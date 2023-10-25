const auth = require("../routes/auth");
const list = require("../routes/list");
const express = require("express");
const router = express.Router();

/**
 * Function that exports all the routes
 * @param {Express} app
 */

const test = router.get("/", (req, res) => {
  return res.send("<h1>Endpoint is working!</h1>");
});

module.exports = function (app) {
  app.use("/test", test);
  app.use("/api/auth", auth);
  app.use("/api/list", list);
};
