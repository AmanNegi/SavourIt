const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
  listedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
});

productSchema.index({ location: "2dsphere" });

const Product = mongoose.model("Product", productSchema);

// function validateProduct(product) {
//   const schema = Joi.object().keys({
//     name: Joi.string().required(),
//     lat: Joi.string().required(),
//     long: Joi.string().required(),
//     userType: Joi.string().required(),
//   });
//   return schema.validate(product);
// }

exports.Product = Product;
// exports.validateProduct = validateProduct;
