import React, { useState } from 'react';

// Import painting images
import p00 from './images/paintings/p00.avif';
import p0 from './images/paintings/p0.avif';
import p1 from './images/paintings/p1.avif';
import p2 from './images/paintings/p2.avif';
import p3 from './images/paintings/p3.avif';
import p4 from './images/paintings/p4.avif';
import p5 from './images/paintings/p5.avif';
import p6 from './images/paintings/p6.avif';
import p7 from './images/paintings/p7.avif';
import p8 from './images/paintings/p8.avif';
import p9 from './images/paintings/p9.avif';
import p10 from './images/paintings/p10.avif';
import p11 from './images/paintings/p11.avif';
import p13 from './images/paintings/p13.avif';
import p15 from './images/paintings/p15.avif';
import p16 from './images/paintings/p16.avif';
import p17 from './images/paintings/p17.avif';
import p18 from './images/paintings/p18.avif';
import p19 from './images/paintings/p19.avif';
import p20 from './images/paintings/p20.avif';
import p21 from './images/paintings/p21.avif';
import p22 from './images/paintings/p22.avif';
import p23 from './images/paintings/p23.avif';
import p24 from './images/paintings/p24.avif';
import p25 from './images/paintings/p25.avif';
import p27 from './images/paintings/p27.avif';
import p28 from './images/paintings/p28.avif';
import p29 from './images/paintings/p29.avif';
import p30 from './images/paintings/p30.avif';
import p31 from './images/paintings/p31.avif';

function Paintings() {
  const images = [
    p00, p0, p1, p2, p3, p4, p5, p6, p7, p8,
    p9, p10, p11, p13, p15, p16, p17, p18, p19, p20,
    p21, p22, p23, p24, p25, p27, p28, p29, p30, p31
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4 sm:ml-[25%] mt-3">
      <div className="p-4">
        <div className="columns-2 sm:columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => handleClick(src)}
              alt={`Painting ${index + 1}`}
              className="w-full h-auto mb-4 rounded-lg shadow-sm break-inside-avoid transition-transform duration-300 transform hover:scale-105 cursor-zoom-in"
            />
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
