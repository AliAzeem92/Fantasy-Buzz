// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { useUser } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";

// const LoginForm = ({ onForgotPassword }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useUser();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Save user data in memory
//     setUser({ username, email });

//     // Navigate to dashboard
//     navigate("/dashboard");
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2 className="text-4xl font-bold mb-6 mt-12 text-[#020b2d]">Login</h2>

//       <div className="mb-4">
//         <label className="block text-sm font-normal text-gray-700 mb-1">
//           Username*
//         </label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your username"
//           className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-normal text-gray-700 mb-1">
//           Email*
//         </label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//         />
//       </div>

//       <div className="mb-4 relative">
//         <label className="block text-sm text-gray-700 mb-1">Password*</label>
//         <input
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-4 top-8 text-gray-500 hover:text-teal-500"
//         >
//           {showPassword ? <Eye /> : <EyeOff />}
//         </button>
//       </div>

//       <div className="flex justify-between items-center text-sm mb-6">
//         <label className="flex items-center gap-2">
//           <input type="checkbox" className="accent-teal-400" />
//           Remember me
//         </label>
//         <button
//           type="button"
//           onClick={onForgotPassword}
//           className="text-teal-500 hover:underline"
//         >
//           Forgot My Password
//         </button>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginForm = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      role: "Admin",
      remember: rememberMe,
    };

    setUser(userData);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-6 text-[#020b2d]">Login</h2>

      {/* Username */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">Username*</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4 relative">
        <label className="block text-sm text-gray-700 mb-1">Password*</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-8 text-gray-500 hover:text-teal-500"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>

      {/* Remember Me + Forgot Password */}
      <div className="flex justify-between items-center text-sm mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-teal-400"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>

        <button
          type="button"
          onClick={onForgotPassword}
          className="text-teal-500 hover:underline"
        >
          Forgot My Password
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
