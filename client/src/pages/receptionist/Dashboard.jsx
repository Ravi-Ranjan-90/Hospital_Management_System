// import React from 'react';

// const payments = [
//   {
//     id: 1,
//     patient: 'John Doe',
//     amount: 150,
//     date: '2024-02-20',
//     type: 'Consultation',
//     status: 'Paid'
//   },
//   {
//     id: 2,
//     patient: 'Jane Smith',
//     amount: 300,
//     date: '2024-02-20',
//     type: 'Lab Tests',
//     status: 'Pending'
//   },
//   {
//     id: 3,
//     patient: 'Mike Johnson',
//     amount: 500,
//     date: '2024-02-19',
//     type: 'Treatment',
//     status: 'Paid'
//   }
// ];

// export default function ReceptionistDashboard() {
//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-gray-900">Receptionist Dashboard</h1>

//         {/* Payment Management */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Payment Management</h2>

//           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Patient
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Amount
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {payments.map((payment) => (
//                   <tr key={payment.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{payment.patient}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{payment.type}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">${payment.amount}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{payment.date}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {payment.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       {payment.status === 'Pending' ? (
//                         <button className="text-blue-600 hover:text-blue-900">
//                           Mark as Paid
//                         </button>
//                       ) : (
//                         <button className="text-gray-600 hover:text-gray-900">
//                           View Receipt
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
//                     💰
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       Today's Collections
//                     </dt>
//                     <dd className="flex items-baseline">
//                       <div className="text-2xl font-semibold text-gray-900">
//                         $950
//                       </div>
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
//                     ⏳
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       Pending Payments
//                     </dt>
//                     <dd className="flex items-baseline">
//                       <div className="text-2xl font-semibold text-gray-900">
//                         5
//                       </div>
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
//                     ✓
//                   </div>
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">
//                       Completed Payments
//                     </dt>
//                     <dd className="flex items-baseline">
//                       <div className="text-2xl font-semibold text-gray-900">
//                         12
//                       </div>
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import summaryApi from '../../common';

export default function ReceptionistDashboard() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch payments from backend
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch(summaryApi.getAllPayments?.url || "", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // 🔥 important
          }
        });

        const data = await res.json();
        setPayments(data || []);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // ✅ Mark as Paid
  const handleMarkPaid = async (id) => {
    try {
      const res = await fetch(`${summaryApi.updatePayment?.url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ status: "Paid" })
      });

      if (!res.ok) throw new Error("Failed to update payment");

      // update UI instantly
      setPayments((prev) =>
        prev.map((p) =>
          p._id === id ? { ...p, status: "Paid" } : p
        )
      );

    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  // ✅ Stats calculation (dynamic)
  const today = new Date().toISOString().split("T")[0];

  const todayCollections = payments
    .filter(p => p.date === today && p.status === "Paid")
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const pendingCount = payments.filter(p => p.status === "Pending").length;
  const completedCount = payments.filter(p => p.status === "Paid").length;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-bold text-gray-900">Receptionist Dashboard</h1>

        {/* Payment Management */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Payment Management</h2>

          {loading ? (
            <p>Loading payments...</p>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-gray-500">
                        No payments found
                      </td>
                    </tr>
                  ) : (
                    payments.map((payment) => (
                      <tr key={payment._id || payment.id}>
                        <td className="px-6 py-4">{payment.patient}</td>
                        <td className="px-6 py-4">{payment.type}</td>
                        <td className="px-6 py-4">₹{payment.amount}</td>
                        <td className="px-6 py-4">{payment.date}</td>

                        <td className="px-6 py-4">
                          <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                            payment.status === 'Paid'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          {payment.status === 'Pending' ? (
                            <button
                              onClick={() => handleMarkPaid(payment._id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Mark as Paid
                            </button>
                          ) : (
                            <button className="text-gray-600 hover:text-gray-900">
                              View Receipt
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-sm text-gray-500">Today's Collections</h3>
            <p className="text-2xl font-bold">₹{todayCollections}</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-sm text-gray-500">Pending Payments</h3>
            <p className="text-2xl font-bold">{pendingCount}</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-sm text-gray-500">Completed Payments</h3>
            <p className="text-2xl font-bold">{completedCount}</p>
          </div>

        </div>

      </div>
    </div>
  );
}