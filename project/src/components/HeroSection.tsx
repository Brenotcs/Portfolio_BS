import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  animateIn?: boolean;
}

const nameRevealVariants = {
  hidden: { 
    opacity: 0, 
    width: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  visible: (customDelay = 0) => ({ 
    opacity: 1,
    width: 'auto',
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay }
  }),
};

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 flex flex-col justify-center items-center font-orbitron">
          
          {/* Linha "Breno" */}
          <span className="flex items-baseline">
            B
            <motion.span
              variants={nameRevealVariants}
              initial="hidden"
              animate={showRestOfName ? "visible" : "hidden"}
              className="inline-block overflow-hidden"
            >
              reno
            </motion.span>
          </span>

          {/* Linha "Souza" */}
          <span className="flex items-baseline">
            S
            <motion.span
              variants={nameRevealVariants}
              custom={0.2}
              initial="hidden"
              animate={showRestOfName ? "visible" : "hidden"}
              className="inline-block overflow-hidden"
            >
              ouza
            </motion.span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-xl">
          Desenvolvedor Web FullStack e Soluções Digitais
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={showRestOfName ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.8, duration: 1.0, ease: "easeOut" }}
        className="z-20 absolute bottom-6 left-0 right-0 flex justify-center"
        aria-label="Ir para próxima sessão"
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