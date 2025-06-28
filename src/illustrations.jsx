import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import all illustration images
import ill0 from './images/illustrations/ill0.webp';
import ill01 from './images/illustrations/ill01.webp';
import ill02 from './images/illustrations/ill02.webp';
import ill2 from './images/illustrations/ill2.webp';
import ill3 from './images/illustrations/ill3.webp';
import ill4 from './images/illustrations/ill4.webp';
import ill05 from './images/illustrations/ill05.webp';
import ill5 from './images/illustrations/ill5.webp';
import ill06 from './images/illustrations/ill06.webp';
import ill6 from './images/illustrations/ill6.webp';
import ill7 from './images/illustrations/ill7.webp';
import ill8 from './images/illustrations/ill8.webp';
import ill9 from './images/illustrations/ill9.webp';
import ill10 from './images/illustrations/ill10.webp';
import ill11 from './images/illustrations/ill11.webp';
import ill12 from './images/illustrations/ill12.webp';
import ill13 from './images/illustrations/ill13.webp';
import ill14 from './images/illustrations/ill14.webp';
import ill16 from './images/illustrations/ill16.webp';
import ill17 from './images/illustrations/ill17.webp';
import ill18 from './images/illustrations/ill18.webp';
import ill20 from './images/illustrations/ill20.webp';
import ill1 from './images/illustrations/ill1.webp';
import ill21 from './images/illustrations/ill21.webp';
import ill25 from './images/illustrations/ill25.webp';
import ill26 from './images/illustrations/ill26.webp';
import ill29 from './images/illustrations/ill29.webp';
import ill34 from './images/illustrations/ill34.webp';
import ill35 from './images/illustrations/ill35.webp';
import ill36 from './images/illustrations/ill36.webp';
import ill43 from './images/illustrations/ill43.webp';
import ill44 from './images/illustrations/ill44.webp';
import ill45 from './images/illustrations/ill45.webp';
import ill46 from './images/illustrations/ill46.webp';
import ill47 from './images/illustrations/ill47.webp';
import ill49 from './images/illustrations/ill49.webp';
import ill50 from './images/illustrations/ill50.webp';
import ill52 from './images/illustrations/ill52.webp';
import ill19 from './images/illustrations/ill19.webp';
import ill54 from './images/illustrations/ill54.webp';
import ill55 from './images/illustrations/ill55.webp';
import ill56 from './images/illustrations/ill56.webp';

function Illustrations() {
const images = [
  { src: ill0, caption: "A MOMENT NEVER GOES AWAY" },
  { src: ill01, caption: "WHISPERS IN THE WIND" },
  { src: ill02, caption: "MEOW NEEDS NO LOCKDOWN" },
  { src: ill2, caption: "Echoes of Silence" },
  { src: ill3, caption: "Mystic Forest Trail" },
  { src: ill4, caption: "Cosmic Butterfly" },
  { src: ill05, caption: "Urban Rhythm" },
  { src: ill5, caption: "Waves of Imagination" },
  { src: ill06, caption: "Neon Rain" },
  { src: ill6, caption: "Desert Bloom" },
  { src: ill7, caption: "Midnight Sonata" },
  { src: ill8, caption: "Floral Burst" },
  { src: ill9, caption: "Fragmented Time" },
  { src: ill10, caption: "Stellar Voyage" },
  { src: ill11, caption: "🎵IF I SAW YOU IN HEAVEN" },
  { src: ill12, caption: "COLORFUL COMPANY" },
  { src: ill13, caption: "SAUDADE" },
  { src: ill14, caption: "Ethereal Wings" },
  { src: ill16, caption: "Storm Within" },
  { src: ill17, caption: "Frozen Lake" },
  { src: ill18, caption: "Color Cascade" },
  { src: ill20, caption: "Lone Wanderer" },
  { src: ill1, caption: "Golden Haze" },
  { src: ill21, caption: "Blooming Thoughts" },
  { src: ill25, caption: "Silent Scream" },
  { src: ill26, caption: "Moonlight Mirage" },
  { src: ill29, caption: "Woven Realities" },
  { src: ill34, caption: "Electric Jungle" },
  { src: ill35, caption: "IMPERISHABLE SOUL" },
  { src: ill36, caption: "THE STRANGER WITH HIS KITTY" },
  { src: ill43, caption: "Through the Mist" },
  { src: ill44, caption: "Fragmented Universe" },
  { src: ill45, caption: "Pastel Horizon" },
  { src: ill46, caption: "Crescent Rise" },
  { src: ill47, caption: "River of Stars" },
  { src: ill49, caption: "Mirrored Sky" },
  { src: ill50, caption: "Neon Beast" },
  { src: ill52, caption: "Clockwork Nature" },
  { src: ill19, caption: "Gentle Storm" },
  { src: ill54, caption: "Spectrum Flight" },
  { src: ill55, caption: "Shattered Mirror" },
  { src: ill56, caption: "Mechanical Heart" },
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
        <div className="columns-2 md:columns-3 lg:columns-3 gap-7 space-y-4">
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
                  BUY PRINT
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

export default Illustrations;