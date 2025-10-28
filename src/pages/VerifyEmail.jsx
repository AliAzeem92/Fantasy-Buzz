import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Verify from '../components/auth/Verify';
import logo from '../assets/logo.jpg';

const VerifyEmail = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-darkBlue flex flex-col text-white">
      {/* Header */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex flex-col -rotate-12">
          <img src={logo} alt="logo" className="h-12" />
        </div>
        <button
          onClick={handleLogout}
          className="border border-red-400 text-red-400 px-4 py-2 rounded-full hover:bg-red-400 hover:text-white transition"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Email Verification Required</h1>
            <p className="text-gray-300 mb-2">
              Hi {user?.name}, please verify your email address to access the dashboard.
            </p>
            <p className="text-sm text-gray-400">
              We sent a verification code to: <span className="font-medium">{user?.email}</span>
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <Verify 
              onClose={() => {}} 
              onBack={handleLogout}
              onSwitchToLogin={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;