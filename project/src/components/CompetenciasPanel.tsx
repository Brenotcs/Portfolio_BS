import React from "react";
import minhaFoto from "../assets/images/foto_perfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CompetenciasPanel: React.FC = () => {
  return (
    <section
      id="competencias"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden bg-noise py-16"
    >
      {/* Logo BS no topo com a fonte Orbitron */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center w-full">
        <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
      </div>

      {/* Card Principal */}
      <div className="card flex flex-col md:flex-row items-center justify-center w-[90vw] md:w-auto max-w-[620px] bg-[#272524] bg-opacity-90 rounded-3xl shadow-2xl relative z-10">
        
        {/* Avatar */}
        <img
          src={minhaFoto}
          alt="Foto de Breno Souza"
          className="relative z-20"
        />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-white w-full p-8 pt-0 md:p-0 md:pl-8">
          <p className="text-[13px] font-normal mb-8 opacity-50 max-w-[360px] text-justify">
            Meu nome é Breno, sou desenvolvedor web fullstack e apaixonado por tecnologia. Minha jornada começou com pequenos projetos e hoje crio soluções digitais modernas e eficientes. Sou Tecnólogo em Análise e Desenvolvimento de Sistemas e, atualmente, dou continuidade à minha evolução acadêmica cursando Engenharia de Software. Essa combinação me permite unir a agilidade técnica da minha primeira formação com a visão estratégica e arquitetural da engenharia, buscando sempre aprender e entregar softwares de alto impacto.
          </p>
          
          <div className="socials flex gap-4 justify-center md:justify-start w-full">
            
            {/* GitHub com animação */}
            <a 
              href="https://github.com/Brenotcs" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o perfil do GitHub"
              className="relative grid place-items-center w-[52px] h-[52px] text-white group transition-transform duration-300 hover:scale-110"
            >
              <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-br from-gray-400 to-gray-700 opacity-80 transition-all duration-300 group-hover:opacity-100"></span>
              <FontAwesomeIcon icon={faGithub} className="relative z-10 text-[28px]" />
            </a>
            
            {/* LinkedIn com animação */}
            <a 
              href="https://www.linkedin.com/in/brenotcsouza/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o perfil do LinkedIn"
              className="relative grid place-items-center w-[52px] h-[52px] text-white group transition-transform duration-300 hover:scale-110"
            >
              <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 opacity-80 transition-all duration-300 group-hover:opacity-100"></span>
              <FontAwesomeIcon icon={faLinkedinIn} className="relative z-10 text-[26px]" />
            </a>

            {/* Instagram com animação */}
            <a 
              href="https://www.instagram.com/brenotcs/?hl=pt-br" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o perfil do Instagram"
              className="relative grid place-items-center w-[52px] h-[52px] text-white group transition-transform duration-300 hover:scale-110"
            >
              <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-80 transition-all duration-300 group-hover:opacity-100"></span>
              <FontAwesomeIcon icon={faInstagram} className="relative z-10 text-[28px]" />
            </a>

          </div>
        </div>
      </div>

      {/* Estilos para responsividade */}
      <style>{`
        /* Layout do Card em Desktop */
        @media (min-width: 768px) {
          .card {
            padding: 48px 40px 48px 0; /* Ajusta o padding para o layout com a imagem à esquerda */
          }
          .card img {
            width: 280px;
            height: 300px;
            object-fit: cover;
            border-radius: 24px;
            margin-left: -60px; /* Efeito da imagem "saindo" do card */
            border: 4px solid #272524;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.4);
          }
        }

        /* Layout do Card em Mobile */
        @media (max-width: 767px) {
          .card {
            padding: 0 32px 48px 32px;
            margin-top: 100px; /* Espaço para a foto acima */
          }
          .card img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            border-radius: 24px;
            margin-top: -125px; 
            margin-bottom: 24px;
            border: 4px solid #272524;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.4);
          }
        }

        @media (max-width: 440px) {
          .card img {
            width: 50vw;
            height: 50vw;
            max-width: 180px; 
            max-height: 180px; 
            border-radius: 50%; 
            border-width: 8px;
            margin-top: -25vw; 
          }
          .card {
            margin-top: 25vw;
          }
        }
      `}</style>
    </section>
  );
};

export default CompetenciasPanel;