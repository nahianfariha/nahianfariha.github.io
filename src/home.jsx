import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Image imports
import ill1 from './images/illustrations/ill1.webp';
import tothumb from './images/totebags/tothumb.webp';
import p0 from './images/paintings/p0.webp';
import ban8 from './images/banners/ban8.webp';
import ani1 from './images/animations/ani1.gif';
import tee1 from './images/tshirts/tee1.webp';
import ui1 from './images/uidesign/ui1.webp';
import adobeThumb from './images/adobethumb.webp';
import randomVideo from './images/random.MP4'; 

const Home = () => {
  return (
    <>
      <div className="p-4 md:ml-[20rem] mt-3">
        {/* Optional video banner */}
        <div className="w-full mb-6 bg-black rounded-lg overflow-hidden">
          <video
            src={randomVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[90vh] object-cover"
          />
        </div>



        <div className="grid grid-cols-2 gap-6">
          {[
            { src: ill1, label: "ILLUSTRATIONS", link: "/illustrations" },
            { src: tothumb, label: "PAINTED TOTE BAGS", link: "/totebags" },
            { src: p0, label: "PAINTINGS", link: "/paintings", rel: "preload" },
            { src: ban8, label: "CARTOON/EVENT BANNERS", link: "/banners" },
            { src: ani1, label: "2D ANIMATIONS", link: "/2danimation" },
            { src: tee1, label: "T-SHIRTS", link: "/tee" },
            { src: ui1, label: "UI-UX DESIGN", link: "/uidesign" },
            { src: adobeThumb, label: "PRINT DESIGN, PRODUCT DESIGN & ADOBE EDITS", link: "/adobe" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-none transform-none hover:scale-100"
                  src={item.src}
                  alt={item.label}
                />
              </div>
              <p className="mt-2 text-l text-gray-700 font-lato font-bold">{item.label}</p>
            </Link>
          ))}
        </div>

        {/* What People Are Saying Section */}
        <div className="mt-40 flex justify-center">
          <Link
            to="/appr"
            className="bg-green-600 hover:bg-yellow-600 text-white font-lato font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition duration-300"
          >
            See What People Are Saying →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4  md:ml-[20rem] mt-20 bg-white rounded-lg shadow-sm ">
        <div className="w-full max-w-screen-xl mx-auto text-center">
          <p className="text-sm font-lato font-bold text-gray-700 dark:text-gray-400 mb-4">
            “IMAGINATION IS WHAT ALLOWS YOUR MIND TO DISCOVER.” – UNKNOWN
          </p>
          <hr className="border-gray-200 my-4" />
          <p className="text-sm font-lato font-bold text-gray-500 dark:text-gray-400">
           © 2025 Nahian Fariha. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
