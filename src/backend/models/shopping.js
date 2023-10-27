const mongoose = require("mongoose");

const shoppingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  count: {
    type: Number,
    default: 1,
  },
  addedAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

const shoppingListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  products: {
    type: [shoppingSchema],
    required: true,
  },
});

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

exports.ShoppingList = ShoppingList;
