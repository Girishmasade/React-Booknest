import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-br from-[#2B6CB0] to-[#F6AD55] py-12 px-6 mt-20 w-full">
      <div className=" mx-auto text-center flex flex-col gap-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Stay Updated 📚
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Subscribe to our newsletter and never miss an update about your favorite books!
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 w-full sm:w-[400px] rounded-full border border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default Newsletter;
