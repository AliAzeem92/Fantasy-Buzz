import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 mt-12 text-[#020b2d]">Login</h2>

      <div className="mb-4">
        <label className="block text-sm font-normal text-gray-700 mb-1">
          Username or email*
        </label>
        <input
          type="text"
          placeholder="Enter your username or email"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      <div className="mb-4 relative">
        <label className="block text-sm text-gray-700 mb-1">Password*</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-8 text-gray-500 hover:text-teal-500"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>

      <div className="flex justify-between items-center text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-teal-400" />
          Remember me
        </label>
        <button
          onClick={onForgotPassword}
          className="text-teal-500 hover:underline"
        >
          Forgot My Password
        </button>
      </div>

      <button className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
