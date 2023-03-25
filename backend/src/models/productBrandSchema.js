const mongoose = require("mongoose");

const productBrandSchema = new mongoose.Schema({
  brandname: {
    type: String,
    require: true,
    unique: true,
  },

  brandImageUrl: {
    type: String,
    require: true,
  },

  createdat: {
    type: Date,
    default: Date.now(),
  },

  updatedat: {
    type: Date,
    default: Date.now(),
  },
});

const ProductBrandSchema = new mongoose.model(
  "ProductBrand",
  productBrandSchema
);

module.exports = ProductBrandSchema;
