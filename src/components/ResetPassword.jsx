import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResetYourPassword = ({ onBack }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset attempted:", formData);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 mt-12 text-[#020b2d]">
        Reset Your Password
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label className="block text-sm font-normal text-gray-700 mb-1">
            New Password*
          </label>
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter new password"
            required
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-4 top-8 text-gray-500 hover:text-teal-500"
          >
            {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <div className="mb-6 relative">
          <label className="block text-sm font-normal text-gray-700 mb-1">
            Confirm New Password*
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Confirm new password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-8 text-gray-500 hover:text-teal-500"
          >
            {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        {/* Password Requirements */}
        <div className="mb-6 ">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm">
            Your password must:
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              All minimum is a customer
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              Fix value in total for a username letter
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              Include at least one number
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              Include at least one symbol
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mr-2">•</span>
              Current month you are not cautious
            </li>
          </ul>
        </div>

        <button
          onClick={onBack}
          type="submit"
          className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetYourPassword;
