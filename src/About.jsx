// src/About.jsx
import React from "react";
import BuildImage from "./assets/images/build.png";
import VmImage from "./assets/images/vm.png";
import InImage from "./assets/images/in.png";
import TeamImage from "./assets/images/team.jpg";

function About() {
  return (
    <section id="about" className="py-16 bg-white-50">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Delivering innovative IT solutions to drive success in the digital
            world.
          </p>
        </header>

        {/* Content Section */}
        <div className="space-y-16">
          {/* Company History and Vision Section */}
          <div className="flex flex-wrap items-center gap-8">
            {/* History */}
            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:translate-x-8 transition-all">
              <img src={BuildImage} alt="Company History" className="w-full" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Company History
                </h2>
                <p className="text-lg text-gray-700">
                  HDTECH.ID was founded in 2025 with the goal of providing
                  innovative IT solutions to businesses and organizations.
                </p>
              </div>
            </div>

            {/* Vision and Mission */}
            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:translate-x-8 transition-all">
              <img
                src={VmImage}
                alt="Vision & Mission"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Vision & Mission
                </h2>
                <p className="text-lg text-gray-700 text-start">
                  <b>Our vision</b> is to be a leading provider of IT solutions that
                  empower businesses to succeed in a digital world.
                </p>
                <p className="text-lg text-gray-700 mt-4 text-start">
                  <b>Our mission</b> is to deliver innovative, high-quality, and
                  cost-effective technology solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="flex flex-wrap items-center gap-8">
            {/* Core Values */}
            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:-translate-x-8 transition-all">
              <img
                src={InImage}
                alt="Core Values"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Core Values
                </h2>
                <ul className="text-lg text-gray-700 space-y-4 text-start">
                  <li>
                    <strong>Innovation:</strong> We continuously seek new ideas.
                  </li>
                  <li>
                    <strong>Integrity:</strong> We conduct business with the
                    highest standards.
                  </li>
                  <li>
                    <strong>Excellence:</strong> We strive for excellence in
                    every project.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> We believe in teamwork.
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Team */}
            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:-translate-x-8 transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Team
                </h2>
                <p className="text-lg text-gray-700">
                  We are a team of passionate and skilled professionals who
                  believe in delivering high-quality solutions for our clients.
                </p>
              </div>
              <img
                src={TeamImage}
                alt="Our Team"
                className="w-full rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
