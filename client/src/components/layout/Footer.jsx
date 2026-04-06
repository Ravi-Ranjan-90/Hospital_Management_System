// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">About Healthmatrix</h3>
//             <p className="text-gray-400">
//               Providing quality healthcare services with modern facilities and experienced professionals.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/departments" className="text-gray-400 hover:text-white">
//                   Departments
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/doctors" className="text-gray-400 hover:text-white">
//                   Doctors
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/appointments" className="text-gray-400 hover:text-white">
//                   Appointments
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>123 Hospital Street</li>
//               <li>City, State 12345</li>
//               <li>Phone: (123) 456-7890</li>
//               <li>Email: info@hospital.com</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Emergency</h3>
//             <p className="text-gray-400">
//               24/7 Emergency Services<br />
//               Ambulance: (123) 456-7890
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700">
//           <p className="text-center text-gray-400">
//             © {new Date().getFullYear()} HealthMatrix. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              About Healthmatrix
            </h3>
            <p className="text-gray-400">
              Providing quality healthcare services with modern facilities and experienced professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-400 hover:text-white">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-400 hover:text-white">
                  Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>678 Hospital Street</li>
              <li>Jaipur, Rajasthan 12345</li>
              <li>Phone: 9876543212</li>
              <li>Email: info@hospital.com</li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Emergency
            </h3>
            <p className="text-gray-400">
              24/7 Emergency Services <br />
              Ambulance: 9876543211
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HealthMatrix. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}