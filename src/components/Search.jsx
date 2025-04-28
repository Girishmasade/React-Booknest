import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div 
      className="bg-gray-100 dark:bg-gray-900 bg-opacity-50 min-h-[100px] w-full flex justify-center items-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6"
      >

        {/* Dropdown */}
        <select
          name="books"
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 bg-gray-100 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-purple-400 uppercase"
        >
          <option value="books">Books</option>
          <option value="stories">Stories</option>
          <option value="kids">Kids</option>
          <option value="yoga">Yoga</option>
          <option value="meditation">Meditation</option>
          <option value="comic">Comic</option>
        </select>

        {/* Search Form */}
        <motion.form className="flex w-full md:w-auto gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="Enter what you want..."
            className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full md:min-w-[300px] bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button 
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md text-xl flex items-center justify-center transition"
          >
            <IoSearchOutline />
          </button>
        </motion.form>

      </motion.div>
    </motion.div>
  );
};

export default Search;
