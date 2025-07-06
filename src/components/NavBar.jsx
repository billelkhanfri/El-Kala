import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Lieux", href: "/lieux" },
  { label: "Contact", href: "/contact" },
];

function NavBar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const currentLocation = (path) => location.pathname === path;
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 backdrop-blur shadow-md bg-white/60">
      <div className=" w-full max-w-6xl  mx-auto px-4 sm:px-6 lg:p-4 py-6 flex justify-between items-center">
        <a href="/" className="text-2xl text-primaryBlue font-bold ">
          {" "}
          Découvre El Kala
        </a>
        <nav>
          <button
            onClick={toggle}
            className="  md:hidden text-blue-500 font-semibold"
          >
            {isOpen ? "Fermer" : "menu"}
          </button>
          <ul className="hidden  md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`{ ${
                    currentLocation(link.href)
                      ? "text-white bg-coral"
                      : "text-coal border-2 border-transparent"
                  }  hover:border-gray-300 py-2 px-4 rounded-md transition-colors duration-200 text-coal text-md `}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 bg-bgBeige p-4 rounded-lg text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block py-2 px-4 rounded-md text-md border transition-all duration-200 ease-in-out
      ${
        currentLocation(link.href)
          ? "text-white bg-coral border-gray-300"
          : "text-coal hover:text-coral  hover:border-gray-300"
      }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default NavBar;
