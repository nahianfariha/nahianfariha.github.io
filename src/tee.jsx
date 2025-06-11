import React, { useState } from 'react';

// Import T-shirt images
import tee1 from './images/tshirts/tee1.avif';
import tee2 from './images/tshirts/tee2.avif';
import tee3 from './images/tshirts/tee3.avif';
import tee4 from './images/tshirts/tee4.avif';
import tee5 from './images/tshirts/tee5.avif';
import tee6 from './images/tshirts/tee6.avif';

function Tee() {
  const images = [tee1, tee2, tee3, tee4, tee5, tee6];
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
        <div className="columns-1 sm:columns-1 md:columns-1 lg:columns-1 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Tee ${index + 1}`}
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

export default Tee;
