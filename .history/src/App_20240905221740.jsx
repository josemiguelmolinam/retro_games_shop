import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import Services from './pages/Services';
import FAQs from './pages/FAQ';
import Contact from './pages/Contact';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => 
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
      <Navbar />
        <main className='flex-grow'>
          <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/car/:id' element={<CarDetail />} />
            <Route path='/services' element={<Services />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/support' element={<Support />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;







