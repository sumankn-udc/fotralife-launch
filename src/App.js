import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

function App() {
  useEffect(() => {
    // Initialize WOW.js animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="App">
      {/* Google Analytics */}
      <Analytics />
      
      <main className="main-06">
        {/* Header */}
        <Header />
        
        {/* Main wrapper */}
        <div className="main-wrapper demo-06">
          {/* Hero Area */}
          <Hero />
          
          {/* Team Area */}
          <Team />
        </div>
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App; 