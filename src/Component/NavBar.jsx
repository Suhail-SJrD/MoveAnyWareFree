import React, { useState } from "react";
import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brandCol fixed top-0 w-full z-50 shadow-md">
      {/* Nav Container */}
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-white font-bold text-lg">
            Any Time Movers
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden text-white md:flex space-x-8">
          <NavItem label="Our Service" />
          <NavItem label="About Us" />
          <NavItem label="States" />
          <NavItem label="Blogs" />
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          title="Menu"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-brandCol text-white flex flex-col items-center space-y-4 py-5 md:hidden">
          <NavItem label="Our Service" onClick={() => setMenuOpen(false)} />
          <NavItem label="About Us" onClick={() => setMenuOpen(false)} />
          <NavItem label="States" onClick={() => setMenuOpen(false)} />
          <NavItem label="Blogs" onClick={() => setMenuOpen(false)} />
        </nav>
      )}
    </header>
  );
}

// Individual Navigation Item Component
const NavItem = ({ label, onClick }) => (
  <div
    className="relative group cursor-pointer text-lg font-medium"
    onClick={onClick}
  >
    <span>{label}</span>
    {/* Underline Animation */}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
  </div>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavBar.propTypes = {
  setTemp: PropTypes.func,
};

export default NavBar;
