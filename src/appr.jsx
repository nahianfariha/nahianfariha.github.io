import React, { useState } from "react";

import app0 from './images/appreciations/appr0.avif'
import app1 from './images/appreciations/appr1.avif'
import app2 from './images/appreciations/appr2.avif'
import app3 from './images/appreciations/appr3.avif'
import app4 from './images/appreciations/appr4.avif'
import app5 from './images/appreciations/appr5.avif'
import app6 from './images/appreciations/appr6.avif'
import app7 from './images/appreciations/appr7.avif'
import app8 from './images/appreciations/appr8.avif'
import app9 from './images/appreciations/appr9.avif'
import app10 from './images/appreciations/appr10.avif'
import app11 from './images/appreciations/appr11.avif'
import app12 from './images/appreciations/appr12.avif'
import app13 from './images/appreciations/appr13.avif'
import app14 from './images/appreciations/appr14.avif'
import app15 from './images/appreciations/appr15.avif'
import app16 from './images/appreciations/appr16.avif'

const Appr = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these paths with actual image paths in your project
  const images = [
    app0, app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12, app13, app14, app15, app16
    ,
  ];

  return (
    <div className="p-4 md:ml-[20rem] mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-lato font-bold text-gray-800 mb-12">
          Click to zoom in and read what people are saying about Dot Pictures Studio 💖
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Appreciation ${idx}`}
              className="rounded-lg shadow-lg w-full cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Appr;
