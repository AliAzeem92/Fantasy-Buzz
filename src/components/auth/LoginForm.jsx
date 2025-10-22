import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const LoginForm = ({ onForgotPassword, onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ✅ For cookies
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.href = "/dashboard/contests";
        }, 1200);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("⚠️ Server not responding. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <form onSubmit={handleLogin} className="flex flex-col ">
        <h2 className="text-4xl font-bold mb-6 text-darkBlue ">Login</h2>

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
          className="w-full bg-darkBlue text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
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
    </div>
  );
};

export default LoginForm;
