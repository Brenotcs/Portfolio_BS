import React from "react";
import minhaFoto from "../assets/images/foto_perfil.jpg";

const CompetenciasPanel: React.FC = () => {
  return (
    <section
      id="competencias"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden"
    >
      <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-6 py-16 gap-8">
        {/* Imagem do usuário */}
        <img
          src={minhaFoto}
          alt="Foto de Breno Souza"
          className="w-40 h-40 object-cover rounded-2xl shadow-2xl mb-6 md:mb-0 md:mr-8 transition-transform duration-300 hover:animate-shake"
        />
        {/* Texto da história */}
        <div className="text-white/90 text-lg text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Minha História</h2>
          <p>
            Olá! Meu nome é Breno Souza e sou apaixonado por tecnologia desde criança. Comecei minha jornada desenvolvendo pequenos projetos e hoje atuo como desenvolvedor web fullstack, criando soluções digitais modernas e eficientes. Gosto de desafios, de aprender coisas novas e de transformar ideias em realidade através do código.
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes shake {
            0% { transform: rotate(0deg); }
            20% { transform: rotate(-4deg); }
            40% { transform: rotate(4deg); }
            60% { transform: rotate(-2deg); }
            80% { transform: rotate(2deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-shake {
            animation: shake 0.5s;
          }
        `}
      </style>
    </section>
  );
};

export default CompetenciasPanel;