import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-10 mt-20">
      
      {/* Top Section */}
      <div className="w-[90%] mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white">BookNest 📚</h2>
          <p className="text-gray-400 text-md leading-relaxed">
            Your favorite place for discovering, exploring, and falling in love <br />
            with books. <span className="text-purple-400">Affordable Reading for Everyone 📚❤️</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-md">
            <li><a href="/" className="hover:text-purple-400 transition duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400 transition duration-300">About Us</a></li>
            <li><a href="/books" className="hover:text-purple-400 transition duration-300">Books</a></li>
            <li><a href="/contact" className="hover:text-purple-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-blue-500 transition duration-300"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400 transition duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 transition duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition duration-300"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 my-8 pb-3"></div>

      <div className="text-center text-gray-500 text-md pb-6">
        © {new Date().getFullYear()} <span className="text-white">BookNest</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
