import React, { useState } from 'react';

// ✅ Import UI images (including the .gif)
import ui1 from './images/uidesign/ui1.webp';
import ui2 from './images/uidesign/ui2.webp';
import ui4 from './images/uidesign/ui4.gif';
import ui5 from './images/uidesign/ui5.webp';
import ui6 from './images/uidesign/ui6.webp';

function Ui() {
  const images = [ui1, ui2, ui4, ui5, ui6];
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
        <div className="columns-1 sm:columns-1 md:columns-1 lg:columns-1 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`UI Design ${index + 1}`}
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
              alt="Zoomed UI Design"
              className="max-w-full max-h-full rounded-lg shadow-xl cursor-zoom-out"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Ui;
