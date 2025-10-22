import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const VerifyOTP = ({ onResetYourPassword, onBack }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = localStorage.getItem("resetEmail");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/verify-reset-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("OTP verified!");
        localStorage.setItem("resetToken", data.resetToken);
        onResetYourPassword(); // move to new password modal
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-darkBlue ">Verify OTP</h2>
      <form onSubmit={handleVerify} className="flex flex-col ">
        <label className="block text-sm text-gray-700 mb-1">OTP*</label>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-5 bg-darkBlue text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
      <button
        onClick={onBack}
        className="group flex items-center justify-center w-full gap-1 text-teal-500 font-medium mt-2 transition-all duration-300 hover:text-teal-600 "
      >
        <MoveLeft />
        <span className="relative">
          Back to Login
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-teal-500 transition-all duration-300 group-hover:w-full" />
        </span>
      </button>
    </div>
  );
};

export default VerifyOTP;
