

// import React, { useEffect, useState } from 'react';
// import summaryApi from '../../common';
// const AdminDoctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [isAddingDoctor, setIsAddingDoctor] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     image: '',
//     specialization: '',
//     department: '',
//     experience: '',
//     email: '',
//     phone: ''
//   });

//   const fetchDoctors = async () => {
//     try {
//       const res = await fetch(summaryApi.getDoctor.url);
//       const data = await res.json();
//       setDoctors(data);
//     } catch (err) {
//       console.error('Error fetching doctors:', err);
//     }
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(summaryApi.addDoctor.url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!res.ok) throw new Error('Failed to add doctor');

//       const newDoctor = await res.json();
//       setDoctors([...doctors, newDoctor]);
//       setIsAddingDoctor(false);
//       setFormData({
//         name: '',
//         image: '',
//         specialization: '',
//         department: '',
//         experience: '',
//         email: '',
//         phone: ''
//       });
//     } catch (err) {
//       console.error('Error adding doctor:', err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Doctors</h2>
//       <button
//         onClick={() => setIsAddingDoctor(true)}
//         className="px-4 py-2 mb-6 text-white bg-blue-600 rounded hover:bg-blue-700"
//       >
//         Add Doctor
//       </button>

//       {isAddingDoctor && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white rounded shadow-lg w-[90%] max-w-md max-h-[90vh] flex flex-col">
      
//       {/* Header */}
//       <div className="p-4 border-b">
//         <h3 className="text-xl font-bold">Add New Doctor</h3>
//       </div>

//       {/* Scrollable Form Content */}
//       <div className="overflow-y-auto p-4 space-y-4 flex-1">
//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           {[
//             { name: 'name', label: 'Name' },
//             { name: 'image', label: 'Image URL' },
//             { name: 'specialization', label: 'Specialization' },
//             { name: 'department', label: 'Department' },
//             { name: 'experience', label: 'Experience (Years)', type: 'number' },
//             { name: 'email', label: 'Email', type: 'email' },
//             { name: 'phone', label: 'Phone' },
//           ].map(({ name, label, type = 'text' }) => (
//             <div key={name}>
//               <label className="block text-sm font-medium text-gray-700">{label}</label>
//               <input
//                 type={type}
//                 name={name}
//                 value={formData[name]}
//                 onChange={handleFormChange}
//                 required
//                 className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           ))}
//            <div className="p-4 border-t flex justify-end gap-2">
//         <button
//           type="button"
//           onClick={() => setIsAddingDoctor(false)}
//           className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
//         >
//           Cancel
//         </button>
//         <button
//           // form="yourFormIdIfYouWant"
//           type="submit"
//           className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//         >
//           Add
//         </button>
//       </div>
//         </form>
//       </div>

//       {/* Buttons - Fixed at Bottom */}
//       <div className="p-4 border-t flex justify-end gap-2">
//         <button
//           type="button"
//           onClick={() => setIsAddingDoctor(false)}
//           className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
//         >
//           Cancel
//         </button>
//         <button
//           form="yourFormIdIfYouWant"
//           type="submit"
//           className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {doctors.map((doc) => (
//           <div key={doc._id} className="p-4 border rounded shadow">
//             <div className="h-64 w-full overflow-hidden">
//                 <img
//                   src={doc.image || 'https://via.placeholder.com/150'}
//                   alt={doc.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             <h4 className="text-lg font-semibold">{doc.name}</h4>
//             <p><strong>Specialization:</strong> {doc.specialization}</p>
//             <p><strong>Department:</strong> {doc.department}</p>
//             <p><strong>Experience:</strong> {doc.experience} years</p>
//             <p><strong>Email:</strong> {doc.email}</p>
//             <p><strong>Phone:</strong> {doc.phone}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDoctors;

import React, { useEffect, useState } from 'react';
import summaryApi from '../../common';

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ added loading state

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    specialization: '',
    department: '',
    experience: '',
    email: '',
    phone: ''
  });

  const fetchDoctors = async () => {
    try {
      const res = await fetch(summaryApi.getDoctor.url);
      const data = await res.json();
      setDoctors(data);
    } catch (err) {
      console.error('Error fetching doctors:', err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ start loading

    try {
      const res = await fetch(summaryApi.addDoctor.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` // ✅ JWT added
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to add doctor');

      const newDoctor = await res.json();
      setDoctors([...doctors, newDoctor]);
      setIsAddingDoctor(false);

      setFormData({
        name: '',
        image: '',
        specialization: '',
        department: '',
        experience: '',
        email: '',
        phone: ''
      });
    } catch (err) {
      console.error('Error adding doctor:', err);
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Doctors</h2>

      <button
        onClick={() => setIsAddingDoctor(true)}
        className="px-4 py-2 mb-6 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add Doctor
      </button>

      {isAddingDoctor && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded shadow-lg w-[90%] max-w-md max-h-[90vh] flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold">Add New Doctor</h3>
      </div>

      {/* Scrollable Form Content */}
      <div className="overflow-y-auto p-4 space-y-4 flex-1">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {[
            { name: 'name', label: 'Name' },
            { name: 'image', label: 'Image URL' },
            { name: 'specialization', label: 'Specialization' },
            { name: 'department', label: 'Department' },
            { name: 'experience', label: 'Experience (Years)', type: 'number' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'phone', label: 'Phone' },
          ].map(({ name, label, type = 'text' }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleFormChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}

          {/* ✅ Buttons - kept only ONE correct section */}
          <div className="p-4 border-t flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddingDoctor(false)}
              className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>

      {/* ❌ Removed duplicate button section (was causing bug) */}
    </div>
  </div>
)}

      {/* {isAddingDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] ">
            <h3 className="text-xl font-bold mb-4 ">Add New Doctor</h3>
            <form onSubmit={handleFormSubmit} className=" flex-1 space-y-4 ">
              {[
                { name: 'name', label: 'Name' },
                { name: 'image', label: 'Image URL' },
                { name: 'specialization', label: 'Specialization' },
                { name: 'department', label: 'Department' },
                { name: 'experience', label: 'Experience (Years)', type: 'number' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Phone' }
              ].map(({ name, label, type = 'text' }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleFormChange}
                    required
                    className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}

              <div className="border-t flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddingDoctor(false)}
                  className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div key={doc._id} className="p-4 border rounded shadow">
            <div className="h-64 w-full overflow-hidden">
                <img
                  src={doc.image || 'https://via.placeholder.com/150'}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>

            {/* <img
              src={doc.image || 'https://via.placeholder.com/150'}
              alt={doc.name}
              className="w-full h-40 object-cover rounded mb-3"
            /> */}

            <h4 className="text-lg font-semibold">{doc.name}</h4>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Department:</strong> {doc.department}</p>
            <p><strong>Experience:</strong> {doc.experience} years</p>
            <p><strong>Email:</strong> {doc.email}</p>
            <p><strong>Phone:</strong> {doc.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDoctors;