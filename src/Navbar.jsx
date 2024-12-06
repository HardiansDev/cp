import React, { useState, useRef } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({ onMenuClick, activeLink }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    if (!showSearch) setTimeout(() => searchInputRef.current.focus(), 0);
  };

  const handleLinkClick = (link) => {
    onMenuClick(link);
    setIsMenuOpen(false);
  };

  const navLinks = ["home", "about", "service", "portfolio", "contact"];

  const renderLinks = (isMobile) =>
    navLinks.map((link) => (
      <a
        key={link}
        href={`#${link}`}
        onClick={() => handleLinkClick(link)}
        className={`text-white hover:text-yellow-400 font-medium ${
          activeLink === link ? "text-yellow-400 font-bold" : ""
        } ${isMobile ? "block" : ""}`}
      >
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </a>
    ));

  return (
    <nav className="bg-teal-800 p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center lg:space-x-8">
        {/* Logo dan Hamburger */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-2xl font-bold">
            HDTECH.ID
          </a>
          <FaBars
            className="text-white cursor-pointer lg:hidden"
            size={24}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-teal-800 p-4 lg:hidden z-50">
            {renderLinks(true)}
          </div>
        )}

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-8">{renderLinks(false)}</div>

        {/* Search Icon */}
        <div className="relative flex items-center space-x-4">
          <FaSearch
            onClick={handleSearchToggle}
            className="text-white cursor-pointer hover:text-yellow-400"
            size={20}
          />
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                ref={searchInputRef}
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none w-48"
                placeholder="Search..."
              />
              {searchText && (
                <FaTimes
                  onClick={() => setSearchText("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={20}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
