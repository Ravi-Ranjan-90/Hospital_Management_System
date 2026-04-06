// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Users, Stethoscope, Brain, Bone, Baby, Heart, Pill } from 'lucide-react';

// const departments = [
//   {
//     name: 'Cardiology',
//     icon: Heart,
//     description: 'Expert heart care and treatments, including advanced cardiac procedures, heart disease prevention, and rehabilitation programs.',
//     services: [
//       'Cardiac Surgery',
//       'Heart Disease Treatment',
//       'ECG & Echo Tests',
//       'Cardiac Rehabilitation'
//     ]
//   },
//   {
//     name: 'Neurology',
//     icon: Brain,
//     description: 'Specialized care for disorders of the nervous system, brain, and spine with state-of-the-art diagnostic and treatment facilities.',
//     services: [
//       'Neurological Surgery',
//       'Stroke Treatment',
//       'Epilepsy Management',
//       'Movement Disorders'
//     ]
//   },
//   {
//     name: 'Orthopedics',
//     icon: Bone,
//     description: 'Comprehensive care for bone and joint conditions, sports injuries, and rehabilitation services.',
//     services: [
//       'Joint Replacement',
//       'Sports Medicine',
//       'Spine Surgery',
//       'Fracture Care'
//     ]
//   },
//   {
//     name: 'Pediatrics',
//     icon: Baby,
//     description: 'Specialized healthcare for children from newborns to adolescents, including preventive care and treatment of childhood diseases.',
//     services: [
//       'Child Healthcare',
//       'Vaccination',
//       'Growth Monitoring',
//       'Pediatric Surgery'
//     ]
//   },
//   {
//     name: 'Internal Medicine',
//     icon: Stethoscope,
//     description: 'Comprehensive adult healthcare services, including diagnosis and treatment of various medical conditions.',
//     services: [
//       'General Check-ups',
//       'Disease Management',
//       'Preventive Care',
//       'Health Screening'
//     ]
//   },
//   {
//     name: 'Pharmacy',
//     icon: Pill,
//     description: '24/7 pharmacy services with a wide range of medications and healthcare products.',
//     services: [
//       'Prescription Filling',
//       'Medicine Counseling',
//       'Healthcare Products',
//       'Home Delivery'
//     ]
//   }
// ];

// export default function Departments() {
//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Our Departments
//           </h1>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//             Specialized medical departments equipped with modern technology and expert healthcare professionals
//           </p>
//         </div>

//         {/* Departments Grid */}
//         <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
//           {departments.map((dept) => (
//             <div
//               key={dept.name}
//               className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="p-6">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                       <dept.icon className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
//                   </div>
//                 </div>

//                 <p className="mt-4 text-gray-600">
//                   {dept.description}
//                 </p>

//                 <div className="mt-6">
//                   <h3 className="text-lg font-medium text-gray-900">Services</h3>
//                   <ul className="mt-2 grid grid-cols-2 gap-4">
//                     {dept.services.map((service) => (
//                       <li
//                         key={service}
//                         className="flex items-center text-gray-600"
//                       >
//                         <svg
//                           className="h-5 w-5 text-blue-600 mr-2"
//                           fill="none"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         {service}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-6">
//                   <Link
//                     to="/appointments"
//                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
//                   >
//                     Book Appointment
//                   </Link>
//                   <Link
//                     to="/doctors"
//                     className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//                   >
//                     View Doctors
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Emergency Contact */}
//         <div className="mt-12 bg-blue-600 rounded-lg shadow-xl">
//           <div className="px-6 py-8 sm:p-10">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-white">24/7 Emergency Services</h2>
//               <p className="mt-3 text-lg text-blue-100">
//                 Our emergency department is always open and ready to provide immediate medical attention
//               </p>
//               <div className="mt-6">
//                 <div className="text-xl font-bold text-white">Emergency Hotline</div>
//                 <div className="text-2xl font-bold text-white mt-2">(123) 456-7890</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Brain, Bone, Baby, Heart, Pill } from 'lucide-react';

const departments = [
  {
    name: 'Cardiology',
    icon: Heart,
    description: 'Expert heart care and treatments, including advanced cardiac procedures, heart disease prevention, and rehabilitation programs.',
    services: [
      'Cardiac Surgery',
      'Heart Disease Treatment',
      'ECG & Echo Tests',
      'Cardiac Rehabilitation'
    ]
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Specialized care for disorders of the nervous system, brain, and spine with state-of-the-art diagnostic and treatment facilities.',
    services: [
      'Neurological Surgery',
      'Stroke Treatment',
      'Epilepsy Management',
      'Movement Disorders'
    ]
  },
  {
    name: 'Orthopedics',
    icon: Bone,
    description: 'Comprehensive care for bone and joint conditions, sports injuries, and rehabilitation services.',
    services: [
      'Joint Replacement',
      'Sports Medicine',
      'Spine Surgery',
      'Fracture Care'
    ]
  },
  {
    name: 'Pediatrics',
    icon: Baby,
    description: 'Specialized healthcare for children from newborns to adolescents, including preventive care and treatment of childhood diseases.',
    services: [
      'Child Healthcare',
      'Vaccination',
      'Growth Monitoring',
      'Pediatric Surgery'
    ]
  },
  {
    name: 'Internal Medicine',
    icon: Stethoscope,
    description: 'Comprehensive adult healthcare services, including diagnosis and treatment of various medical conditions.',
    services: [
      'General Check-ups',
      'Disease Management',
      'Preventive Care',
      'Health Screening'
    ]
  },
  {
    name: 'Pharmacy',
    icon: Pill,
    description: '24/7 pharmacy services with a wide range of medications and healthcare products.',
    services: [
      'Prescription Filling',
      'Medicine Counseling',
      'Healthcare Products',
      'Home Delivery'
    ]
  }
];

export default function Departments() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Departments
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Specialized medical departments equipped with modern technology and expert healthcare professionals
          </p>
        </div>

        {/* Departments Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {departments.map((dept) => {
            const Icon = dept.icon; // ✅ cleaner usage

            return (
              <div
                key={dept.name}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">

                  {/* Title */}
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="ml-4 text-2xl font-bold text-gray-900">
                      {dept.name}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-600">
                    {dept.description}
                  </p>

                  {/* Services */}
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Services</h3>

                    <ul className="mt-2 grid grid-cols-2 gap-4">
                      {dept.services.map((service) => (
                        <li key={service} className="flex items-center text-gray-600">
                          <svg
                            className="h-5 w-5 text-blue-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4 flex-wrap">
                    <Link
                      to="/appointments"
                      state={{ department: dept.name }} // 🔥 pass department
                      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Book Appointment
                    </Link>

                    <Link
                      to="/doctors"
                      state={{ department: dept.name }} // 🔥 useful filter
                      className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50"
                    >
                      View Doctors
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Section */}
        <div className="mt-12 bg-blue-600 rounded-lg shadow-xl">
          <div className="px-6 py-8 text-center">
            <h2 className="text-2xl font-bold text-white">24/7 Emergency Services</h2>
            <p className="mt-3 text-lg text-blue-100">
              Our emergency department is always open and ready to provide immediate medical attention
            </p>

            <div className="mt-6">
              <div className="text-xl font-bold text-white">Emergency Hotline</div>
              <div className="text-2xl font-bold text-white mt-2">(123) 456-7890</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}