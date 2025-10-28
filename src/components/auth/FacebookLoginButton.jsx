import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookLoginButton = () => {
  const handleResponse = (response) => {
    const userData = {
      name: response.name,
      email: response.email,
      id: response.id,
      avatar: response.picture.data.url,
    };
    console.log("User Data", userData);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={handleResponse}
        scope="public_profile" // ← CHANGE THIS LINE
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
