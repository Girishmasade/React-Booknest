import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 flex flex-col items-center justify-center py-16 px-6">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us 📬
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Got questions or suggestions? We'd love to hear from you!
        </p>
      </div>

      <form className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-8 py-10 w-full max-w-2xl flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 text-lg"
        >
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;
