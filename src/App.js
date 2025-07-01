import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/detail-pages.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import ScrollToTop from './components/ScrollToTop';

// Page components
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Community from './pages/Community';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Custom styles
import './styles/custom.css';

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
        {/* Scroll to top on route change */}
        <ScrollToTop />
        
        {/* Google Analytics */}
        <Analytics />
        
        <main className="main-06">
          {/* Header with Navigation */}
          <Header />
          
          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App; 