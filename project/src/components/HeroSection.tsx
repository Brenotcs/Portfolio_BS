import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  animateIn?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animateIn }) => {
  const [showRestOfName, setShowRestOfName] = useState(false);

  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => {
        setShowRestOfName(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [animateIn]);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen p-4 bg-gray-800 text-white overflow-hidden"
    >
      {/* Efeitos de fundo 'Aurora' */}
      <div className="absolute top-0 left-0 -translate-x-1/3 w-[1000px] h-[1000px] bg-gradient-to-tr from-gray-400/40 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-gray-500/40 to-transparent rounded-full blur-3xl animate-pulse delay-700" />

      {/* Container de conteúdo */}
      <div className="z-10 flex flex-col items-center text-center">
        {/* Nome Principal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 flex flex-wrap justify-center items-end">
          <span className="font-orbitron">B</span>
          <AnimatePresence>
            {showRestOfName && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                // Duração aumentada para uma animação mais lenta
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="inline-block"
              >
                reno
              </motion.span>
            )}
          </AnimatePresence>
          <span className="w-4 md:w-6"></span>
          <span className="font-orbitron">S</span>
          <AnimatePresence>
            {showRestOfName && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                // Duração aumentada e delay mantido
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                className="inline-block"
              >
                ouza
              </motion.span>
            )}
          </AnimatePresence>
        </h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={showRestOfName ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          // Atraso e duração ajustados para uma sequência mais lenta
          transition={{ delay: 1.2, duration: 1.0, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-xl"
        >
          Desenvolvedor Web FullStack e Soluções Digitais
        </motion.p>
      </div>

      {/* Ícone de seta para baixo */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={showRestOfName ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        // Atraso e duração ajustados
        transition={{ delay: 1.8, duration: 1.0, ease: "easeOut" }}
        className="z-20 mb-8 flex flex-col items-center"
        aria-label="Ir para próxima sessão"
        style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => {
          const section = document.getElementById('competencias');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" strokeWidth={2.2} />
      </motion.button>
    </section>
  );
};

export default HeroSection;