import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SignupForm = ({ onSwitchToLogin, onSwitchToVerify }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ✅ for cookies
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: "", email: "", password: "" });

        // Show Verify modal
        setTimeout(() => {
          onSwitchToVerify();
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("⚠️ Server not responding. Try again later.");
      console.error("Server error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-6 text-[#020b2d]">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Password*</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-teal-500"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-darkBlue text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-sm mt-4 text-gray-600">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-teal-500 hover:text-teal-600 hover:underline font-medium"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
