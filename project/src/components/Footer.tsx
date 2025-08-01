import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0D1732] text-white pt-20 pb-40 w-full">
      
      {/* Logo BS com a fonte Orbitron */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 flex justify-center w-full">
        <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
      </div>

      <div className="relative container mx-auto px-4 flex flex-col items-center text-center z-10">
        <div className="flex space-x-6">
          <a
            href="https://wa.me/5571982964856"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://github.com/Brenotcs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/brenotcsouza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Container para os textos na parte inferior */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center z-10 text-blue-300">
        <p className="text-xs">
          &copy; {currentYear} Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Desenvolvido por Breno Souza
        </p>
      </div>
      
      {/* As Ondas Animadas */}
      <div className="waves-container">
        <svg
          className="waves-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" />
            <use href="#gentle-wave" x="48" y="3" />
            <use href="#gentle-wave" x="48" y="5" />
            <use href="#gentle-wave" x="48" y="7" />
          </g>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;