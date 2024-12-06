// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Service from "./Service";
import Home from "./Home";
import Client from "./Client";
import About from "./About";
import Portfolio from "./Portofolio";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import LiveChat from "./LiveChat";
import ScrollToTop from "./ScrollToTop";
import Loading from "./Loading";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate(); // Hook navigate untuk navigasi
  const homeRef = useRef(null);

  // Membuat referensi untuk setiap bagian halaman
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleMenuClick = (link) => {
    setActiveLink(link);

    // Scroll ke bagian yang sesuai berdasarkan link yang diklik
    switch (link) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        serviceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // Menggunakan useEffect untuk mengatur URL dan tampilan ketika halaman di-refresh
  useEffect(() => {
    // Mengecek apakah URL sudah di root (tidak ada hash atau pathname lain)
    if (window.location.pathname !== "/") {
      navigate("/"); // Arahkan kembali ke halaman root (Home)
      // Scroll ke bagian atas (home)
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  return (
    <div>
      {/* Navbar menerima onMenuClick dan activeLink sebagai prop */}
      <Navbar onMenuClick={handleMenuClick} activeLink={activeLink} />
      <Loading />

      {/* Konten di bawah navbar */}
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <div ref={homeRef} className="text-center text-white">
                <Home />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Client />
        <div ref={aboutRef} className="text-center text-white mt-20">
          <About />
        </div>

        {/* Komponen Service dengan ref untuk scroll */}
        <div ref={serviceRef} className="text-center text-white mt-20">
          <Service />
        </div>

        <div ref={portfolioRef} className="text-center text-white mt-20">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <Portfolio />
        </div>

        <div ref={contactRef} className="text-center text-white mt-20">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <ContactUs />
        </div>
      </div>
      <LiveChat alignment="right-8" />
      <ScrollToTop alignment="right-20" />
      <Footer />
    </div>
  );
}

export default App;
