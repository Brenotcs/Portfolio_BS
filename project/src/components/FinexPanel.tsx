import React from "react";
import minhaFoto from "../assets/images/finex.jpg";
import finexLogo from "../assets/images/FINEXLOGO.COR.B-8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const FinexPanel: React.FC = () => {
  return (
    <section
      id="competencias"
      className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden blue-noise-bg py-16 px-4"
    >
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center w-full">
        <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
      </div>

      <div className="flex flex-col w-full max-w-[620px] bg-[#182a5b] bg-opacity-90 rounded-3xl shadow-2xl relative z-10 overflow-hidden">
        
        <img
          src={minhaFoto}
          alt="Imagem da Finex Solutions"
          className="w-full h-auto max-h-[300px] object-cover"
        />

        <div className="flex flex-col items-center text-white w-full p-8">
          <p className="text-[13px] font-normal mb-8 opacity-60 max-w-[460px] text-center">
          Além de tudo, estou junto com a Finex Solutions como CIO e Project Manager, onde atuo na gestão de projetos e na implementação de soluções tecnológicas inovadoras. Minha experiência juntamente à Finex também envolve o desenvolvimento de softwares personalizados, tecnologias modernas e soluções escaláveis, tudo isso com o objetivo de transformar suas ideias em soluções digitais eficientes.
          </p>
          
          <div className="flex gap-4 justify-center items-center w-full">
            
            <img 
              src={finexLogo} 
              alt="Logo da Finex Solutions" 
              className="h-12 w-auto"
            />

            <a 
              href="https://finexsolutions.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link para o site da Finex Solutions"
              className="relative grid place-items-center w-[52px] h-[52px] text-white group transition-transform duration-300 hover:scale-110"
            >
              <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 opacity-80 transition-all duration-300 group-hover:opacity-100"></span>
              <FontAwesomeIcon icon={faLink} className="relative z-10 text-[26px]" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinexPanel;