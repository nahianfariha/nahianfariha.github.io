import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ban00 from './images/banners/ban00.webp';
import ban0 from './images/banners/ban0.webp';
import ban1 from './images/banners/ban1.webp';
import ban2 from './images/banners/ban2.webp';
import ban3 from './images/banners/ban3.webp';
import ban5 from './images/banners/ban5.webp';
import ban6 from './images/banners/ban6.webp';
import ban8 from './images/banners/ban8.webp';
import ban9 from './images/banners/ban9.webp';
import ban10 from './images/banners/ban10.webp';
import ban11 from './images/banners/ban11.webp';

function Banners() {
  const images = [
    { src: ban00, caption: "CARTOON WEDDING BANNERS" },
    { src: ban0, caption: "PRINTED CARTOON WEDDING BANNERS" },
    { src: ban1, caption: "PRINT-READY CARTOON WEDDING BANNERS" },
    { src: ban2, caption: "PRINTED WEDDING BANNERS" },
    { src: ban3, caption: "PRINT-READY CARTOON WEDDING BANNERS" },
    { src: ban5, caption: "CARTOON WEDDING BANNERS WITH ANIMATION" },
    { src: ban6, caption: "CUSTOMIZED CARTOON WEDDING BANNER" },
    { src: ban8, caption: "CUSTOMIZED WEDDING BANNER" },
    { src: ban9, caption: "CUSTOMIZED WEDDING BANNER" },
    { src: ban10, caption: "EVENT BANNERS" },
    { src: ban11, caption: "EVENT BANNERS" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4 md:ml-[20rem] mt-3">
      <div className="p-4">
        <div className="columns-2 md:columns-2 lg:columns-2 gap-7 space-y-4">
          {images.map(({ src, caption }, index) => (
            <motion.div
              key={index}
              className="relative rounded-sm shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.img
                src={src}
                onClick={() => handleClick(src)}
                className="w-full aspect-[3/2] object-cover cursor-zoom-in"
                alt={caption}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <div className="flex flex-col items-center justify-center mt-4 gap-2 mb-4">
                <p className="font-lato font-bold text-center">{caption}</p>
                <p className="font-lato font-bold text-center">PRICE : NOT AVAILABLE</p>
                <button
                  onClick={() => window.location.href = `/buy?title=${encodeURIComponent(caption)}`}
                  className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700"
                >
                  ORDER
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full rounded-lg shadow-xl cursor-zoom-out"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banners;
