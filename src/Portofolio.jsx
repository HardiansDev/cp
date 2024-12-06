// src/Portfolio.jsx
import React from "react";

// Data untuk portfolio yang dapat Anda modifikasi sesuai dengan projek yang telah dikerjakan
const portfolioItems = [
  {
    title: "Website Development",
    imageUrl: "https://img.freepik.com/free-vector/two-developers-working-with-big-data-technology-big-data-management-storage-database-analytics-design-data-software-engineering-concept-vector-isolated-illustration_335657-2135.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "We create responsive and beautiful websites to help your business succeed in the digital space.",
  },
  {
    title: "Mobile Application",
    imageUrl: "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "Build native and hybrid mobile apps that enhance user experience and provide innovative solutions.",
  },
  {
    title: "E-commerce Development",
    imageUrl: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148527124.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "We design and develop e-commerce platforms with user-friendly interfaces to boost your online sales.",
  },
  {
    title: "Custom Software Solutions",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "Create custom software to streamline your business operations and improve efficiency.",
  },
  {
    title: "Corporate Network Infrastructure",
    imageUrl: "https://img.freepik.com/free-vector/data-storage-center-cross-section-concept-with-it-specialist-man-providing-hardware_33099-340.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "Successfully implemented a secure and high-performance network infrastructure for corporate operations.",
  },
  {
    title: "Enterprise Server Maintenance",
    imageUrl:
      "https://img.freepik.com/free-vector/data-center-isometric-composition_1284-18847.jpg?ga=GA1.1.1287615269.1706798937&semt=ais_hybrid", // Ganti dengan URL gambar asli atau undraw yang sesuai
    description:
      "Delivered comprehensive server maintenance services to ensure optimal performance and security for enterprise clients.",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Portofolio</h1>
        <p className="text-xl font-light text-gray-600 mb-12">
          A glimpse of some of our successful projects and services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
