import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full p-4 bg-white transition-all duration-300 ${
          isOpen ? "bg-opacity-80" : "bg-opacity-100"
        } shadow-md z-10`}
      ></header>

      {/* Live Chat Icon */}
      <div
        onClick={toggleModal}
        className="fixed bottom-8 right-8 bg-teal-600 text-white rounded-full p-4 shadow-lg cursor-pointer z-20"
      >
        <FaCommentDots size={24} />
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-1/3 max-h-[90vh] overflow-y-auto p-6 space-y-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Services & Pricing
              </h2>
              <button
                onClick={toggleModal}
                className="text-xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <p className="text-gray-700">
              We offer the following services at affordable prices.
              Here are some of our most popular options:
            </p>

            {/* Service List */}
            <div className="space-y-6">
              {[
                { name: "Web Development", desc: "Start From", price: "$100" },
                { name: "Mobile App Development", desc: "Start From", price: "$200" },
                { name: "Network Infrastructure", desc: "Start From", price: "$200" },
                { name: "SEO Optimization", desc: "Start From", price: "$200" },
                { name: "UI/UX Design", desc: "Start From", price: "$200" },
                {
                  name: "Maintenance Server & Security",
                  desc: "Start From",
                  price: "$200",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
                >
                  <div>
                    <p className="text-lg text-gray-800">{service.name}</p>
                    <p className="text-sm text-gray-800">{service.desc}</p>
                    <p className="text-sm text-gray-600">{service.price}</p>
                  </div>
                  <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition">
                    Order Now
                  </button>
                </div>
              ))}
            </div>

            {/* Close Button */}
            <div className="mt-4 text-center">
              <button
                onClick={toggleModal}
                className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
