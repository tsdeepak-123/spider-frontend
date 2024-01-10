import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="bg-white p-6 flex justify-between items-center perspective-3d rotate-x-1">
        <img src="/Images/spiderr.jpg" alt="" className="w-32 h-auto cursor-pointer" />

        <div className="hidden md:flex space-x-4 cursor-pointer">
          <p>Home</p>
          <p>Profile</p>
          <p>Projects</p>
          <p>Gallery</p>
          <p>Contact US</p>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon style={{color:"black"}} /> : <MenuIcon style={{color:"black"}} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-white p-4 cursor-pointer rounded-md shadow-md">
            <p className="text-gray-700 mb-2">Home</p>
            <p className="text-gray-700 mb-2">Profile</p>
            <p className="text-gray-700 mb-2">Projects</p>
            <p className="text-gray-700 mb-2">Gallery</p>
            <p className="text-gray-700 mb-2">Contact US</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
