// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D2E8E4] text-gray py-12 px-6 sm:px-10 lg:px-20">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-yellow-400 pl-2">
            Contact Information
          </h3>
          <p className="mb-2 text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mb-1">📞 +91 89090786567</p>
          <p className="mb-1">🕒 Response Hours: 8 AM – 8 PM</p>
          <p>✉️ info@anklearn.com</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-yellow-400 pl-2">
            Categories
          </h3>
          <ul className="space-y-2 text-gray">
            <li className="hover:text-yellow-300 transition">Counselling</li>
            <li className="hover:text-yellow-300 transition">Health & Fitness</li>
            <li className="hover:text-yellow-300 transition">Individual Development</li>
            <li className="hover:text-yellow-300 transition">More</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-yellow-400 pl-2">
            Links
          </h3>
          <ul className="space-y-2 text-gray">
            <li className="hover:text-yellow-300 transition">About Us</li>
            <li className="hover:text-yellow-300 transition">Blog</li>
            <li className="hover:text-yellow-300 transition">Contact</li>
            <li className="hover:text-yellow-300 transition">FAQs</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-yellow-400 pl-2">
            Newsletter Signup
          </h3>
          <p className="mb-4 text-sm text-gray">
            Stay up to date with the latest courses and updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-teal-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-teal-600 mt-10"></div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-gray">
        © {new Date().getFullYear()} <span className="font-semibold text-yellow-300">IELTS Prep</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
