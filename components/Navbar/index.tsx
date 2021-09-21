import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center px-5 py-10">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <a className="text-4xl font-black text-gray-800">Bloomy</a>
          <span className="text-5xl rounded-full text-blue-600">.</span>
        </div>

        <div className="flex w-full justify-center px-10">
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
        <div className="flex w-full justify-center px-5">
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
          <div className="p-3 rounded-full bg-gradient-to-tr from-blue-800 to-blue-400">
            <HiOutlineMenuAlt4 className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
