import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTop = ({ alignment }) => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div className={`fixed bottom-8 ${alignment} flex flex-col items-center z-50 space-y-4`}>
          {/* Tombol Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-800 transition duration-300 flex items-center justify-center mr-3"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
