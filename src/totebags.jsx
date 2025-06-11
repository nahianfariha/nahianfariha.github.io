import React, { useState } from 'react';

// ✅ Import all totebag images
import to1 from './images/totebags/to1.avif';
import to2 from './images/totebags/to2.avif';
import t00 from './images/totebags/t00.avif';
import t0 from './images/totebags/t0.avif';
import t1 from './images/totebags/t1.avif';
import t2 from './images/totebags/t2.avif';
import t4 from './images/totebags/t4.avif';
import t5 from './images/totebags/t5.avif';
import t6 from './images/totebags/t6.avif';
import t7 from './images/totebags/t7.avif';
import t8 from './images/totebags/t8.avif';
import t10 from './images/totebags/t10.avif';
import t11 from './images/totebags/t11.avif';
import t12 from './images/totebags/t12.avif';
import t13 from './images/totebags/t13.avif';
import t14 from './images/totebags/t14.avif';
import t15 from './images/totebags/t15.avif';
import t17 from './images/totebags/t17.avif';
import t19 from './images/totebags/t19.avif';
import t20 from './images/totebags/t20.avif';
import t21 from './images/totebags/t21.avif';
import t22 from './images/totebags/t22.avif';
import t23 from './images/totebags/t23.avif';
import t24 from './images/totebags/t24.avif';

import to3 from './images/totebags/to3.avif';
import to5 from './images/totebags/to5.avif';
import to6 from './images/totebags/to6.avif';
import to7 from './images/totebags/to7.avif';
import to8 from './images/totebags/to8.avif';
import to9 from './images/totebags/to9.avif';
import to10 from './images/totebags/to10.avif';
import to11 from './images/totebags/to11.avif';
import to13 from './images/totebags/to13.avif';
import to14 from './images/totebags/to14.avif';
import to15 from './images/totebags/to15.avif';
import to16 from './images/totebags/to16.avif';
import to17 from './images/totebags/to17.avif';
import to18 from './images/totebags/to18.avif';
import to19 from './images/totebags/to19.avif';
import to20 from './images/totebags/to20.avif';
import to21 from './images/totebags/to21.avif';
import to22 from './images/totebags/to22.avif';
import to23 from './images/totebags/to23.avif';
import to24 from './images/totebags/to24.avif';
import to25 from './images/totebags/to25.avif';
import to26 from './images/totebags/to26.avif';

function Totebags() {
  const images = [
    to1, to2, t00, t0, t1, t2, t4, t5, t6, t7, t8,
    t10, t11, t12, t13, t14, t15, t17, t19, t20, t21, t22, t23, t24,
    to3, to5, to6, to7, to8, to9, to10, to11, to13, to14, to15, to16,
    to17, to18, to19, to20, to21, to22, to23, to24, to25, to26
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
        <div className="columns-2 sm:columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Totebag ${index + 1}`}
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
