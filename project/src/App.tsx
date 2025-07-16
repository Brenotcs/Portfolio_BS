import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem('hasVisited') !== 'true';
  });
  const [fadeOut, setFadeOut] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

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

  if (loading) {
    return <Loader fadeOut={fadeOut} />;
  }

  return (
    <HeroSection animateIn={heroVisible} />
  );
}

export default App;