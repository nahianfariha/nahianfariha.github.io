import { useState } from "react";
import logo from './images/logocircle0.avif';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Logo button for mobile only */}
      <div className="md:hidden flex items-center justify-between p-2">
        {/* Logo */}
        <img src={logo} className="h-10 w-10" alt="Logo" />

        {/* Hamburger Menu */}
        <button onClick={() => setIsSidebarOpen(true)} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>


      {/* Sidebar (hidden by default on mobile, always shown on desktop) */}
     <aside
         className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-lg transform transition-transform
         w-80 sm:translate-x-0
         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
         >
         <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-white relative">
            {/* Close button for mobile only */}
            <div className="sm:hidden flex justify-end">
               <button onClick={() => setIsSidebarOpen(false)}>
               <IoClose size={24} />
               </button>
            </div>

          {/* Vertical line divider (desktop only) */}
          <div className="hidden sm:block absolute right-0 top-[61%] transform -translate-y-[30%] h-1/3 w-px bg-gray-200"></div>

          {/* Logo and Title */}
          <a className="flex flex-col items-center justify-center py-4 mt-0 mb-1">
            <img src={logo} className="h-40 w-40 mt-0" />
            <span className="font-sacramento text-4xl text-center text-black rounded-lg mt-5">
              by Nahian Fariha
            </span>
          </a>

          {/* Nav Items */}
          <ul className="space-y-0 text-m tracking-widest">
            <li>
              <span className="flex justify-center items-center font-lato font-bold text-center p-2 mt-7 mb-9 text-black rounded-lg dark:text-black">
                CLICK AN IMAGE CATEGORY TO VIEW THE FULL GALLERY →
              </span>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="flex justify-center items-center mb-1 text-black rounded-lg hover:bg-yellow-50 font-lato font-bold"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/adobe"
                onClick={() => setIsSidebarOpen(false)}
                className="flex justify-center items-center text-black rounded-lg hover:bg-yellow-50 font-lato font-bold"
              >
                SHOP OR CUSTOMIZE
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsSidebarOpen(false)}
                className="flex justify-center items-center mb-10 text-black rounded-lg hover:bg-yellow-50 font-lato font-bold"
              >
                ABOUT
              </Link>
            </li>

            {/* Social Media Icons */}
            <li className="flex justify-center mt-6 space-x-5">
              <a
                href="https://facebook.com/dotpicturesstudiofb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.youtube.com/@dotpicturesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-red-600"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="mailto:dotpicturesstudio@gmail.com"
                className="text-black hover:text-yellow-600"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://instagram.com/dotpicturesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/dotpicturesstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700"
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
