// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Verify = ({ onClose, onBack, onSwitchToLogin }) => {
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/auth/verify-account`,
//         { otp },
//         { withCredentials: true }
//       );

//       if (res.data.success) {
//         toast.success("Email verified successfully!");
//         onClose();
//         onSwitchToLogin(); // ✅ goes to login popup
//       } else {
//         toast.error(res.data.message || "Invalid OTP");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSendOtp = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/auth/send-verify-otp`,
//         {},
//         { withCredentials: true }
//       );
//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 w-full max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         Verify Your Account
//       </h2>
//       <p className="text-gray-600 text-center mb-4">
//         Enter the OTP sent to your email to verify your account.
//       </p>

//       <form onSubmit={handleVerify} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Enter 6-digit OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-darkBlue text-white py-2 rounded-full hover:bg-[#041045] transition disabled:opacity-50"
//         >
//           {loading ? "Verifying..." : "Verify"}
//         </button>
//       </form>

//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handleSendOtp}
//           disabled={loading}
//           className="text-teal-500 hover:underline disabled:opacity-50"
//         >
//           Resend OTP
//         </button>

//         <button onClick={onBack} className="text-gray-500 hover:underline">
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Verify;
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Verify = ({ onClose, onBack, onSwitchToLogin }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/verify-account`,
        { otp },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Email verified successfully!");
        onClose();
        onSwitchToLogin(); // ✅ goes to login popup
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    setResendLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/send-verify-otp`,
        {},
        { withCredentials: true }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Verify Your Account
      </h2>
      <p className="text-gray-600 text-center mb-4">
        Enter the OTP sent to your email to verify your account.
      </p>

      <form onSubmit={handleVerify} className="space-y-4">
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-darkBlue text-white py-2 rounded-full hover:bg-[#041045] transition disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleSendOtp}
          disabled={resendLoading}
          className="text-teal-500 hover:underline disabled:opacity-50"
        >
          {resendLoading ? "Resending OTP..." : "Resend OTP"}
        </button>

        <button onClick={onBack} className="text-gray-500 hover:underline">
          Back
        </button>
      </div>
    </div>
  );
};

export default Verify;
