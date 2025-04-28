import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/logo.png';   
import booksImg from '../assets/booksImg.png';   
import missionImg from '../assets/missionImg.jpg'; 

const BookInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#2B6CB0] via-[#33465a] to-[#F6AD55] text-white flex flex-col items-center px-6 py-12 gap-20">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full"
      >
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-gray-300">
            Welcome to <span className="text-purple-400 font-semibold">BookNest</span>! We started with a dream: making
            amazing books accessible to every book lover out there. Our journey
            began with a small collection and grew into a thriving community of
            readers passionate about knowledge, stories, and imagination.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl w-full"
      >
        <img
          src={booksImg}
          alt="Importance of Books"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Why Books Are Important</h2>
          <p className="text-gray-300">
            Books are more than just paper and ink. They shape our thoughts,
            inspire creativity, and open up endless worlds. They fuel
            imagination, provide knowledge, and connect us to people and ideas
            across time and space.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full"
      >
        <img
          src={missionImg}
          alt="Our Mission"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-300">
            <span className="text-green-400 font-semibold">Affordable Reading for Everyone 📚❤️</span><br />
            We believe every person deserves access to the magic of reading.
            Our mission is simple yet powerful: deliver affordable, quality books
            to everyone, everywhere, creating a better, more enlightened world.
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default BookInfo;
