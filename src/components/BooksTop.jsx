import React from 'react';
import { motion } from 'framer-motion';
import books from '../utils/Data/Data';

const BooksTop = () => {
  return (
    <div className="min-h-screen p-6  flex flex-col items-center bg-gray-500">
    
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-white font-bold mb-8 pb-10"
      >
        Top Rated Books
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl">
        {books.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: item.id * 0.1 }}
            className="bg-gradient-to-br from-[#2B6CB0] to-[#F6AD55] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center p-4 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[150px] h-[200px] object-cover rounded-md mb-4"
            />

            <h2 className="text-white font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-200 text-sm mb-1">{item.author}</p>
            <p className="text-yellow-300 text-md font-bold mb-4">₹{item.priceINR}</p>

            <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full hover:bg-indigo-100 transition duration-300">
              View More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BooksTop;
