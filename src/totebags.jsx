import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ✅ Import all totebag images
import to1 from './images/totebags/to1.webp';
import to2 from './images/totebags/to2.webp';
import t00 from './images/totebags/t00.webp';
import t0 from './images/totebags/t0.webp';
import t1 from './images/totebags/t1.webp';
import t2 from './images/totebags/t2.webp';
import t4 from './images/totebags/t4.webp';
import t5 from './images/totebags/t5.webp';
import t6 from './images/totebags/t6.webp';
import t7 from './images/totebags/t7.webp';
import t8 from './images/totebags/t8.webp';
import t10 from './images/totebags/t10.webp';
import t11 from './images/totebags/t11.webp';
import t12 from './images/totebags/t12.webp';
import t13 from './images/totebags/t13.webp';
import t14 from './images/totebags/t14.webp';
import t15 from './images/totebags/t15.webp';
import t17 from './images/totebags/t17.webp';
import t19 from './images/totebags/t19.webp';
import t20 from './images/totebags/t20.webp';
import t21 from './images/totebags/t21.webp';
import t22 from './images/totebags/t22.webp';
import t23 from './images/totebags/t23.webp';
import t24 from './images/totebags/t24.webp';

import to3 from './images/totebags/to3.webp';
import to5 from './images/totebags/to5.webp';
import to6 from './images/totebags/to6.webp';
import to7 from './images/totebags/to7.webp';
import to8 from './images/totebags/to8.webp';
import to9 from './images/totebags/to9.webp';
import to10 from './images/totebags/to10.webp';
import to11 from './images/totebags/to11.webp';
import to13 from './images/totebags/to13.webp';
import to14 from './images/totebags/to14.webp';
import to15 from './images/totebags/to15.webp';
import to16 from './images/totebags/to16.webp';
import to17 from './images/totebags/to17.webp';
import to18 from './images/totebags/to18.webp';
import to19 from './images/totebags/to19.webp';
import to20 from './images/totebags/to20.webp';
import to21 from './images/totebags/to21.webp';
import to22 from './images/totebags/to22.webp';
import to23 from './images/totebags/to23.webp';
import to24 from './images/totebags/to24.webp';
import to25 from './images/totebags/to25.webp';
import to26 from './images/totebags/to26.webp';

function Totebags() {
  const images = [
    { src: to1, name: 'Pastel Bloom' },
    { src: to2, name: 'PAINTED ON PINK' },
    { src: t00, name: 'BEAUTIFUL DAY' },
    { src: t0, name: 'GARDENING' },
    { src: t1, name: 'FLORAL PAINTED' },
    { src: t2, name: 'MINI BAGS' },
    { src: t4, name: 'FLORAL PAINTED' },
    { src: t5, name: 'FLORAL PAINTED' },
    { src: t6, name: 'PAINTED ON PINK' },
    { src: t7, name: 'GOLF CLUB PAINTED' },
    { src: t8, name: 'DISC GOLF PAINTED' },
    { src: t10, name: 'GOLF WITH PETS PAINTED' },
    { src: t11, name: 'SUNSET WITH MOMMY PAINTED' },
    { src: t12, name: 'JOHN LENNON' },
    { src: t13, name: 'THE BOATMAN' },
    { src: t14, name: 'COMFORTABLY NUMB' },
    { src: t15, name: 'PAINTED CAR ON TOTE' },
    { src: t17, name: 'PAINTED CAR ON TOTE' },
    { src: t19, name: 'FLORAL PAINTED' },
    { src: t20, name: 'BAUL PAINTED' },
    { src: t21, name: 'PORONTO BIKEL' },
    { src: t22, name: 'SHUNDORI KOMOLA' },
    { src: t23, name: 'CAR PAINTED' },
    { src: t24, name: 'TOTE BAGS COMBO' },
    { src: to3, name: 'GIRL & WHITE SAREE' },
    { src: to5, name: 'FOLK FLOWERS' },
    { src: to6, name: 'DISC GOLF' },
    { src: to7, name: 'GOLF CLUB' },
    { src: to8, name: 'THE BOATMAN' },
    { src: to9, name: 'CHOL RASTAY' },
    { src: to10, name: 'CNG DHAKA' },
    { src: to11, name: 'HEY BARBIE' },
    { src: to13, name: 'THE GOLFMAN' },
    { src: to14, name: 'BAUL TOTEBAG' },
    { src: to15, name: 'BONJOUR' },
    { src: to16, name: 'STARWARS' },
    { src: to17, name: 'NUPUR' },
    { src: to18, name: 'MINI BAGS' },
    { src: to19, name: 'SIMPLE SEA' },
    { src: to20, name: 'PRINTED TOTEBAG' },
    { src: to21, name: 'FORGET ME NOT' },
    { src: to22, name: 'FOR BOOK LOVERS' },
    { src: to23, name: 'KAKER THENG' },
    { src: to24, name: 'PINK TULIPS' },
    { src: to25, name: 'MARIGOLD' },
    { src: to26, name: 'TWINS' }
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

        {/* 🌟 FEATURED FIRST IMAGE */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-black bg-green-200 font-lato font-extrabold md:text-3xl mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            TAKING ORDERS FOR CUSTOMIZED PAINTED TOTE BAGS.
          </motion.h1>
          <motion.img
            src={images[0].src}
            alt={images[0].name}
            onClick={() => handleClick(images[0].src)}
            className="w-full mx-auto shadow-lg object-cover cursor-zoom-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* 👜 GRID OF OTHER TOTE BAGS */}
        <div className="columns-2 md:columns-3 lg:columns-3 gap-7 space-y-4">
          {images.slice(1).map((img, index) => (
            <motion.div
              key={index}
              className="relative rounded-sm shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.img
                src={img.src}
                onClick={() => handleClick(img.src)}
                className="w-full aspect-[3/4] object-cover cursor-zoom-in"
                alt={img.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
              <div className="flex flex-col items-center justify-center mt-4 gap-2 mb-4">
                <p className="font-lato font-bold text-center">{img.name}</p>
                <p className="font-lato font-bold text-center">PRICE : NOT AVAILABLE</p>
                <button
                  onClick={() => window.location.href = `/buy?title=${encodeURIComponent(img.name)}`}
                  className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700"
                >
                  BUY
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔍 MODAL PREVIEW */}
        {selectedImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          >
            <img
              src={selectedImage}
              alt="Zoomed Totebag"
              className="max-w-full max-h-full rounded-lg shadow-xl cursor-zoom-out"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Totebags;
