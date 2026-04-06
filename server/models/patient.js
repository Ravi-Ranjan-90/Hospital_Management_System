const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  age: Number,
  gender: String,
  contact: String
});

module.exports = mongoose.model("Patient", patientSchema);
