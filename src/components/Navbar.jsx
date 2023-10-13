import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import revizLogo from "../assets/revizLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const handleNav = () => {
    setNav(!nav);
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
            <a href="#home" className="hover:text-green-500">
              Domů
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a href="#sluzby" className="hover:text-green-500">
              Služby
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a href="#about" className="hover:text-green-500">
              O nás
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a href="#portf" className="hover:text-green-500">
              Portfolio
            </a>
          </li>
          <li className="relative p-4 transition-all">
            <a href="#kontakt" className="hover:text-green-500">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
