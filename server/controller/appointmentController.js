
// const Appointment = require("../models/Appointment");
// exports.bookAppointment = async (req, res) => {
//   try {
//     const { doctor, department, email, phone, date, time, reason } = req.body;

//     const newAppointment = await Appointment.create({
//       patient: req.user._id, // from JWT auth
//       doctor,
//       department,
//       email,
//       phone,
//       date,
//       time,
//       reason,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Appointment booked successfully",
//       appointment: newAppointment
//     });

//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong", error });
//   }
// };

// // Get all appointments for a doctor
// exports.getDoctorAppointments = async (req, res) => {
//   try {
//     const doctorAppointments = await Appointment.find({ doctor: req.user._id })
//       .populate("patient", "name email");

//     res.status(200).json(doctorAppointments);
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // Get all appointments for a patient
// exports.getPatientAppointments = async (req, res) => {
//   try {
//     const patientAppointments = await Appointment.find({ patient: req.user._id })
//       .populate("doctor", "name email");

//     res.status(200).json(patientAppointments);
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

const Appointment = require("../models/appointment");

// @desc Book appointment
exports.bookAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ success: true, message: "Appointment booked successfully." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc Get all appointments (for current user or admin)
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAppointmentsByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const appointments = await Appointment.find({ patientId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
