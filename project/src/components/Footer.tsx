import React from 'react';
import {FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/paulo-santana-907084224/', icon: FaLinkedinIn },
  { href: 'https://www.instagram.com/serjio1012_/', icon: FaInstagram },
];

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'contato', label: 'Contato' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Esta função calcula a posição exata de cada seção e rola a página suavemente.
  const handleNavigate = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const heroSectionHeight = window.innerHeight;
    const panelWidth = window.innerWidth;
    const parallaxStart = heroSectionHeight;

    let targetScrollY;

    switch (id) {
      case 'home':
        targetScrollY = 0;
        break;
      case 'servicos': 
        targetScrollY = parallaxStart;
        break;
      case 'tecnologias': 
        targetScrollY = parallaxStart + (panelWidth * 3);
        break;
      case 'equipe': 
        targetScrollY = parallaxStart + (panelWidth * 4);
        break;
      case 'contato':
        targetScrollY = document.documentElement.scrollHeight;
        break;
      default:
        return;
    }

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };


  return (
    <footer className="relative w-full h-[320px] text-white overflow-hidden">
      
      {/* Background com Ondas Animadas em SVG*/}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          className="absolute top-0 left-0 w-full h-full transform scale-[4] origin-bottom box-border pointer-events-none"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(41, 70, 127, 0.06)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(53, 127, 242, 0.6)' }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="10s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"/>
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"/>
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"/>
            </use>
          </g>
        </svg>
      </div>

      {/* Conteúdo do Rodapé */}
      <section className="h-full w-full max-w-7xl mx-auto flex flex-col justify-end items-center p-8 md:p-14 gap-5">
        
        <div>
          <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text">
            Breno Souza
          </span>
        </div>

        <ul className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-2xl hover:text-violet-400 transition-colors">
                <link.icon />
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => handleNavigate(link.id, e)} 
                className="hover:text-violet-400 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 mt-2">&copy; {currentYear} Breno Souza. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
};

export default Footer;