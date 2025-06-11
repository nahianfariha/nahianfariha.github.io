import React, { useState } from 'react';
import ani1 from './images/animations/ani1.gif'
import ani2 from './images/animations/ani2.gif'

function Animati() {
  const images = [
     
     ani1, ani2
 
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

export default Animati;
