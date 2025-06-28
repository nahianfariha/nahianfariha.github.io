import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import T-shirt images
import tee1 from './images/tshirts/tee1.webp';
import tee2 from './images/tshirts/tee2.webp';
import tee3 from './images/tshirts/tee3.webp';
import tee4 from './images/tshirts/tee4.webp';
import tee5 from './images/tshirts/tee5.webp';
import tee6 from './images/tshirts/tee6.webp';

function Tee() {
  const images = [
    { src: tee1, caption: "ARTY WAVE TEE" },
    { src: tee2, caption: "GEOMETRIC BLOOM TEE" },
    { src: tee3, caption: "GALAXY VIBES TEE" },
    { src: tee4, caption: "NEON NIGHT TEE" },
    { src: tee5, caption: "URBAN GRUNGE TEE" },
    { src: tee6, caption: "MINIMAL DREAM TEE" },
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

        {/* First image full-width */}
        <motion.div
          className="w-full mb-12 rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.img
            src={images[0].src}
            onClick={() => handleClick(images[0].src)}
            alt={images[0].caption}
            className="w-full h-auto cursor-zoom-in rounded-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <div className="flex flex-col items-center justify-center mt-4 gap-2 mb-4">
            <p className="font-lato font-bold text-center">{images[0].caption}</p>
            <p className="font-lato font-bold text-center">PRICE : NOT AVAILABLE</p>
            <button
              onClick={() => window.location.href = `/buy?title=${encodeURIComponent(images[0].caption)}`}
              className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700"
            >
              BUY PRINT
            </button>
          </div>
        </motion.div>

        {/* Remaining images in 3-column layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4">
          {images.slice(1).map(({ src, caption }, index) => (
            <motion.div
              key={index + 1}
              className="break-inside-avoid rounded-sm shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.img
                src={src}
                onClick={() => handleClick(src)}
                alt={caption}
                className="w-full aspect-[3/4] object-cover cursor-zoom-in"
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
                  BUY PRINT
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
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

export default Tee;
