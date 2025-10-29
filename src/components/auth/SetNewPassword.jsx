import React, { useState } from "react";
import { MoveLeft, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const SetNewPassword = ({ onBack }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("resetToken");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, newPassword: password }),
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("Password reset successfully!");
        localStorage.removeItem("resetEmail");
        localStorage.removeItem("resetToken");
        onBack();
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Server error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-darkBlue">
        Set New Password
      </h2>

      <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
        {/* New Password Field */}
        <div className="relative">
          <label className="block text-sm text-gray-700 mb-1">
            New Password*
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-teal-500"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <label className="block text-sm text-gray-700 mb-1">
            Confirm Password*
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-teal-500"
          >
            {showConfirmPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-darkBlue text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
        >
          {loading ? "Changing..." : "Change Password"}
        </button>
      </form>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center justify-center w-full gap-1 text-teal-500 font-medium mt-3 transition-all duration-300 hover:text-teal-600"
      >
        <MoveLeft className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:rotate-[-10deg]" />
        <span className="relative">
          Back to Login
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-teal-500 transition-all duration-300 group-hover:w-full" />
        </span>
      </button>
    </div>
  );
};

export default SetNewPassword;
