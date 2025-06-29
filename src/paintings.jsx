import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import painting images
import p00 from './images/paintings/p00.webp';
import p0 from './images/paintings/p0.webp';
import p1 from './images/paintings/p1.webp';
import p2 from './images/paintings/p2.webp';
import p3 from './images/paintings/p3.webp';
import p4 from './images/paintings/p4.webp';
import p5 from './images/paintings/p5.webp';
import p6 from './images/paintings/p6.webp';
import p7 from './images/paintings/p7.webp';
import p8 from './images/paintings/p8.webp';
import p9 from './images/paintings/p9.webp';
import p10 from './images/paintings/p10.webp';
import p11 from './images/paintings/p11.webp';
import p13 from './images/paintings/p13.webp';
import p15 from './images/paintings/p15.webp';
import p16 from './images/paintings/p16.webp';
import p17 from './images/paintings/p17.webp';
import p18 from './images/paintings/p18.webp';
import p19 from './images/paintings/p19.webp';
import p20 from './images/paintings/p20.webp';
import p21 from './images/paintings/p21.webp';
import p22 from './images/paintings/p22.webp';
import p23 from './images/paintings/p23.webp';
import p24 from './images/paintings/p24.webp';
import p25 from './images/paintings/p25.webp';
import p27 from './images/paintings/p27.webp';
import p28 from './images/paintings/p28.webp';
import p29 from './images/paintings/p29.webp';
import p30 from './images/paintings/p30.webp';
import p31 from './images/paintings/p31.webp';

function Paintings() {
  const images = [
    { src: p00, caption: "NAME IS NOT AVAILABLE" },
    { src: p0, caption: "SKYBLUE" },
    { src: p1, caption: "VICTORY IS A STATE OF MIND" },
    { src: p2, caption: "BAILANDO" },
    { src: p3, caption: "NAME IS NOT AVAILABLE" },
    { src: p4, caption: "HOTEL CALIFORNIA" },
    { src: p5, caption: "THE OCEAN" },
    { src: p6, caption: "DON'T STOP ME NOW" },
    { src: p7, caption: "COMFORTABLY NUMB" },
    { src: p8, caption: "ONE WAY" },
    { src: p9, caption: "WOMAN WITH A HAT" },
    { src: p10, caption: "NAME IS NOT AVAILABLE" },
    { src: p11, caption: "WAR & PEACE" },
    { src: p13, caption: "NAME IS NOT AVAILABLE" },
    { src: p15, caption: "NAKSHI STYLE PAINTING FOR HOME-DECOR" },
    { src: p16, caption: "NAKSHI STYLE PAINTING FOR HOME-DECOR" },
    { src: p17, caption: "NAKSHI STYLE PAINTING FOR HOME-DECOR" },
    { src: p18, caption: "NAKSHI STYLE PAINTING FOR HOME-DECOR" },
    { src: p19, caption: "WATER LILIES" },
    { src: p20, caption: "NAME IS NOT AVAILABLE" },
    { src: p21, caption: "NAME IS NOT AVAILABLE" },
    { src: p22, caption: "NAME IS NOT AVAILABLE" },
    { src: p23, caption: "NAME IS NOT AVAILABLE" },
    { src: p24, caption: "NAME IS NOT AVAILABLE" },
    { src: p25, caption: "NAME IS NOT AVAILABLE" },
    { src: p27, caption: "NAME IS NOT AVAILABLE" },
    { src: p28, caption: "NAME IS NOT AVAILABLE" },
    { src: p29, caption: "NAME IS NOT AVAILABLE" },
    { src: p30, caption: "NAME IS NOT AVAILABLE" },
    { src: p31, caption: "GRAMBANGLA" },
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
                className="w-full aspect-[3/4] object-cover cursor-zoom-in"
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
                  BUY 
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

export default Paintings;
