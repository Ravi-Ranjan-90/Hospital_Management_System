// const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   department: {
//     type: String,
//     required: true
//   },
//   phone: String,
//   email: String,
//   image: String,
//   specialization: String,
//   experience: String,
//   availableDays: [String], // e.g., ['Monday', 'Wednesday']
//   availableTime: String // e.g., "10:00 AM - 4:00 PM"
// }, { timestamps: true });

// module.exports = mongoose.model('Doctor', doctorSchema);


const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  specialization: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', doctorSchema);
