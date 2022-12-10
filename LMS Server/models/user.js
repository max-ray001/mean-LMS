const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
      min: 10,
    },
    address: {
      type: String,
      required: true,
    },
    roles: {
      type: Boolean,
      required: false,
      default: "nil",
    },
    joined_date: {
      type: Date,
      required: false,
      default: "nil",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
