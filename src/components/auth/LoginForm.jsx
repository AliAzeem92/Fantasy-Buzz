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

const LoginForm = ({ onForgotPassword, onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ For cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard/contests";
        }, 1200);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Server not responding. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-6 text-[#020b2d]">Login</h2>

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
          className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-teal-500"
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
          className="text-teal-500 hover:text-teal-600 font-medium hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Feedback Message */}
      {message && (
        <p className="text-center text-sm mt-4 text-gray-700">{message}</p>
      )}

      {/* Switch to Signup */}
      <p className="text-center text-sm mt-2 text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={onSignUp}
          className="text-teal-500 hover:text-teal-600 hover:underline font-medium"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
