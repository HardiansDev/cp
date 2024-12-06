import React from "react";
import Lottie from "react-lottie-player";
import animationData from "./assets/images/animation1.json";

function Home() {
  return (
    <section
      id="home"
      className="relative bg-teal-800 text-white py-16 md:py-24"
    >
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center container mx-auto px-4 md:px-8 h-auto md:h-[70vh]">
        {/* Konten Kiri (Text + Tombol) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Innovative IT Solutions <br /> For Your Business
          </h1>
          <p className="text-lg md:text-2xl font-light leading-relaxed mt-4">
            Accelerate your business success with cutting-edge technology
            solutions. From crafting dynamic websites to developing powerful
            software systems, we provide the tools to drive your growth and
            innovation.
          </p>
          {/* Tombol */}
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-l-xl rounded-r-lg transition duration-300 text-lg flex items-center group">
              Appointment
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Konten Kanan (Animasi Lottie) */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Lottie
            loop
            animationData={animationData}
            play
            speed={0.3} /* Percepat atau perlambat animasi */
            className="w-[70%] h-[70%] md:w-[80%] md:h-[80%]" // Ukuran responsif
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
