const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    // unique: true,
  },

  // insert it when project is live
  // brandId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "ProductBrandSchema",
  // },

  createdat: {
    type: Date,
    default: Date.now(),
  },
});

const ProductCategorySchema = new mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategorySchema;
