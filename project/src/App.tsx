import { useEffect, useState, useRef } from 'react';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import CompetenciasPanel from './components/CompetenciasPanel';
import FinexPanel from './components/FinexPanel';
import ProjetosCarousel from './components/ProjetosCarousel';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem('hasVisited') !== 'true';
  });
  const [fadeOut, setFadeOut] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [showCompetencias, setShowCompetencias] = useState(false);
  const [fadeHero, setFadeHero] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setFadeOut(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (fadeOut) {
      const fadeTimer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
        setTimeout(() => setHeroVisible(true), 50);
      }, 700);
      return () => clearTimeout(fadeTimer);
    }
  }, [fadeOut]);

  useEffect(() => {
    if (!loading) setHeroVisible(true);
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      const sobreMimSection = document.getElementById('sobre-mim');
      if (sobreMimSection) {
        const rect = sobreMimSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setFadeHero(true);
          setTimeout(() => setShowCompetencias(true), 400);
        } else {
          setShowCompetencias(false);
          setFadeHero(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    window.addEventListener('resize', handleScrollProgress);
    handleScrollProgress();
    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      window.removeEventListener('resize', handleScrollProgress);
    };
  }, []);

  if (loading) {
    return <Loader fadeOut={fadeOut} />;
  }

  return (
    <div>
      <Sidebar />
      
      <div className="transition-all duration-400">
        <div id="scroll-progress-bar" ref={progressBarRef} />
        
        <main>
          <section
            id="home"
            className={`relative w-full transition-opacity duration-700 z-20 ${heroVisible ? 'opacity-100' : 'opacity-0'} ${fadeHero ? 'opacity-0' : ''}`}
            style={{ minHeight: '100vh' }}
          >
            <HeroSection animateIn={heroVisible} />
          </section>

          <div
            className={`relative z-10 transition-opacity duration-500 ${showCompetencias ? 'opacity-100' : 'opacity-0'}`}
          >
            <section id="sobre-mim">
              <CompetenciasPanel />
            </section>
            <section id="finex">
              <FinexPanel />
            </section>
            <section id="projetos">
              <ProjetosCarousel />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;