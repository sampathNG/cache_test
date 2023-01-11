const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   _id: { type: Number, required: true },
//   username: {
//     type: String,
//     required: true,
//     min: 5,
//     max: 15,
//   },
//   phone: {
//     type: Number,
//     required: true,
//     unique: [true, "Number already exists in database"],
//     validate: {
//       validator: function (v) {
//         return /^[0-9]{10}/.test(v);
//       },
//       message: "{VALUE} is not a valid 10 digit number!",
//     },
//   },
//   email: {
//     type: String,
//     unique: [true, "email already exists in database!"],
//     lowercase: true,
//     trim: true,
//     required: [
//       true,
//       "email field is not provided. Cannot create user without email ",
//     ],
//     validate: {
//       validator: function (v) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//       },
//       message: "{VALUE} is not a valid email!",
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     min: 5,
//     max: 15,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   dob: {
//     type: Date,
//     required: true,
//   },
//   qualification: {
//     type: String,
//     required: true,
//   },
// });

const todoSchema = new mongoose.Schema({
  //   _id: {
  //     type: Number,
  //     required: true,
  //   },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("todos", todoSchema);
// module.exports = mongoose.model("users", userSchema);
