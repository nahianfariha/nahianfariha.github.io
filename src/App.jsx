import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



import Home from './home';

// Lazy-loaded components

//const About = lazy(() => import('./about'));



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
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
