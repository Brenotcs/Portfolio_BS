import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ServicesPanel from './components/ServicesPanel';
import TechnologiesPanel from './components/TechnologiesPanel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const containerRef = useScrollAnimation();

  return (
    <div className="relative">
      <Sidebar />
      
      <section id="home">
        <HeroSection />
      </section>
      
      {/* O container parallax recebe o ID para ser observado pela sidebar */}
      <div id="parallax-zone" style={{ overflowX: 'hidden' }}>
        <div 
          ref={containerRef}
          className="flex flex-nowrap"
          style={{ width: '500%', height: '100vh' }}
        >
          <div className="panel flex-shrink-0" style={{ width: '20%', height: '100%' }}>
            <ServicesPanel panelNumber={1} />
          </div>
          <div className="panel flex-shrink-0" style={{ width: '20%', height: '100%' }}>
            <ServicesPanel panelNumber={2} />
          </div>
          <div className="panel flex-shrink-0" style={{ width: '20%', height: '100%' }}>
            <ServicesPanel panelNumber={3} />
          </div>
          <div className="panel flex-shrink-0" style={{ width: '20%', height: '100%' }}>
            <TechnologiesPanel />
          </div>
        </div>
      </div> 
      
      <section id="contato">
        <ContactSection />
      </section>
      
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;