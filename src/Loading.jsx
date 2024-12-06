import React, { useState, useEffect } from "react";

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading false setelah 2 detik (atau sesuaikan waktu sesuai kebutuhan)
    }, 2000);

    return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">
            Sabarin ya..
          </p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loading;
