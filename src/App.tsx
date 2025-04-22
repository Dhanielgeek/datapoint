import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/routes";
import logo from "./assets/datalogo.png";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="relative">
          <img
            src={logo}
            alt="Data Logo"
            className="w-32 h-32 object-contain animate-pulse"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div
                className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                style={{ animationDelay: "600ms" }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-blue-500 mt-12 font-bold ">
          Datapoint <span className="text-red-600">Academy</span>
        </p>
      </div>
    );
  }

  return <RouterProvider router={Routes} />;
};

export default App;
