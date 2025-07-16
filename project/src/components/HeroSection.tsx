import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  animateIn?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animateIn }) => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen p-4 bg-gray-800 text-white overflow-hidden"
    >
      {/* Efeitos de fundo 'Aurora' mais sutis e claros */}
      <div className="absolute top-0 left-0 -translate-x-1/3 w-[1000px] h-[1000px] bg-gradient-to-tr from-gray-400/40 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-gray-500/40 to-transparent rounded-full blur-3xl animate-pulse delay-700" />

      {/* Container de conteúdo centralizado e minimalista */}
      <div className="z-10 flex flex-col items-center text-center">
        {/* Nome Principal */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-300 text-transparent bg-clip-text"
        >
          Breno Souza
        </h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={animateIn ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-xl"
        >
          Desenvolvedor Web FullStack e Soluções Digitais
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;