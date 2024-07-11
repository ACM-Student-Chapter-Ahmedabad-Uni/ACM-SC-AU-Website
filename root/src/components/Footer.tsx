// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              We are a community-driven organization focused on empowering students through technology.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="list-none">
              <li><a href="#" className="text-sm hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Events</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Gallery</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Team</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <p className="text-sm">Stay connected with us on social media.</p>
            <div className="flex mt-2 space-x-4">
              <a href="#" aria-label="Facebook" className="bg-blue-600 hover:bg-blue-700 text-white rounded shadow px-2 py-1">FB</a>
              <a href="#" aria-label="Twitter" className="bg-blue-400 hover:bg-blue-500 text-white rounded shadow px-2 py-1">TW</a>
              <a href="#" aria-label="Instagram" className="bg-red-600 hover:bg-red-700 text-white rounded shadow px-2 py-1">IG</a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ahmedabad University ACM Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
