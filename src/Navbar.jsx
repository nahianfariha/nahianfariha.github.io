import { useState, useRef, useEffect } from "react";
import logo from './images/logocircle0.webp';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaShoppingCart,
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const touchStartX = useRef(null);

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;

    if (diff > 50) {
      setIsSidebarOpen(true); // swipe right to open
      touchStartX.current = null;
    } else if (diff < -50) {
      setIsSidebarOpen(false); // swipe left to close
      touchStartX.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div>
      {/* Mobile top bar */}
      <div className="md:hidden relative flex items-center justify-between px-4 py-2">
        {/* Hamburger Menu (Left) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-black focus:outline-none"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={logo} className="h-28 w-28 drop-shadow-md mt-2" alt="Logo" />
          <span className="font-sacramento text-4xl mt-2 text-gray-800">
            by Nahian Fariha
          </span>
        </div>

        {/* Login & Cart */}
        <div className="flex space-x-4 items-center">
          <button className="text-black  hover:text-yellow-500 cursor-pointer">
            <FaShoppingCart size={18} />
            <span className="text-xs font-lato font-bold mt-1">Cart</span>
          </button>
          <button className="text-black  hover:text-yellow-500 cursor-pointer">
            <FaUser size={18} />
            <span className="text-xs font-lato font-bold mt-1">Login</span>
          </button>
          
        </div>
        </div>
     



      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-lg transform transition-transform w-80 
        sm:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-white relative">
          {/* Close button for mobile */}
          <div className="sm:hidden flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)}>
              <IoClose size={24} />
            </button>
          </div>

          {/* Desktop divider */}
          <div className="hidden sm:block absolute right-0 top-[61%] transform -translate-y-[30%] h-1/3 w-px bg-gray-200"></div>

          {/* Sidebar Logo and Title (desktop only) */}
          <a className="flex flex-col items-center justify-center py-4 mt-0 mb-1">
            <img src={logo} className="h-40 w-40 mt-0" alt="Logo" />
            <span className="font-sacramento text-4xl text-center text-black rounded-lg mt-5">
              by Nahian Fariha
            </span>
          </a>


          {/* Nav Items */}
          <ul className="space-y-0 text-m tracking-widest">
            <li>
              <span className="flex justify-center items-center font-lato font-bold text-center p-2 mt-5 mb-5 text-black rounded-lg dark:text-black">
                CLICK AN IMAGE CATEGORY TO VIEW THE FULL GALLERY →
              </span>
            </li>
            <div className="hidden md:flex justify-center gap-20">
            <div className="flex flex-col items-center mb-5 text-black hover:text-yellow-500">
              <FaUser size={20} />
              <span className="text-sm font-lato font-bold mt-1">Login</span>
            </div>
            <div className="flex flex-col mb-5 items-center text-black hover:text-yellow-500">
              <FaShoppingCart size={20} />
              <span className="text-sm font-lato font-bold mt-1">Cart</span>
            </div>
            </div>

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
                className="flex justify-center items-center mb-7 text-black rounded-lg hover:bg-yellow-50 font-lato font-bold"
              >
                ABOUT
              </Link>
            </li>

            {/* Social Icons */}
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
