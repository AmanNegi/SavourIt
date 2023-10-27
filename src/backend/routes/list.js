const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");
const { Recipie } = require("../models/recipie");
const { ShoppingList } = require("../models/shopping");

router.post("/getShoppingList", async (req, res) => {
  const shoppingList = await ShoppingList.findOne({
    userId: req.body.userId,
  });

  console.log(shoppingList, req.body);

  if (!shoppingList) {
    const shoppingList = await ShoppingList({
      userId: req.body.userId,
      products: [],
    });
    return res.send(shoppingList);
  }

  return res.send(shoppingList);
});

router.post("/addToShoppingList", async (req, res) => {
  const { items, userId } = req.body;
  const shoppingList = await ShoppingList.findOne({ userId });

  if (shoppingList) {
    items.forEach((item) => {
      const existingItem = shoppingList.products.find(
        (product) => product.name === item.name
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        shoppingList.products.push({ name: item.name, count: item.count });
      }
    });
    await shoppingList.save();
    return res.send(shoppingList);
  } else {
    const shoppingList = await ShoppingList({
      userId: req.body.userId,
      products: items.map((item) => {
        name: item;
      }),
    });
    await shoppingList.save();
    return res.send(shoppingList);
  }
});

router.get("/allProducts", async (req, res) => {
  const products = await Product.find({});
  return res.send(products);
});

router.get("/allRecipies", async (req, res) => {
  const recipies = await Recipie.find({});
  return res.send(recipies);
});

router.post("/addProduct", async (req, res) => {
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

router.post("/addRecipie", async (req, res) => {
  const recipie = new Recipie({
    name: req.body.name,
    description: req.body.description,
    listedBy: req.body.listedBy,
    listedByName: req.body.listedByName,
    image: req.body.image,
  });
  await recipie.save();
  return res.send(recipie);
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
router.post("/searchProduct", async (req, res) => {
  const longitude = parseFloat(req.body.long);
  const latitude = parseFloat(req.body.lat);

  console.log(latitude, longitude);

  if (isNaN(longitude) || isNaN(latitude) || longitude == 0 || latitude == 0) {
    const products = await Product.find({
      name: { $regex: req.body.name, $options: "i" },
    });
    console.log("No long lat provided.");
    return res.status(200).send(products);
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
  console.log("PRODUCTS: ", products);
  return res.json(products);
});

router.post("/searchRecipie", async (req, res) => {
  const recepies = await Recipie.find({
    $or: [
      { name: { $regex: req.body.name, $options: "i" } },
      { description: { $regex: req.body.name, $options: "i" } },
    ],
  });

  console.log(recepies);
  return res.json(recepies);
});

module.exports = router;
