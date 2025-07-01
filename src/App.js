import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

// Page components
import Home from './pages/Home';
import Events from './pages/Events';
import Community from './pages/Community';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Initialize WOW.js animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Google Analytics */}
        <Analytics />
        
        <main className="main-06">
          {/* Header with Navigation */}
          <Header />
          
          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/community" element={<Community />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App; 