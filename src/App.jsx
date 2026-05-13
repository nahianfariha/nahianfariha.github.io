import React, { Suspense, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import Navbar from "./Navbar";

// Images (ADD THESE)
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

// Optional fallback UI
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-bold text-gray-600">Loading...</p>
  </div>
);

const App = () => {
  // ======================
  // SLIDESHOW STATE
  // ======================
  const [slideIndex, setSlideIndex] = useState(0);

  const eduImages = [img1, img2];

  // ======================
  // AUTO SLIDE EFFECT
  // ======================
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % eduImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home slideIndex={slideIndex} eduImages={eduImages} />} />
          <Route path="/home" element={<Home slideIndex={slideIndex} eduImages={eduImages} />} />
          <Route path="*" element={<Home slideIndex={slideIndex} eduImages={eduImages} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;