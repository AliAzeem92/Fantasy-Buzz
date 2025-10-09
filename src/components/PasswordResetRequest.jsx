import React from "react";

const PasswordResetRequest = ({ onResetYourPassword, onBack }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 mt-12 text-[#020b2d]">
        Password Reset Request Sent
      </h2>

      <p className="text-gray-600 mt-8 mb-20 text-sm">
        A password reset message was sent to your email address. Please click
        the link in that message to reset password.
      </p>

      <button
        onClick={onResetYourPassword}
        className="w-full bg-[#020b2d] text-white font-medium py-2 rounded-full hover:bg-[#041045] transition"
      >
        Reset Your Password
      </button>
      <button
        onClick={onBack}
        className="text-teal-500 hover:underline text-center mt-2 w-full"
      >
        ← Back to Login
      </button>
    </div>
  );
};

export default PasswordResetRequest;
