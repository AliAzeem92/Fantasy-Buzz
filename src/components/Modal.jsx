import React, { useEffect, useState } from "react";

const Modal = ({ show, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [isContentAnimating, setIsContentAnimating] = useState(false);

  // Handle modal open/close
  useEffect(() => {
    if (show) {
      // Opening modal
      setIsVisible(true);
      setCurrentContent(children);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
          setIsContentAnimating(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    } else if (!show && isVisible) {
      // Closing modal
      setIsContentAnimating(false);
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setCurrentContent(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [show, isVisible, children]);

  // Handle content switching with animation (only when modal is already open)
  useEffect(() => {
    if (
      show &&
      isVisible &&
      isAnimating &&
      currentContent &&
      children !== currentContent
    ) {
      // Fade out current content
      setIsContentAnimating(false);

      // After fade out, switch content and fade in
      const timer = setTimeout(() => {
        setCurrentContent(children);
        requestAnimationFrame(() => {
          setIsContentAnimating(true);
        });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [children, currentContent, isVisible, show, isAnimating]);

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50 transition-all duration-300 ease-out ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white text-black rounded-2xl shadow-2xl w-[90%] max-w-md min-h-[200px] p-8 relative transform transition-all duration-300 ease-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-xl transition-colors z-10"
        >
          ✕
        </button>

        {/* Content with smooth transition */}
        <div
          className={`transition-all duration-200 ease-out ${
            isContentAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          {currentContent}
        </div>
      </div>
    </div>
  );
};

export default Modal;
