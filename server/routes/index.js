const express = require("express")
const router = express.Router()
const userSignUpController = require("../controller/userSignUp.js")
const userSignInController = require("../controller/userSignIn.js")
const userDetailsController = require("../controller/userDetails.js")
// const protect = require("../middleware/authMiddleware"); // Adjust path as needed

const { getAllDoctors, addDoctor } = require('../controller/adminController');
const { bookAppointment, getAllAppointments } = require("../controller/appointmentController");
const { getAppointmentsByPatientId } = require('../controller/appointmentController');
// const {
//     bookAppointment,
//     getDoctorAppointments,
//     getPatientAppointments
//   } = require('../controller/appointmentController');
// const getCenterController = require("../controller/getCenter.js")
const userLogout =require("../controller/userLogout.js")
const authToken = require("../middleware/authToken")
// const uploadCenterDetailsController = require("../controller/uploadCenterDetails.js")
router.post("/signup",userSignUpController);
router.post("/signin",userSignInController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout)

router.get('/get-doctors',getAllDoctors);
router.post('/add-doctors',addDoctor);

router.post("/book", bookAppointment);
router.get("/all", getAllAppointments);
router.get('/all/:patientId', getAppointmentsByPatientId);

// router.post("/book", authToken, bookAppointment);
// router.get("/get-doctor-appointment", authToken, getDoctorAppointments);
// router.get("/get-patient-patient",  getPatientAppointments);
// router.get("/patient/history", authToken, getPatientAppointments);
// router.get("/doctor/appointments", authToken, getDoctorAppointments);

// // center
// router.post("/upload-center-details",authToken,uploadCenterDetailsController)
// router.get("/get-all-center",getCenterController)

module.exports = router;
