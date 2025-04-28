import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navData = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Books", link: "/books" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-transparent text-white fixed top-0 left-0 w-full shadow-purple-200 shadow-md z-50">
      <Link to="/">
        <img src={logo} alt="Logo" className="max-w-[150px]" />
      </Link>

      <div className="hidden md:flex gap-8">
        {navData.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="hover:text-blue-500 font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </button>
      </div>
      {open && (
        <div className="absolute top-[83px] min-h-screen left-52 w-full bg-gradient-to-br from-[#2B6CB0] to-orange-400 flex flex-col items-start gap-6 shadow-md md:hidden">
          {navData.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="hover:text-blue-800 font-semibold text-lg"
              onClick={() => setOpen(false)} // close menu after clicking
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
