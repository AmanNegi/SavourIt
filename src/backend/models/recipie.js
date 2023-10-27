const mongoose = require("mongoose");

const recipieSchema = new mongoose.Schema({
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
  listedByName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Recipie = mongoose.model("Recipie", recipieSchema);

exports.Recipie = Recipie;
