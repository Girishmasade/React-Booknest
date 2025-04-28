import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-center text-center w-full h-full px-3 text-white gap-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <Typewriter
            words={['Welcome to BookNest']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl mb-8"
        >
          Discover Your Next Favorite Book
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
