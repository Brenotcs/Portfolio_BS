import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const handleNavigateToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen p-4 bg-gradient-to-b from-slate-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Efeitos de fundo 'Aurora' mais sutis e claros */}
      <div className="absolute top-0 left-0 -translate-x-1/3 w-[1000px] h-[1000px] bg-gradient-to-tr from-blue-700/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-violet-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-700" />

      {/* Container de conteúdo centralizado e minimalista */}
      <div className="z-10 flex flex-col items-center text-center">
        
        {/* Nome Principal */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-300 text-transparent bg-clip-text"
        >
          Breno Souza
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 text-lg md:text-xl text-blue-200/80 max-w-xl"
        >
          Desenvolvedor de Software e Soluções Digitais
        </motion.p>

        {/* Botão CTA */}
        <motion.a
          href="#contato"
          onClick={handleNavigateToContact}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="group mt-10 inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-medium
                     border border-blue-400/40 text-blue-200 
                     hover:bg-blue-400/10 hover:text-white hover:border-blue-400/70
                     transition-all duration-300"
        >
          Entrar em Contato
          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;