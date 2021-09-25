import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<Boolean>(true);
  return (
    <>
      {/* Sidebar menu */}
      <div>
        {/* Transparent backdrop */}
        <div
          className={`w-full h-full fixed z-10 bg-white opacity-60 ${
            collapsed ? "hidden" : ""
          }`}
        />
        {/* Sidebar div */}

        <div
          className={`w-80 h-full fixed right-0 z-20 bg-white shadow-2xl transform transition ease-in-out duration-500 ${
            collapsed ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="flex flex-col justify-between w-full h-full py-10 px-10">
            <div className="absolute p-2 right-3">
              <IoCloseOutline
                onClick={() => setCollapsed(!collapsed)}
                className="w-8 h-8 opacity-50 cursor-pointer"
              />
            </div>
            {/* Brand logo */}
            <div className="flex items-center mt-10">
              <a className="text-4xl font-black text-gray-800">Bloomy</a>
              <span className="text-5xl rounded-full text-blue-600">.</span>
            </div>
            {/* Links */}
            <ul className="flex flex-col">
              <li className="py-3 border-b border-opacity-30">Home</li>
              <li className="py-3 border-b border-opacity-30">Lifestyle</li>
              <li className="py-3 border-b border-opacity-30">Inspiration</li>
              <li className="py-3 border-b border-opacity-30">Pages</li>
              <li className="py-3 border-b border-opacity-30">Contact</li>
            </ul>
            {/* Social buttons */}
            <div className="flex w-full">
              <ul className="flex items-center space-x-5">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Default Navbar */}
      <nav className="w-full flex items-center px-5 py-10">
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <a className="text-4xl font-black text-gray-800">Bloomy</a>
            <span className="text-5xl rounded-full text-blue-600">.</span>
          </div>

          <div className="hidden lg:flex w-full justify-center px-10">
            <ul className="flex items-center space-x-10 text-gray-500">
              <li className="px-6 py-2 rounded-full bg-gradient-to-tr from-blue-800 to-blue-400 text-white">
                Home
              </li>
              <li>Lifestyle</li>
              <li>Inspiration</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden lg:flex w-full justify-center px-5">
            <ul className="flex items-center space-x-5">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-gradient-to-tr from-blue-800 to-blue-400">
              <AiOutlineSearch className="text-white" />
            </div>
            <div
              onClick={() => setCollapsed(!collapsed)}
              className="p-3 rounded-full bg-gradient-to-tr from-blue-800 to-blue-400"
            >
              <HiOutlineMenuAlt4 className="text-white" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
