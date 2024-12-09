import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Contact from './pages/Contact'; 
import FAQ from './pages/FAQ'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import Support from './pages/Support'; 
import video from './assets/videos/retro-background.mp4'; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
      
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div className="content relative z-10">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/games" element={<Games />} />
              <Route path="/game/:id" element={<GameDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} /> 
              <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
              <Route path="/support" element={<Support />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;












