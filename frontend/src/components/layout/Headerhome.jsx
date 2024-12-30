import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const location = useLocation(); // Get the current path
  const navigate = useNavigate(); // Get the navigate function

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Check login state on component mount
    const token = localStorage.getItem("auth"); // Example token check
    setIsLoggedIn(!!token); // Set login state based on token existence

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the current page is the chat page
  const isChatPage = location.pathname === "/chat"; // Adjust the path if necessary

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isChatPage
          ? "bg-blue-900"
          : isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent bg-opacity-50"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
        <Link
          to="/"
          className={`text-xl md:text-3xl font-bold ${
            isChatPage ? "text-white" : isScrolled ? "text-black" : "text-white"
          } transition-colors duration-300`}
        >
          Gupshap
        </Link>

        {/* Link for Login/Register */}
        <Link
          to="/login"
          className={`border-2 ${
            isChatPage
              ? "border-white"
              : isScrolled
              ? "border-black"
              : "border-white"
          } text-${
            isChatPage ? "white" : isScrolled ? "black" : "white"
          } px-2 py-3 md:px-6 md:py-3 rounded-lg transition-all duration-300 hover:bg-blue-900 hover:text-white`}
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
