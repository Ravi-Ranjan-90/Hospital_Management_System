
// import React, { useEffect, useState } from "react";
// import summaryApi from '../../common';

// const DoctorDashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await fetch(summaryApi.getAllAppointment.url);
//         const data = await res.json();
//         setAppointments(data);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);
//   const formatDate = (date) => {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = (`0${d.getMonth() + 1}`).slice(-2); // Add leading 0
//     const day = (`0${d.getDate()}`).slice(-2);        // Add leading 0
//     return `${year}-${month}-${day}`;
//   };

//   const today = formatDate(new Date());

//   const todayAppointments = appointments.filter(
//     (appt) => formatDate(appt.date) === today
//   );

//   const upcomingAppointments = appointments.filter(
//     (appt) => formatDate(appt.date) > today
//   );

//   const pendingAppointments = todayAppointments.filter(
//     (appt) => appt.status?.toLowerCase() === "pending"
//   );
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8">Doctor Dashboard</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
//           <div className="bg-blue-500 p-3 rounded-md text-white text-xl">📅</div>
//           <div>
//             <h2 className="text-gray-600">Today's Appointments</h2>
//             <p className="text-2xl font-bold">{todayAppointments.length}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
//           <div className="bg-green-500 p-3 rounded-md text-white text-xl">🔜</div>
//           <div>
//             <h2 className="text-gray-600">Upcoming Appointments</h2>
//             <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
//           <div className="bg-yellow-400 p-3 rounded-md text-white text-xl">⏳</div>
//           <div>
//             <h2 className="text-gray-600">Pending</h2>
//             <p className="text-2xl font-bold">{pendingAppointments.length}</p>
//           </div>
//         </div>
//       </div>

//       {/* Appointments List */}
//       {loading ? (
//         <p className="text-gray-700">Loading appointments...</p>
//       ) : (
//         <div className="space-y-6">
//           {appointments.length === 0 ? (
//             <p className="text-gray-600">No appointments for today.</p>
//           ) : (
//             appointments.map((appt) => (
//               <div
//                 key={appt._id}
//                 className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center justify-between"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {appt.name}
//                   </h2>
//                   <p className="text-gray-600">
//                     Date: {appt.date} | Time: {appt.time}
//                   </p>
//                   <p className="text-sm text-gray-500">Status: upcoming</p>
//                 </div>
//                 <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
//                   <button className="border px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
//                     View Patient History
//                   </button>
//                   <button className="border px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
//                     Reschedule
//                   </button>
//                   <button className="border px-4 py-2 rounded-md text-sm font-medium text-red-600 border-red-500 hover:bg-red-50">
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorDashboard;


import React, { useEffect, useState } from "react";
import summaryApi from '../../common';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch appointments (with JWT support)
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(summaryApi.getAllAppointment.url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // 🔥 important
          }
        });
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // ✅ Format date (YYYY-MM-DD)
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const today = formatDate(new Date());

  // ✅ Filters
  const todayAppointments = appointments.filter(
    (appt) => formatDate(appt.date) === today
  );

  const upcomingAppointments = appointments.filter(
    (appt) => formatDate(appt.date) > today
  );

  const pendingAppointments = todayAppointments.filter(
    (appt) => appt.status?.toLowerCase() === "pending"
  );

  // ✅ Status color helper
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "text-yellow-600";
      case "completed":
        return "text-green-600";
      case "cancelled":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Doctor Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-md text-white text-xl">📅</div>
          <div>
            <h2 className="text-gray-600">Today's Appointments</h2>
            <p className="text-2xl font-bold">{todayAppointments.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <div className="bg-green-500 p-3 rounded-md text-white text-xl">🔜</div>
          <div>
            <h2 className="text-gray-600">Upcoming Appointments</h2>
            <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <div className="bg-yellow-400 p-3 rounded-md text-white text-xl">⏳</div>
          <div>
            <h2 className="text-gray-600">Pending</h2>
            <p className="text-2xl font-bold">{pendingAppointments.length}</p>
          </div>
        </div>

      </div>

      {/* Appointments List */}
      {loading ? (
        <p className="text-gray-700">Loading appointments...</p>
      ) : (
        <div className="space-y-6">

          {appointments.length === 0 ? (
            <p className="text-gray-600">No appointments available.</p>
          ) : (
            appointments.map((appt) => (
              <div
                key={appt._id}
                className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {appt.name}
                  </h2>

                  <p className="text-gray-600">
                    Date: {formatDate(appt.date)} | Time: {appt.time}
                  </p>

                  <p className={`text-sm font-medium ${getStatusColor(appt.status)}`}>
                    Status: {appt.status || "unknown"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 md:mt-0">

                  <button className="border px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                    View Patient History
                  </button>

                  <button className="border px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                    Reschedule
                  </button>

                  <button className="border px-4 py-2 rounded-md text-sm font-medium text-red-600 border-red-500 hover:bg-red-50">
                    Cancel
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;