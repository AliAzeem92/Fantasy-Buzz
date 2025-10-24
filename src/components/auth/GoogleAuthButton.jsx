import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log("Google User:", decoded);

      const backendRes = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/google-login`,
        { token: response.credential },
        { withCredentials: true }
      );
      console.log(`${process.env.REACT_APP_API_URL}/api/auth/google-login`);

      if (backendRes.data.success) {
        toast.success(`Welcome ${decoded.name}`);
        navigate("/dashboard/contests");
      } else {
        toast.error("Login failed on server.");
      }
    } catch (error) {
      toast.error("Something went wrong with Google login.");
      console.error("Google login error:", error);
    }
  };

  const handleError = () => {
    toast.error("Google Login Failed");
  };

  return (
    <div className="mt-2">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleAuthButton;
