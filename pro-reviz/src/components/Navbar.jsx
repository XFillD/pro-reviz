import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import revizLogo from "../assets/revizLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 ${
        transparent ? "bg-transparent" : "bg-black bg-opacity-80"
      } transition-colors duration-1000 ease-in-out`}
    >
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <img src={revizLogo} alt="Reviz Logo" className="h-full" />
        <ul className="hidden md:flex">
          <li className="relative p-4 transition-all">
            <a
              href="#"
              className="hover:text-green-500"
              onClick={() => scrollToSection("home")}
            >
              Domů
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a
              href="#"
              className="hover:text-green-500"
              onClick={() => scrollToSection("services")}
            >
              Služby
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a
              href="#"
              className="hover:text-green-500"
              onClick={() => scrollToSection("about")}
            >
              O nás
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a
              href="#"
              className="hover:text-green-500"
              onClick={() => scrollToSection("references")}
            >
              Reference
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a
              href="#"
              className="hover:text-green-500"
              onClick={() => scrollToSection("contact")}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
