const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024,
  },
  userType: {
    type: String,
    enum: ["user", "restaurant"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

function validateSignUp(user) {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    lat: Joi.string().required(),
    long: Joi.string().required(),
    userType: Joi.string().valid("user", "restaurant").required(),
  });
  return schema.validate(user);
}

function validateLogin(user) {
  const schema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validateSignUp = validateSignUp;
exports.validateLogin = validateLogin;
