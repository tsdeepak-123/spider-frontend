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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black py-2">
          Spider Interiors
        </h1>

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
          <div className="md:hidden absolute top-16 right-0 left-0 bg-white p-4 cursor-pointer">
            <p>Home</p>
            <p>Profile</p>
            <p>Projects</p>
            <p>Gallery</p>
            <p>Contact US</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
