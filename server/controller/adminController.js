// const Doctor = require("../models/Doctor");
// const User = require("../models/User");

// exports.addDoctor = async (req, res) => {
//   try {
//     const { name, email, password, specialization, experience, fees } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "Doctor already exists" });

//     const newUser = await User.create({ name, email, password, role: "doctor" });
//     await Doctor.create({ name, specialization, experience, fees, userId: newUser._id });

//     res.status(201).json({ message: "Doctor added successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

const Doctor = require('../models/doctor');

// Controller: Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching doctors", error: err });
  }
};

// Controller: Add a new doctor
const addDoctor = async (req, res) => {
  try {
    const { name, specialization, image, department, experience, email, phone } = req.body;

    // Check for duplicate email
    console.log("Received data:", req.body);
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists with this email" });
    }

    const newDoctor = new Doctor({
      name,
      specialization,
      image,
      department,
      experience,
      email,
      phone
    });

    await newDoctor.save();
    res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (err) {
    res.status(500).json({ message: "Error adding doctor", error: err });
  }
};

module.exports = { getAllDoctors, addDoctor };
