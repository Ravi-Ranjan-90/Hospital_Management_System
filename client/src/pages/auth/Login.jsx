
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { setUserRole } from "../../store/slices/authSlice";
// import summaryApi from "../../common";
// import { toast } from "react-toastify";

// interface LoginForm {
//   email: string;
//   password: string;
//   role: "patient" | "doctor" | "admin" | "receptionist";
// }

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginForm>();

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onSubmit = async (data: LoginForm) => {
//     try {
//       console.log("Sending login data:", data);

//       const response = await fetch(summaryApi.signIn.url, {
//         method: summaryApi.signIn.method,
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       console.log("API Response:", result);

//       // 🔴 MOST IMPORTANT CHECK
//       if (!result.success) {
//         toast.error(result.message || "Login failed");
//         return; // ❗ stop execution
//       }

//       // ✅ Success flow
//       const { token, role, user } = result;

//       // Store in localStorage (optional)
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);
//       localStorage.setItem("patientInfo", JSON.stringify(user));

//       if (role === "patient" && user?._id) {
//         localStorage.setItem("patientId", user._id);
//       }

//       // Update Redux
//       dispatch(setUserRole(role));

//       toast.success("Login successful!");

//       // Redirect based on role
//       navigate(role !== "patient" ? `/${role}/dashboard` : "/");

//     } catch (error: any) {
//       console.error("Login error:", error);
//       toast.error(error.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <h2 className="text-2xl font-bold">Login in your account</h2>

//       <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>

//         {/* Role */}
//         <div>
//           <label>Login as</label>
//           <select
//             {...register("role", { required: "Please select a role" })}
//             className="block w-full border p-2 rounded"
//           >
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//             <option value="admin">Admin</option>
//           </select>
//           {errors.role && (
//             <p className="text-red-500">{errors.role.message}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <label>Email</label>
//           <input
//             {...register("email", { required: "Email is required" })}
//             type="email"
//             className="block w-full border p-2 rounded"
//           />
//           {errors.email && (
//             <p className="text-red-500">{errors.email.message}</p>
//           )}
//         </div>

//         {/* Password */}
//         <div>
//           <label>Password</label>
//           <input
//             {...register("password", { required: "Password is required" })}
//             type="password"
//             className="block w-full border p-2 rounded"
//           />
//           {errors.password && (
//             <p className="text-red-500">{errors.password.message}</p>
//           )}
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>

//       <p className="mt-4">
//         Don't have account?{" "}
//         <Link
//           to={"/signup"}
//           className="text-red-500 hover:text-red-700 hover:underline"
//         >
//           Sign Up
//         </Link>
//       </p>
//     </div>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setUserRole } from "../../store/slices/authSlice";
import summaryApi from "../../common";
import { toast } from "react-toastify";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ❌ removed <LoginForm>

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => { // ❌ removed type
    try {
      console.log("Sending login data:", data);

      const response = await fetch(summaryApi.signIn.url, {
        method: summaryApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API Response:", result);

      // 🔴 MOST IMPORTANT CHECK
      if (!result.success) {
        toast.error(result.message || "Login failed");
        return; // ❗ stop execution
      }

      // ✅ Success flow
      const { token, role, user } = result;

      // Store in localStorage (optional)
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("patientInfo", JSON.stringify(user));

      if (role === "patient" && user?._id) {
        localStorage.setItem("patientId", user._id);
      }

      // Update Redux
      // dispatch(setUserRole(role));
      dispatch(setUserRole(role));

      toast.success("Login successful!");

      // Redirect based on role
      navigate(role !== "patient" ? `/${role}/dashboard` : "/");

    } catch (error) { // ❌ removed : any
      console.error("Login error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Login in your account</h2>

      <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>

        {/* Role */}
        <div>
          <label>Login as</label>
          <select
            {...register("role", { required: "Please select a role" })}
            className="block w-full border p-2 rounded"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500">{errors.role.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="block w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            className="block w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4">
        Don't have account?{" "}
        <Link
          to={"/signup"}
          className="text-red-500 hover:text-red-700 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}