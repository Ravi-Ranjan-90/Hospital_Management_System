// import React from 'react'
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import summaryApi from '../../common';
// import { toast } from "react-toastify";


// export default function SignUp() {
//   const [showPassword, setPassword]=useState(false);
//   const [showConfirmPassword, setConfirmPassword]=useState(false);
//    const [data, setData] = useState({
//           email: "",
//           password: "",
//           name: "",
//           confirmPassword: "",
//           role: "patient"
//       })
//       const navigate = useNavigate();
//       const handleOnChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({
//           ...prev,
//           [name]: value,
//         }));
//       };
      
//           const handleSubmit = async(e) => {
//               e.preventDefault();

//               if(data.password === data.confirmPassword){
//                   const dataResponse = await fetch(summaryApi.signUp.url,{
//                       method: summaryApi.signUp.method,
//                       headers: {
//                           'Content-Type': 'application/json',
//                           },
//                           body: JSON.stringify(data),
//                   })
//                   const dataApi = await dataResponse.json();
//                   if(dataApi.success){
//                       toast.success(dataApi.message)
//                       navigate('/login')
//                   }
//                   if(dataApi.error){
//                       toast.error(dataApi.message)
//                       }
//                   console.log("data", dataApi);
//               } else{
//                 toast.error("Password and Confirm Password do not match");
//               }
  
//               }


//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <h2 className="text-2xl font-bold">SignUp your account</h2>
//       <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
//         <div>
//           {/* <label>SignUp as</label> */}
//           <div className='grid'>
//                <label >Name:</label>
//                <div className="bg-slate-100 p-2">
//                 <input className=" outline-none w-full h-full bg-transparent" type="text" name="name" placeholder="Enter your name"
//                 value={data.name} 
//                 onChange={handleOnChange}/>
//                </div>
//             </div>
//             <div className='grid'>
//                <label >Email:</label>
//                <div className="bg-slate-100 p-2">
//                 <input className=" outline-none w-full h-full bg-transparent" type="email" name="email" placeholder="Enter your email"
//                 value={data.email} 
//                 onChange={handleOnChange}/>
//                </div>
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <div className="bg-slate-100 flex p-2">
                    
//                 <input type={showPassword ? "text":"password"} className=" outline-none w-full h-full bg-transparent" name="password" placeholder="Enter password"
//                 value={data.password} 
//                 onChange={handleOnChange}/>
//                 <div className='cursor-pointer text-lg' onClick={()=>setPassword((preve)=>!preve)}>
//                 <span>
//                     {
//                         showPassword ? <FaEyeSlash/> : <FaEye/>
//                     }
//                 </span>
//                 </div>
//                 </div>
//                 </div>

//                 <div>
//                 <label>Confirm Password:</label>
//                 <div className="bg-slate-100 flex p-2 mb-2">
                    
//                 <input type={showConfirmPassword ? "text":"password"} className=" outline-none w-full h-full bg-transparent" name="confirmPassword" placeholder="Enter Confirm password"
//                 value={data.confirmPassword} 
//                 onChange={handleOnChange}/>
//                 <div className='cursor-pointer text-lg' onClick={()=>setConfirmPassword((preve)=>!preve)}>
//                 <span>
//                     {
//                         showConfirmPassword ? <FaEyeSlash/> : <FaEye/>
//                     }
//                 </span>
//                 </div>
//                 </div>
//                 </div>
//                 <select
//   name="role"
//   value={data.role}
//   onChange={handleOnChange}
//   className="block w-full border p-2 rounded"
// >
//   <option value="patient">Patient</option>
//   <option value="doctor">Doctor</option>
//   <option value="admin">Admin</option>
//   {/* <option value="receptionist">Receptionist</option> */}
// </select>

//         </div>
       

//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Sign Up
//         </button>
//       </form>
//       <p className="mt-4">
//       Already have an account?{' '}
//       <span
//         onClick={() => navigate('/login')}
//         className="text-red-500 hover:text-red-700 hover:underline cursor-pointer"
//       >
//         Login
//       </span>
//     </p>
//     </div>
//   );
// }

import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import summaryApi from '../../common';
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ added loading

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    role: "patient"
  })

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (data.password !== data.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    setLoading(true);

    try {
      const dataResponse = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/login');
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }

      console.log("data", dataApi);

    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">SignUp your account</h2>

      <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        <div>

          {/* <label>SignUp as</label> */}

          <div className='grid'>
            <label>Name:</label>
            <div className="bg-slate-100 p-2">
              <input
                className="outline-none w-full h-full bg-transparent"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <div className='grid'>
            <label>Email:</label>
            <div className="bg-slate-100 p-2">
              <input
                className="outline-none w-full h-full bg-transparent"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <div>
            <label>Password:</label>
            <div className="bg-slate-100 flex p-2">

              <input
                type={showPassword ? "text" : "password"}
                className="outline-none w-full h-full bg-transparent"
                name="password"
                placeholder="Enter password"
                value={data.password}
                onChange={handleOnChange}
                required
              />

              <div
                className='cursor-pointer text-lg'
                onClick={() => setPassword((prev) => !prev)}
              >
                <span>
                  {
                    showPassword ? <FaEyeSlash /> : <FaEye />
                  }
                </span>
              </div>
            </div>
          </div>

          <div>
            <label>Confirm Password:</label>
            <div className="bg-slate-100 flex p-2 mb-2">

              <input
                type={showConfirmPassword ? "text" : "password"}
                className="outline-none w-full h-full bg-transparent"
                name="confirmPassword"
                placeholder="Enter Confirm password"
                value={data.confirmPassword}
                onChange={handleOnChange}
                required
              />

              <div
                className='cursor-pointer text-lg'
                onClick={() => setConfirmPassword((prev) => !prev)}
              >
                <span>
                  {
                    showConfirmPassword ? <FaEyeSlash /> : <FaEye />
                  }
                </span>
              </div>
            </div>
          </div>

          <select
            name="role"
            value={data.role}
            onChange={handleOnChange}
            className="block w-full border p-2 rounded"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            {/* <option value="receptionist">Receptionist</option> */}
          </select>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{' '}
        <span
          onClick={() => navigate('/login')}
          className="text-red-500 hover:text-red-700 hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}