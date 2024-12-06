import React from "react";

const services = [
  {
    title: "Web Development",
    image:
      "https://img.freepik.com/free-vector/front-end-concept-illustration_114360-22213.jpg?t=st=1731489664~exp=1731493264~hmac=cafdb8c37e514ba7a32afcec4b3a7c68635104e7108257b5faa6ef1ccfb0864f&w=740",
    description:
      "We provide high-quality web development services, including responsive design, backend integration, and SEO optimization to help businesses establish a strong online presence.",
    technologies: [
      {
        name: "HTML",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      },
      {
        name: "CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Laravel",
        logo: "https://www.svgrepo.com/show/353985/laravel.svg",
      },
      {
        name: "MySQL",
        logo: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
      },
    ],
  },
  {
    title: "Software Development / Mobile Apps",
    image:
      "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1731489740~exp=1731493340~hmac=0c4efd83e7ec34dee4ead483eb2a25b60f8d746c325807f2c0b7195b542ef8c9&w=740",
    description:
      "Our software development team specializes in building scalable, efficient, and secure software solutions tailored to meet your business needs.",
    technologies: [
      {
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "MongoDB",
        logo: "https://www.svgrepo.com/show/303232/mongodb-logo.svg",
      },
      {
        name: "Flutter",
        logo: "https://www.svgrepo.com/show/353751/flutter.svg",
      },
      {
        name: "Kotlin",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      },
    ],
  },
  {
    title: "Networking",
    image:
      "https://img.freepik.com/free-vector/distance-working-abstract-concept_335657-3049.jpg?ga=GA1.2.1287615269.1706798937&semt=ais_hybrid",
    description:
      "Our networking services ensure reliable, high-speed connectivity, network security, and optimal configuration for businesses of all sizes.",
    technologies: [
      {
        name: "Cisco",
        logo: "https://www.svgrepo.com/show/448278/cisco.svg",
      },
    ],
  },
  {
    title: "Maintenance Server",
    image:
      "https://img.freepik.com/free-vector/data-center-isometric-composition_1284-18847.jpg?ga=GA1.2.1287615269.1706798937&semt=ais_hybrid",
    description:
      "Our maintenance services include server monitoring, troubleshooting, updates, and 24/7 support to keep your servers running smoothly.",
    technologies: [
      {
        name: "Linux",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
      },
      {
        name: "Windows Server",
        logo: "https://www.svgrepo.com/show/382713/windows-applications.svg",
      },
      {
        name: "VMware",
        logo: "https://www.svgrepo.com/show/473827/vmware.svg",
      },
    ],
  },
];

const Service = () => {
  return (
    <div className="w-full min-h-full bg-teal-800 px-6 py-16">
      <h1
        id="services"
        className="text-4xl font-bold text-center mb-4 text-white"
      >
        Our Service
      </h1>
      <p className="text-center text-lg text-white-200 mb-12">
        Empowering Businesses with Smart Technology
      </p>
      <div className="flex flex-col md:flex-row flex-wrap gap-12 container mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              {service.title}
            </h4>
            <div className="flex gap-6 mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-1/2 h-40 object-cover rounded-md shadow-md"
              />
              <div className="w-1/2 flex flex-wrap items-center gap-3">
                {service.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center mb-2">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12"
                    />
                    <span className="text-xs mt-1 text-gray-700">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {service.description}
            </p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-full transition-colors duration-100 hover:bg-yellow-600 hover:text-white text-medium">
              Order Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
