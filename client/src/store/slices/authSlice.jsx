// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Users, Phone, Building2 } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <div className="relative bg-blue-600">
//         <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               Welcome to HealthMatrix
//             </h1>
//             <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//               Providing quality healthcare services with modern facilities and experienced professionals.
//             </p>
//             <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
//               <div className="rounded-md shadow">
//                 <Link
//                   to="/appointments"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
//                 >
//                   Book Appointment
//                 </Link>
//               </div>
//               <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
//                 <Link
//                   to="/doctors"
//                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
//                 >
//                   Our Doctors
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Why Choose Us
//             </h2>
//             <p className="mt-4 text-lg text-gray-500">
//               Experience healthcare excellence with our comprehensive services
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//               <div className="flex flex-col items-center">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                   <Users className="h-6 w-6" />
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">Expert Doctors</h3>
//                 <p className="mt-2 text-base text-gray-500 text-center">
//                   Highly qualified and experienced medical professionals
//                 </p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                   <Building2 className="h-6 w-6" />
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">Modern Facilities</h3>
//                 <p className="mt-2 text-base text-gray-500 text-center">
//                   State-of-the-art medical equipment and facilities
//                 </p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                   <Calendar className="h-6 w-6" />
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">Easy Appointments</h3>
//                 <p className="mt-2 text-base text-gray-500 text-center">
//                   Simple and quick appointment booking system
//                 </p>
//               </div>

//               <div className="flex flex-col items-center">
//                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                   <Phone className="h-6 w-6" />
//                 </div>
//                 <h3 className="mt-6 text-lg font-medium text-gray-900">24/7 Emergency</h3>
//                 <p className="mt-2 text-base text-gray-500 text-center">
//                   Round-the-clock emergency medical services
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Departments Preview */}
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Our Departments
//             </h2>
//             <p className="mt-4 text-lg text-gray-500">
//               Specialized care across multiple medical disciplines
//             </p>
//           </div>

//           <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               { name: 'Cardiology', description: 'Expert heart care and treatments' },
//               { name: 'Neurology', description: 'Specialized brain and nerve care' },
//               { name: 'Orthopedics', description: 'Comprehensive bone and joint treatments' },
//               { name: 'Pediatrics', description: 'Specialized care for children' },
//               { name: 'Oncology', description: 'Cancer care and treatments' },
//               { name: 'Dental Care', description: 'Complete dental healthcare services' },
//             ].map((department) => (
//               <div
//                 key={department.name}
//                 className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="px-4 py-5 sm:p-6">
//                   <h3 className="text-lg font-medium text-gray-900">{department.name}</h3>
//                   <p className="mt-1 text-sm text-gray-500">{department.description}</p>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-4 sm:px-6">
//                   <Link
//                     to="/departments"
//                     className="text-sm font-medium text-blue-600 hover:text-blue-500"
//                   >
//                     Learn more <span aria-hidden="true">&rarr;</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-blue-600">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to get started?</span>
//             <span className="block text-blue-200">Book an appointment today.</span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//             <div className="inline-flex rounded-md shadow">
//               <Link
//                 to="/appointments"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
//               >
//                 Book Appointment
//               </Link>
//             </div>
//             <div className="ml-3 inline-flex rounded-md shadow">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Users, Phone, Building2 } from 'lucide-react';

// export default function Home() {

//   const features = [
//     {
//       icon: Users,
//       title: "Expert Doctors",
//       desc: "Highly qualified and experienced medical professionals"
//     },
//     {
//       icon: Building2,
//       title: "Modern Facilities",
//       desc: "State-of-the-art medical equipment and facilities"
//     },
//     {
//       icon: Calendar,
//       title: "Easy Appointments",
//       desc: "Simple and quick appointment booking system"
//     },
//     {
//       icon: Phone,
//       title: "24/7 Emergency",
//       desc: "Round-the-clock emergency medical services"
//     }
//   ];

//   const departments = [
//     { name: 'Cardiology', description: 'Expert heart care and treatments' },
//     { name: 'Neurology', description: 'Specialized brain and nerve care' },
//     { name: 'Orthopedics', description: 'Bone and joint treatments' },
//     { name: 'Pediatrics', description: 'Care for children' },
//     { name: 'Oncology', description: 'Cancer care and treatments' },
//     { name: 'Dental Care', description: 'Dental healthcare services' },
//   ];

//   return (
//     <div className="bg-white">

//       {/* Hero Section */}
//       <div className="bg-blue-600 text-center py-24 px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white">
//           Welcome to HealthMatrix
//         </h1>

//         <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
//           Providing quality healthcare services with modern facilities and experienced professionals.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
//           <Link
//             to="/appointments"
//             className="px-6 py-3 bg-white text-blue-600 rounded-md"
//           >
//             Book Appointment
//           </Link>

//           <Link
//             to="/doctors"
//             className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//           >
//             Our Doctors
//           </Link>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="py-12 bg-gray-50 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
//         <p className="mt-3 text-gray-500">
//           Experience healthcare excellence with our services
//         </p>

//         <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
//           {features.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="bg-blue-600 text-white p-3 rounded-md">
//                   <Icon />
//                 </div>
//                 <h3 className="mt-4 font-semibold">{item.title}</h3>
//                 <p className="text-gray-500 text-sm mt-2 text-center">{item.desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Departments */}
//       <div className="py-12 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">Our Departments</h2>
//         <p className="mt-3 text-gray-500">
//           Specialized care across disciplines
//         </p>

//         <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//           {departments.map((dept) => (
//             <div key={dept.name} className="bg-white shadow rounded-lg p-5 hover:shadow-lg">
//               <h3 className="font-semibold">{dept.name}</h3>
//               <p className="text-gray-500 text-sm mt-2">{dept.description}</p>

//               <Link
//                 to="/departments"
//                 className="text-blue-600 mt-3 inline-block"
//               >
//                 Learn more →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="bg-blue-600 text-center py-12 px-4">
//         <h2 className="text-3xl font-bold text-white">
//           Ready to get started?
//         </h2>
//         <p className="text-blue-200 mt-2">Book an appointment today.</p>

//         <div className="mt-6 flex justify-center gap-4">
//           <Link
//             to="/appointments"
//             className="px-5 py-3 bg-white text-blue-600 rounded-md"
//           >
//             Book Appointment
//           </Link>

//           <Link
//             to="/contact"
//             className="px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>

//     </div>
//   );
// }import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  role: null,              // ✅ ADD THIS
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;   // ✅ SET ROLE
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;                  // ✅ RESET ROLE
      state.isAuthenticated = false;
    },
  setUserRole: (state, action) => {   // ✅ ADD THIS
    state.role = action.payload;
  }
  }
});

export const { login, logout, setUserRole } = authSlice.actions;
export default authSlice.reducer;