import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            Saurabh panchbhai
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#Profile" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#About" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#Skill" className="text-gray-600 hover:text-black">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <a href="#Profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Home
          </a>
          <a href="#About" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            About
          </a>
          <a href="#Skill" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Skills
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
