// // import React from 'react';

// import React, { useEffect, useState } from 'react';
// import summaryApi from '../common';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Phone } from 'lucide-react';

// const doctorsi = [
//   {
//     id: 1,
//     name: 'Dr. Sarah Johnson',
//     specialization: 'Cardiologist',
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     experience: '15+ years',
//     email: 'sarah.johnson@hospital.com',
//     phone: '+1 234 567 8901'
//   },
//   {
//     id: 2,
//     name: 'Dr. Michael Chen',
//     specialization: 'Neurologist',
//     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     experience: '12+ years',
//     email: 'michael.chen@hospital.com',
//     phone: '+1 234 567 8902'
//   },
//   {
//     id: 3,
//     name: 'Dr. Emily Brown',
//     specialization: 'Pediatrician',
//     image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     experience: '10+ years',
//     email: 'emily.brown@hospital.com',
//     phone: '+1 234 567 8903'
//   },
//   {
//     id: 4,
//     name: 'Dr. James Wilson',
//     specialization: 'Orthopedic Surgeon',
//     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     experience: '18+ years',
//     email: 'james.wilson@hospital.com',
//     phone: '+1 234 567 8904'
//   }
// ];

// export default function Doctors() {
//   const navigate = useNavigate();
//   const [doctors, setDoctors] = useState([]);
//   const fetchDoctors = async () => {
//       try {
//         const res = await fetch(summaryApi.getDoctor.url);
//         const data = await res.json();
//         setDoctors(data);
//         console.log(data)
//       } catch (err) {
//         console.error('Error fetching doctors:', err);
//       }
//     };
  
//     useEffect(() => {
//       fetchDoctors();
//     }, []);

//   const handleBookAppointment = (doctor: any) => {
//     navigate('/appointments', { state: { doctor } });
//   };

//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Medical Team</h1>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//             Meet our team of highly qualified and experienced medical professionals
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {doctors.map((doctor) => (
//             <div
//               key={doctor.id}
//               className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="h-64 w-full overflow-hidden">
//                 <img
//                   src={doctor.image}
//                   alt={doctor.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-1">
//                   {doctor.name}
//                 </h3>
//                 <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
//                 <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
                
//                 <div className="space-y-2">
//                   <div className="flex items-center text-gray-600">
//                     <Mail className="h-5 w-5 mr-2" />
//                     <span>{doctor.email}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Phone className="h-5 w-5 mr-2" />
//                     <span>{doctor.phone}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleBookAppointment(doctor)}
//                   className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 w-full text-center"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';

import React, { useEffect, useState } from 'react';
import summaryApi from '../common';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const doctorsi = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '15+ years',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 234 567 8901'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialization: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '12+ years',
    email: 'michael.chen@hospital.com',
    phone: '+1 234 567 8902'
  },
  {
    id: 3,
    name: 'Dr. Emily Brown',
    specialization: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '10+ years',
    email: 'emily.brown@hospital.com',
    phone: '+1 234 567 8903'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialization: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '18+ years',
    email: 'james.wilson@hospital.com',
    phone: '+1 234 567 8904'
  }
];

export default function Doctors() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const fetchDoctors = async () => {
      try {
        const res = await fetch(summaryApi.getDoctor.url);
        const data = await res.json();
        setDoctors(data);
        console.log(data)
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };
  
    useEffect(() => {
      fetchDoctors();
    }, []);

  const handleBookAppointment = (doctor) => {
    navigate('/appointments', { state: { doctor } });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Medical Team</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>{doctor.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 w-full text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}