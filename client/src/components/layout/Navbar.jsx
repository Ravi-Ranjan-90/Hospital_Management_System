// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../store/slices/authSlice";
// import logo from "./logo.png";

// export default function Navbar() {
//   const role = useSelector((state) => state.auth?.role); // ✅ SAFE
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("user");

//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <img src={logo} alt="logo" className="w-32" />

//         {/* Links */}
//         <div className="flex space-x-4 items-center">

//           {/* 🔓 NOT LOGGED IN */}
//           {!role && (
//             <>
//               <Link to="/" className="text-white">Home</Link>
//               <Link to="/departments" className="text-white">Departments</Link>
//               <Link to="/doctors" className="text-white">Doctors</Link>
//               <Link to="/appointments" className="text-white">Appointments</Link>
//               <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
//                 Login
//               </Link>
//             </>
//           )}

//           {/* 👤 PATIENT */}
//           {role === "patient" && (
//             <>
//               <Link to="/" className="text-white">Home</Link>
//               <Link to="/appointments" className="text-white">Appointments</Link>
//               <Link to="/patient/dashboard" className="text-white">
//                 Dashboard
//               </Link>
//               <button onClick={handleLogout} className="text-white">
//                 Logout
//               </button>
//             </>
//           )}

//           {/* 👨‍⚕️ DOCTOR */}
//           {role === "doctor" && (
//             <>
//               <Link to="/doctor/dashboard" className="text-white">
//                 Doctor Dashboard
//               </Link>
//               <button onClick={handleLogout} className="text-white">
//                 Logout
//               </button>
//             </>
//           )}

//           {/* 👨‍💼 ADMIN */}
//           {role === "admin" && (
//             <>
//               <Link to="/admin/dashboard" className="text-white">
//                 Admin Dashboard
//               </Link>
//               <button onClick={handleLogout} className="text-white">
//                 Logout
//               </button>
//             </>
//           )}

//           {/* 🧾 RECEPTIONIST */}
//           {role === "receptionist" && (
//             <>
//               <Link to="/receptionist/dashboard" className="text-white">
//                 Receptionist Dashboard
//               </Link>
//               <button onClick={handleLogout} className="text-white">
//                 Logout
//               </button>
//             </>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import logo from "./logo.png";

export default function Navbar() {
  const role = useSelector((state) => state.auth?.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* 🔷 Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full shadow-md" />
          <h1 className="text-white text-xl font-semibold tracking-wide">
            MediCare
          </h1>
        </div>

        {/* 🔗 Links */}
        <div className="flex items-center gap-6 text-sm font-medium">

          {/* 🔓 NOT LOGGED IN */}
          {!role && (
            <>
              <Link className="text-white hover:text-gray-200 transition duration-200" to="/">
                Home
              </Link>
              <Link className="text-white hover:text-gray-200 transition duration-200" to="/departments">
                Departments
              </Link>
              <Link className="text-white hover:text-gray-200 transition duration-200" to="/doctors">
                Doctors
              </Link>
              <Link className="text-white hover:text-gray-200 transition duration-200" to="/appointments">
                Appointments
              </Link>

              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-1.5 rounded-full shadow-md hover:bg-gray-100 transition duration-200"
              >
                Login
              </Link>
            </>
          )}

          {/* 👤 PATIENT */}
          {role === "patient" && (
            <>
              <Link className="text-white hover:text-gray-200" to="/">Home</Link>
              <Link className="text-white hover:text-gray-200" to="/appointments">Appointments</Link>
              <Link className="text-white hover:text-gray-200" to="/patient/dashboard">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1.5 rounded-full text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* 👨‍⚕️ DOCTOR */}
          {role === "doctor" && (
            <>
              <Link className="text-white hover:text-gray-200" to="/doctor/dashboard">
                Doctor Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1.5 rounded-full text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* 👨‍💼 ADMIN */}
          {role === "admin" && (
            <>
              <Link className="text-white hover:text-gray-200" to="/admin/dashboard">
                Admin Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1.5 rounded-full text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* 🧾 RECEPTIONIST */}
          {role === "receptionist" && (
            <>
              <Link className="text-white hover:text-gray-200" to="/receptionist/dashboard">
                Receptionist Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1.5 rounded-full text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}