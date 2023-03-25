const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const bcrypt = require("bcryptjs");

const adminLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    require: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// Password hasing
// adminLoginSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

const AdminLoginSchema = new mongoose.model("AdminLogin", adminLoginSchema);

module.exports = AdminLoginSchema;
