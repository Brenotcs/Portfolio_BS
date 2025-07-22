import React from "react";
import minhaFoto from "../assets/images/foto_perfil.jpg";

// Para os ícones sociais, usaremos Font Awesome CDN (ou pode ser substituído por outro pacote de ícones se já houver)
// Certifique-se de que o Font Awesome está incluído no index.html ou use outro pacote de ícones React se preferir

const CompetenciasPanel: React.FC = () => {
  return (
    <section
      id="competencias"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden bg-noise"
    >
      {/* Logo BS no topo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center w-full pointer-events-none">
        <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
      </div>
      <div className="card flex flex-col md:flex-row items-center justify-center w-[75vw] max-w-[650px] p-8 md:p-12 bg-[#272524] bg-opacity-90 rounded-3xl shadow-2xl gap-8 mt-24 mb-12 relative z-10">
        {/* Avatar */}
        <img
          src={minhaFoto}
          alt="Foto de Breno Souza"
          className="max-w-[280px] w-[36vw] h-[300px] object-cover rounded-3xl md:rounded-3xl shadow-xl md:ml-[-60px] md:mr-8 transition-all duration-300 border-4 border-[#272524]"
        />
        {/* Conteúdo */}
        <div className="flex flex-col items-center md:items-start text-white w-full">
          <p className="text-[13px] font-normal mb-[30px] opacity-50 max-w-[360px] mt-2 text-center md:text-left">
            Olá! Meu nome é Breno Souza e sou apaixonado por tecnologia desde criança. Comecei minha jornada desenvolvendo pequenos projetos e hoje atuo como desenvolvedor web fullstack, criando soluções digitais modernas e eficientes.
          </p>
          {/* Socials */}
          <div className="socials flex gap-4 justify-center md:justify-start w-full mt-2">
            <button className="relative border-0 bg-transparent text-[#f8f8f8] p-0">
              <span className="absolute z-0 top-1/2 left-1/2 w-[52px] h-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300 to-yellow-200 opacity-80 transition-all duration-300"></span>
              <i className="fa-brands fa-dribbble relative z-10 border-2 border-[#272524] bg-[#3fb39] grid place-items-center text-[24px] w-[50px] h-[50px] rounded-full"></i>
            </button>
            <button className="relative border-0 bg-transparent text-[#f8f8f8] p-0">
              <span className="absolute z-0 top-1/2 left-1/2 w-[52px] h-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300 to-yellow-200 opacity-80 transition-all duration-300"></span>
              <i className="fa-brands fa-pinterest relative z-10 border-2 border-[#272524] bg-[#3fb39] grid place-items-center text-[24px] w-[50px] h-[50px] rounded-full"></i>
            </button>
            <button className="relative border-0 bg-transparent text-[#f8f8f8] p-0">
              <span className="absolute z-0 top-1/2 left-1/2 w-[52px] h-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300 to-yellow-200 opacity-80 transition-all duration-300"></span>
              <i className="fa-brands fa-codepen relative z-10 border-2 border-[#272524] bg-[#3fb39] grid place-items-center text-[24px] w-[50px] h-[50px] rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Responsividade extra para avatar circular em telas pequenas */}
      <style>{`
        @media (max-width: 600px) {
          .card {
            margin: 0 40px;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom: 60px;
            width: 100%;
            text-align: center;
            flex-direction: column;
          }
          .card h2 {
            margin-right: 0;
            font-size: 26px;
          }
          .card img {
            margin: -100px 0 30px 0;
            width: 100%;
            max-width: 1000px;
            height: 250px;
            border-radius: 24px;
          }
          .card p {
            max-width: 360px;
          }
          .socials {
            justify-content: center;
          }
        }
        @media (max-width: 440px) {
          .card img {
            height: 50vw;
            width: 50vw;
            border-radius: 50%;
            border: 12px solid #272524;
            margin: -140px 0 30px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CompetenciasPanel;