// src/ContactUs.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-teal-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white-800 mb-8">Contact Us</h1>
        <p className="text-xl font-light text-white-600 mb-12">
          We'd love to hear from you! Reach out to us through any of the
          channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-gray-600" />
                <p className="text-lg text-gray-700">solutions@hdtech.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-2xl text-gray-600" />
                <p className="text-lg text-gray-700">+62 851-3749-5106</p>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-5xl text-gray-600" />
                <p className="text-lg text-gray-700 text-start">
                  Perumahan BTP Blok F11 No 8 RT017 RW012, Setiamekar Tambun selatan, Kabupaten Bekasi
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-start space-x-6 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500 transition duration-200" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-600 transition duration-200" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl text-gray-600 hover:text-red-600 transition duration-200" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 text-lg mb-2 text-start"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-black"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-lg mb-2 text-start"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-black"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-lg mb-2 text-start"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-black"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
