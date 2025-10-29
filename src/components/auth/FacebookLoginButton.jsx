// import FacebookLogin from "@greatsumini/react-facebook-login";

// const FacebookLoginButton = () => {
//   const handleResponse = (response) => {
//     const userData = {
//       name: response.name,
//       email: response.email,
//       id: response.id,
//       avatar: response.picture.data.url,
//     };
//     console.log("User Data", userData);
//   };

//   return (
//     <div className="flex justify-center items-center mt-4">
//       <FacebookLogin
//         appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
//         onSuccess={(response) => {
//           console.log("Login Success!", response);
//         }}
//         onFail={(error) => {
//           console.log("Login Failed!", error);
//         }}
//         onProfileSuccess={handleResponse}
//         scope="public_profile"
//         style={{
//           backgroundColor: "#1877f2",
//           color: "white",
//           border: "none",
//           padding: "10px 20px",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       />
//     </div>
//   );
// };

// export default FacebookLoginButton;
import FacebookLogin from "@greatsumini/react-facebook-login";
import toast from "react-hot-toast";

const FacebookLoginButton = () => {
  const handleResponse = async (response) => {
    try {
      const userData = {
        name: response.name,
        email: response.email,
        id: response.id,
        avatar: response.picture?.data?.url,
      };
      console.log("Facebook User Data:", userData);
      
      const loginResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/facebook-login`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      
      const data = await loginResponse.json();
      
      if (loginResponse.ok && data.success) {
        toast.success(`Welcome ${userData.name}!`);
        console.log("Facebook login successful:", data);
        window.location.href = "/dashboard/contests";
      } else {
        toast.error(data.message || "Facebook login failed");
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      toast.error("Something went wrong with Facebook login");
      console.error("Facebook login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        onSuccess={handleResponse}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={handleResponse}
        scope="public_profile,email"
        style={{
          backgroundColor: "#1877f2",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default FacebookLoginButton;
