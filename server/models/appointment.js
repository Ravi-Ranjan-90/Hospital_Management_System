// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   patientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Patient', // Ensure you have a Patient model
//     required: true,
//   },
//   doctor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   department: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   reason: {
//     type: String,
//     required: true,
//   },
//   isPaid: {
//     type: Boolean,
//     default: false,
//   },
// }, {
//   timestamps: true,
// });
// module.exports = mongoose.model('Appointment', appointmentSchema);

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // optional if logged-in user
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);

