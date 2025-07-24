// src/components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 w-full z-30 relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Ícones de redes sociais */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/seu-usuario-aqui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/seu-usuario-aqui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://wa.me/5571999999999" // Coloque seu número com código do país
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Créditos e Copyright */}
        <p className="text-sm text-gray-400">
          Desenvolvido com ❤️ por [Seu Nome]
        </p>
        <p className="text-xs text-gray-500 mt-2">
          &copy; {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;