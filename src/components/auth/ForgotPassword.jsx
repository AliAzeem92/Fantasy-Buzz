import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ForgotPassword = ({ onSendResetLink, onBack }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/send-reset-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("OTP sent to your email!");
        localStorage.setItem("resetEmail", email);
        onSendResetLink(); // move to next modal step
      } else {
        toast.error(data.message || "Failed to send OTP");
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
      <h2 className="text-4xl font-bold mb-6 text-darkBlue ">
        Forgot Password
      </h2>
      <form onSubmit={handleSendOTP} className="flex flex-col ">
        <label className="block text-sm text-gray-700 mb-1">Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-5 bg-darkBlue text-white font-medium py-2 rounded-full hover:bg-[#041045] transition disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send OTP"}
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

export default ForgotPassword;
