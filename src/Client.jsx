import React from "react";

function Client() {
  return (
    <section className="client-section py-12 bg-gray-100">
      <div className="max-w-full mx-auto px-6 text-center">
        {/* Flex Container to align "Our Clients" and scrolling names */}
        <div className="flex items-center justify-center space-x-8">
          <h2 className="text-1xl font-bold text-gray-800">MyClients</h2>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="client-names-banner flex animate-marquee w-full">
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Pertamina
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">Gojek</p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">Grab</p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">Shopee</p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Tokopedia
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Traveloka
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Amazon AWS
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Microsoft
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Instagram
              </p>
              <p className="mx-8 text-xl text-gray-700 font-semibold">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
