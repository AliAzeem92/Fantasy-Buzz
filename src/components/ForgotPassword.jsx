import React from "react";

const ForgotPassword = ({ onSendResetLink, onBack }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 mt-12 text-[#020b2d]">
        Forgot Your Password?
      </h2>

      <p className="text-gray-600 mb-4 text-xs">
        Enter your email and we’ll send you password reset instructions.
      </p>

      <label className="block text-sm font-normal text-gray-700 mb-1">
        Email*
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-full px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <button
        onClick={onSendResetLink}
        className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition mb-4"
      >
        Send Reset Link
      </button>

      <button
        onClick={onBack}
        className="text-teal-500 hover:underline text-center w-full"
      >
        ← Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
