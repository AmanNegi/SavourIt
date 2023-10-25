const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");

router.get("/all", async (req, res) => {
  const products = await Product.find({});
  return res.send(products);
});

router.post("/add", async (req, res) => {
  const latitude = parseFloat(req.body.lat);
  const longitude = parseFloat(req.body.long);

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    location: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
  });
  await product.save();
  return res.send(product);
});

/**
 * Search for products by name and location.
 * @param {Object} req - The HTTP request object.
 * @param {string} req.body - The request body.
 * @param {string} req.body.lat - The user's lattitude.
 * @param {string} req.body.long- The user's longitude.
 * @param {string} req.body.name- The search query.
 * @returns {Object[]} An array of Product documents that match the search criteria.
 */
router.post("/search", async (req, res) => {
  const longitude = parseFloat(req.body.long);
  const latitude = parseFloat(req.body.lat);

  console.log(latitude, longitude);

  if (isNaN(longitude) || isNaN(latitude)) {
    return res.status(400).send("Invalid longitude or latitude");
  }
  const products = await Product.find({
    name: { $regex: req.body.name, $options: "i" },
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 5000,
      },
    },
  });

  return res.json(products);
});

module.exports = router;
