import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './home';

// Lazy-loaded components
const Illustrations = lazy(() => import('./illustrations'));
const Paintings = lazy(() => import('./paintings'));
const Animati = lazy(() => import('./2danimation'));
const Banners = lazy(() => import('./banners'));
const Totebags = lazy(() => import('./totebags'));
const Tee = lazy(() => import('./tee'));
const Ui = lazy(() => import('./uidesign'));
const CustomOrderForm = lazy(() => import('./adobe'));
const About = lazy(() => import('./about'));
const Appr = lazy(() => import('./appr'));

// Optional fallback UI during lazy loading
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-bold text-gray-600">Loading...</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/2danimation" element={<Animati />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/totebags" element={<Totebags />} />
          <Route path="/tee" element={<Tee />} />
          <Route path="/uidesign" element={<Ui />} />
          <Route path="/adobe" element={<CustomOrderForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/appr" element={<Appr />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
