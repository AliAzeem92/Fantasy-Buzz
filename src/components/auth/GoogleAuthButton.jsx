import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = () => {
  const handleSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      console.log("Google User:", decoded);

      const backendRes = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/google-login`,
        { token: response.credential },
        { withCredentials: true }
      );

      if (backendRes.data.success) {
        toast.success(`Welcome ${decoded.name}`);
        console.log(`${decoded.name} logged in via Google`);
        // Force complete page reload to update auth state
        window.location.href = "/dashboard/contests";
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
