import React, { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import ForgotPassword from "../components/ForgotPassword";
import PasswordResetRequest from "../components/PasswordResetRequest";
import ResetYourPassword from "../components/ResetPassword";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

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
      </div>

      {/* Reusable Modal */}
      <Modal show={!!activeModal} onClose={closeModal}>
        {activeModal === "login" && (
          <LoginForm onForgotPassword={() => setActiveModal("forgot")} />
        )}
        {activeModal === "forgot" && (
          <ForgotPassword
            onSendResetLink={() => setActiveModal("passwordResetRequest")}
            onBack={() => setActiveModal("login")}
          />
        )}
        {activeModal === "passwordResetRequest" && (
          <PasswordResetRequest
            onResetYourPassword={() => setActiveModal("resetYourPassword")}
            onBack={() => setActiveModal("login")}
          />
        )}
        {activeModal === "resetYourPassword" && (
          <ResetYourPassword onBack={() => setActiveModal("login")} />
        )}
      </Modal>
    </main>
  );
}

export default Auth;
