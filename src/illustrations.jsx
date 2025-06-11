import React, { useState } from 'react';

// Import all illustration images
import ill0 from './images/illustrations/ill0.avif';
import ill01 from './images/illustrations/ill01.avif';
import ill02 from './images/illustrations/ill02.avif';
import ill2 from './images/illustrations/ill2.avif';
import ill3 from './images/illustrations/ill3.avif';
import ill4 from './images/illustrations/ill4.avif';
import ill05 from './images/illustrations/ill05.avif';
import ill5 from './images/illustrations/ill5.avif';
import ill06 from './images/illustrations/ill06.avif';
import ill6 from './images/illustrations/ill6.avif';
import ill7 from './images/illustrations/ill7.avif';
import ill8 from './images/illustrations/ill8.avif';
import ill9 from './images/illustrations/ill9.avif';
import ill10 from './images/illustrations/ill10.avif';
import ill11 from './images/illustrations/ill11.avif';
import ill12 from './images/illustrations/ill12.avif';
import ill13 from './images/illustrations/ill13.avif';
import ill14 from './images/illustrations/ill14.avif';
import ill16 from './images/illustrations/ill16.avif';
import ill17 from './images/illustrations/ill17.avif';
import ill18 from './images/illustrations/ill18.avif';
import ill20 from './images/illustrations/ill20.avif';
import ill1 from './images/illustrations/ill1.avif';
import ill21 from './images/illustrations/ill21.avif';
import ill25 from './images/illustrations/ill25.avif';
import ill26 from './images/illustrations/ill26.avif';
import ill29 from './images/illustrations/ill29.avif';
import ill34 from './images/illustrations/ill34.avif';
import ill35 from './images/illustrations/ill35.avif';
import ill36 from './images/illustrations/ill36.avif';
import ill43 from './images/illustrations/ill43.avif';
import ill44 from './images/illustrations/ill44.avif';
import ill45 from './images/illustrations/ill45.avif';
import ill46 from './images/illustrations/ill46.avif';
import ill47 from './images/illustrations/ill47.avif';
import ill49 from './images/illustrations/ill49.avif';
import ill50 from './images/illustrations/ill50.avif';
import ill52 from './images/illustrations/ill52.avif';
import ill19 from './images/illustrations/ill19.avif';
import ill54 from './images/illustrations/ill54.avif';
import ill55 from './images/illustrations/ill55.avif';
import ill56 from './images/illustrations/ill56.avif';

function Illustrations() {
  const images = [
    ill0, ill01, ill02, ill2, ill3, ill4, ill05, ill5,
    ill06, ill6, ill7, ill8, ill9, ill10, ill11, ill12,
    ill13, ill14, ill16, ill17, ill18, ill20, ill1, ill21,
    ill25, ill26, ill29, ill34, ill35, ill36, ill43, ill44,
    ill45, ill46, ill47, ill49, ill50, ill52, ill19, ill54,
    ill55, ill56,
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
              className="w-full h-auto mb-4 rounded-lg shadow-sm break-inside-avoid transition-transform duration-300 transform hover:scale-105 cursor-zoom-in"
              alt={`Illustration ${index + 1}`}
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

export default Illustrations;
