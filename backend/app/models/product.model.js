const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    SKU: String,
    brand: String,
    cost: Number,
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type"
    },
    specific: Object,
  })
);

Product.getAll = () => {

}

module.exports = Product;
