import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/features", label: "Fitur" },
    { to: "/pricing", label: "Harga" },
    { to: "/faq", label: "FAQ" },
  ];

  const activeLinkStyle = {
    color: "#7C3AED", // Warna 'primary' Anda
    fontWeight: "600",
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Analytica
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300"
          >
            Hubungi Kami
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white pb-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4 pt-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg w-4/5 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
