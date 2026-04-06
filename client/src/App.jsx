import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import { ToastContainer } from 'react-toastify';
// import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/Signup';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import ReceptionistDashboard from './pages/receptionist/Dashboard';
import { setUserRole } from './store/slices/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      dispatch(setUserRole(role));
    }
  }, [dispatch]);
  return (
    // <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
          <main className="flex-grow pt-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointments" element={<Appointments />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/patient/dashboard" element={<PatientDashboard />} />
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/receptionist/dashboard" element={<ReceptionistDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
     // </Provider>
  );
}

export default App;

// function App() {
//   return <h1>APP RUNNING</h1>;
// }

// export default App;