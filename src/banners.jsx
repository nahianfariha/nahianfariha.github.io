import React, { useState } from 'react';

import ban00 from './images/banners/ban00.avif';
import ban0 from './images/banners/ban0.avif';
import ban1 from './images/banners/ban1.avif';
import ban2 from './images/banners/ban2.avif';
import ban3 from './images/banners/ban3.avif';
import ban5 from './images/banners/ban5.avif';
import ban6 from './images/banners/ban6.avif';
import ban8 from './images/banners/ban8.avif';
import ban9 from './images/banners/ban9.avif';
import ban10 from './images/banners/ban10.avif';
import ban11 from './images/banners/ban11.avif';

function Banners() {
  const images = [
   
    ban00, ban0, ban1, ban2, ban3, ban5, ban6, ban8, ban9, ban10, ban11
   
  ];
   const [selectedImage, setSelectedImage] = useState(null);

   const handleClick = (src) => {
    console.log("Clicked image:", src); // ← Log to verify click
    setSelectedImage(src);
    };


   const closeModal = () => {
    setSelectedImage(null);
    };

  
  return (
  <div className="p-4 md:ml-[20rem] mt-3">
    <div className="p-4">
      <div className="columns-2 sm:columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            onClick={() => handleClick(src)}
            className="w-full h-auto mb-4 rounded-lg shadow-sm break-inside-avoid transition-transform duration-300 transform hover:scale-105 cursor-zoom-in"
          />
          
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

export default Banners;



