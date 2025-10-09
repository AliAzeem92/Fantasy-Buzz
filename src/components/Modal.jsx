import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-black rounded-xl shadow-lg w-[90%] max-w-md p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
