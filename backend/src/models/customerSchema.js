const express = require("express");

const mongoose = require("mongoose");

// For password hashing :
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema({
  customerFirstName: {
    type: String,
    require: true,
    trim: true,
  },

  customerLastName: {
    type: String,
    require: true,
    trim: true,
  },

  customerPhone: {
    type: String,
    require: true,
    unique: true,
    minLength: 10,
    maxLength: 10,
  },

  customerEmail: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },

  customerPassword: {
    type: String,
    require: true,
    trim: true,
  },

  customerAddress: {
    type: String,
    require: true,
  },

  customerCreatedAt: {
    type: Date,
    default: Date.now,
    unique: true,
  },
});

// Password hashing :

// customerSchema.pre("save", async function (next) {
//   if (this.isModified("customerPassword")) {
//     this.customerPassword = await bcrypt.hash(this.customerPassword, 12);
//   }
//   next();
// });

const CustomerSchema = new mongoose.model("Customer", customerSchema);

module.exports = CustomerSchema;
