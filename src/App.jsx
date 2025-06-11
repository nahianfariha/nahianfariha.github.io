import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Navbar from './Navbar';
import Illustrations from './illustrations';
import Paintings from './paintings';
import Animati from './2danimation';
import Banners from './banners';
import Totebags from './totebags';
import Tee from './tee';
import Ui from './uidesign';
import CustomOrderForm from './adobe';
import About from './about';
import Appr from './appr';


const App = () => {
  return (
    <Router>
      <Navbar />
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

    </Router>
  );
};

export default App;
