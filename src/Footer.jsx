// src/Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

  return (
    <footer className="bg-gradient-to-r from-teal-800 to-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          Designed by <span className="font-semibold">HDTECH</span> &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
