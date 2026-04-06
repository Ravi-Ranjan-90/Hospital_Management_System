// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useLocation } from 'react-router-dom';
// import { Calendar, Clock, User, FileText } from 'lucide-react';
// import summaryApi from '../common';
// import { toast } from "react-toastify";

// interface AppointmentForm {
//   name: string;
//   email: string;
//   phone: string;
//   date: string;
//   time: string;
//   department: string;
//   doctor: string;
//   reason: string;
// }

// export default function Appointments() {
//   const location = useLocation();
//   const selectedDoctor = location.state?.doctor;
  
//   const { register, handleSubmit, formState: { errors } } = useForm<AppointmentForm>({
//     defaultValues: {
//       doctor: selectedDoctor?.id || ''
//     }
//   });
//   const onSubmit = async (data: AppointmentForm) => {
//     const patientId = localStorage.getItem("patientId");
  
//     if (!patientId) {
//       toast.error("Patient ID not found. Please log in again.");
//       // alert("Patient ID not found. Please log in again.");
//       return;
//     }
  
//     const appointmentData = {
//       ...data,
//       doctorId: selectedDoctor?.id || '', // send doctorId separately if needed by backend
//       patientId: patientId,               // ✅ add patientId here
//     };
  
//     try {
//       const response = await fetch(summaryApi.bookAppointment.url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(appointmentData),
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         toast.success('Appointment booked successfully!');
//         // alert('Appointment booked successfully');
//         console.log(result);
//       } else {
//         console.error(result.message);
//         toast.error(`Booking failed: ${result.message}`);
//         // alert('Booking failed: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Something went wrong. Please try again.');
//       // alert('Something went wrong');
//     }
//   };
  
  

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
//           <p className="mt-3 text-xl text-gray-500">
//             {selectedDoctor ? `Schedule your visit with ${selectedDoctor.name}` : 'Schedule your visit with our medical professionals'}
//           </p>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     {...register('name', { required: 'Name is required' })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   />
//                   {errors.name && (
//                     <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <div className="mt-1">
//                   <input
//                     type="email"
//                     {...register('email', { 
//                       required: 'Email is required',
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: 'Invalid email address'
//                       }
//                     })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone</label>
//                 <div className="mt-1">
//                   <input
//                     type="tel"
//                     {...register('phone', { required: 'Phone number is required' })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   />
//                   {errors.phone && (
//                     <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Department</label>
//                 <div className="mt-1">
//                   <select
//                     {...register('department', { required: 'Please select a department' })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   >
//                     <option value="">Select Department</option>
//                     <option value="cardiology">Cardiology</option>
//                     <option value="neurology">Neurology</option>
//                     <option value="orthopedics">Orthopedics</option>
//                     <option value="pediatrics">Pediatrics</option>
//                   </select>
//                   {errors.department && (
//                     <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
//                   )}
//                 </div>
//               </div>

//               {selectedDoctor ? (
//   <div>
//     <label className="block text-sm font-medium text-gray-700">Doctor</label>
//     <div className="mt-1">
//       <input
//         type="text"
//         {...register('doctor', { required: 'Doctor name is required' })}
//         value={selectedDoctor.name}
//         readOnly
//         className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//       />
//     </div>
//   </div>
// ) : (
//   <div>
//     <label className="block text-sm font-medium text-gray-700">Doctor</label>
//     <div className="mt-1">
//       <select
//         {...register('doctor', { required: 'Please select a doctor' })}
//         className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//       >
//         <option value="">Select Doctor</option>
//         <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
//         <option value="Dr. Michael Chen">Dr. Michael Chen</option>
//         <option value="Dr. Emily Brown">Dr. Emily Brown</option>
//         <option value="Dr. James Wilson">Dr. James Wilson</option>
//       </select>
//       {errors.doctor && (
//         <p className="mt-1 text-sm text-red-600">{errors.doctor.message}</p>
//       )}
//     </div>
//   </div>
// )}


//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
//                 <div className="mt-1">
//                   <input
//                     type="date"
//                     {...register('date', { required: 'Please select a date' })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   />
//                   {errors.date && (
//                     <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
//                 <div className="mt-1">
//                   <select
//                     {...register('time', { required: 'Please select a time' })}
//                     className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   >
//                     <option value="">Select Time</option>
//                     <option value="09:00">09:00 AM</option>
//                     <option value="10:00">10:00 AM</option>
//                     <option value="11:00">11:00 AM</option>
//                     <option value="14:00">02:00 PM</option>
//                     <option value="15:00">03:00 PM</option>
//                     <option value="16:00">04:00 PM</option>
//                   </select>
//                   {errors.time && (
//                     <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
//               <div className="mt-1">
//                 <textarea
//                   {...register('reason', { required: 'Please provide a reason for your visit' })}
//                   rows={4}
//                   className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                 ></textarea>
//                 {errors.reason && (
//                   <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, User, FileText } from 'lucide-react';
import summaryApi from '../common';
import { toast } from "react-toastify";

export default function Appointments() {
  const location = useLocation();
  const selectedDoctor = location.state?.doctor;

  const [loading, setLoading] = useState(false); // ✅ added loading

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      doctor: selectedDoctor?.id || ''
    }
  });

  const onSubmit = async (data) => {
    const patientId = localStorage.getItem("patientId");

    if (!patientId) {
      toast.error("Patient ID not found. Please log in again.");
      return;
    }

    const appointmentData = {
      ...data,
      doctorId: selectedDoctor?.id || '',
      patientId: patientId,
    };

    setLoading(true);

    try {
      const response = await fetch(summaryApi.bookAppointment.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}` // 🔥 important
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Appointment booked successfully!');
        console.log(result);
      } else {
        console.error(result.message);
        toast.error(`Booking failed: ${result.message}`);
      }

    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
          <p className="mt-3 text-xl text-gray-500">
            {selectedDoctor
              ? `Schedule your visit with ${selectedDoctor.name}`
              : 'Schedule your visit with our medical professionals'}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="shadow-sm w-full border rounded-md p-2"
                />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="shadow-sm w-full border rounded-md p-2"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="shadow-sm w-full border rounded-md p-2"
                />
                {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  {...register('department', { required: 'Please select a department' })}
                  className="shadow-sm w-full border rounded-md p-2"
                >
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
                {errors.department && <p className="text-red-600">{errors.department.message}</p>}
              </div>

              {/* Doctor */}
              {selectedDoctor ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Doctor</label>
                  <input
                    type="text"
                    value={selectedDoctor.name}
                    readOnly
                    className="shadow-sm w-full border rounded-md p-2"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Doctor</label>
                  <select
                    {...register('doctor', { required: 'Please select a doctor' })}
                    className="shadow-sm w-full border rounded-md p-2"
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                    <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                    <option value="Dr. Emily Brown">Dr. Emily Brown</option>
                    <option value="Dr. James Wilson">Dr. James Wilson</option>
                  </select>
                  {errors.doctor && <p className="text-red-600">{errors.doctor.message}</p>}
                </div>
              )}

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  {...register('date', { required: 'Please select a date' })}
                  className="shadow-sm w-full border rounded-md p-2"
                />
                {errors.date && <p className="text-red-600">{errors.date.message}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <select
                  {...register('time', { required: 'Please select a time' })}
                  className="shadow-sm w-full border rounded-md p-2"
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
                {errors.time && <p className="text-red-600">{errors.time.message}</p>}
              </div>

            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
              <textarea
                {...register('reason', { required: 'Please provide a reason' })}
                rows={4}
                className="shadow-sm w-full border rounded-md p-2"
              />
              {errors.reason && <p className="text-red-600">{errors.reason.message}</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}