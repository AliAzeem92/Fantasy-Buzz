import React, { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../components/auth/LoginForm";
import logo from "../assets/logo.jpg";
import SignupForm from "../components/auth/SignupForm";
import Verify from "../components/auth/Verify";
import ForgotPassword from "../components/auth/ForgotPassword";
import PasswordResetOTP from "../components/auth/PasswordResetOTP";
import SetNewPassword from "../components/auth/SetNewPassword";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";

function Auth() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <main className="min-h-screen bg-darkBlue flex flex-col justify-between text-white overflow-hidden ">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex flex-col -rotate-12 ">
          <a href="/" className="text-center">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-2 ">
          <button
            onClick={() => setActiveModal("login")}
            className="border border-teal-400 text-green px-2 sm:px-16 py-1 sm:py-2 rounded-full hover:bg-teal-400 hover:text-white transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          Welcome to Admin Portal of
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Fantazy Buzz
        </h1>
        <button
          onClick={() => setActiveModal("login")}
          className="bg-green text-white font-medium px-20 py-2 mt-2 rounded-full hover:bg-greenHover transition animate-bounce "
        >
          Login
        </button>
        <GoogleAuthButton />
      </div>

      {/* Reusable Modal */}
      <Modal show={!!activeModal} onClose={closeModal}>
        {activeModal === "login" && (
          <LoginForm
            onForgotPassword={() => setActiveModal("forgot")}
            onSignUp={() => setActiveModal("signup")}
          />
        )}
        {activeModal === "signup" && (
          <SignupForm
            onClose={closeModal}
            onSwitchToLogin={() => setActiveModal("login")}
            onSwitchToVerify={() => setActiveModal("verify")}
          />
        )}
        {activeModal === "forgot" && (
          <ForgotPassword
            onSendResetLink={() => setActiveModal("passwordResetOTP")}
            onBack={() => setActiveModal("login")}
          />
        )}
        {activeModal === "passwordResetOTP" && (
          <PasswordResetOTP
            onResetYourPassword={() => setActiveModal("resetNewPassword")}
            onBack={() => setActiveModal("login")}
          />
        )}
        {activeModal === "resetNewPassword" && (
          <SetNewPassword onBack={() => setActiveModal("login")} />
        )}
        {activeModal === "verify" && (
          <Verify
            onClose={closeModal}
            onBack={() => setActiveModal("login")}
            onSwitchToLogin={() => setActiveModal("login")}
          />
        )}
      </Modal>
    </main>
  );
}

export default Auth;
