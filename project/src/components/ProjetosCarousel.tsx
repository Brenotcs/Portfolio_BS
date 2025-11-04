import React, { useState, useRef } from 'react';

import africa360Img from '../assets/images/projetos/Africa360.png';
import finexDevImg from '../assets/images/projetos/FinexDev.png';
import finexSiteImg from '../assets/images/projetos/Finexsite.png';
import jcStudiosImg from '../assets/images/projetos/JCstudios.png';
import ifaImg from '../assets/images/projetos/ifa.png';

const meusProjetos = [
  {
    titulo: 'Landing Page do Projeto IFÁ na Bahia',
    descricao: 'Landing Page desenvolvida para o Projeto IFÁ na Bahia, que promove a cultura africana e suas conexões com a Bahia. Tecnologia utilizada: Node.js, React.js, Tailwind CSS e etc.',
    imagem: ifaImg,
    corFundo: '#0f4b39ff',
    corCard: '#0c4227ff'   
  },
  {
    titulo: 'Site do Projeto Africa360',
    descricao: 'Website para o projeto Africa360, que visa promover a cultura africana através de uma plataforma digital. Tecnologia utilizada: React.js, Tailwind CSS e etc.',
    imagem: africa360Img,
    corFundo: '#6d5537',
    corCard: '#4a3b26'
  },
  {
    titulo: 'Landing Page da Finex Solutions',
    descricao: 'Com colaboração da equipe da Finex Solutions, desenvolvemos uma landing page moderna e responsiva. Tecnologia utilizada: Node.js, React.js, Tailwind CSS e etc.',
    imagem: finexSiteImg,
    corFundo: '#0a2761', 
    corCard: '#061a40'   
  },
  {
    titulo: 'Plataforma FinexDev',
    descricao: 'Site com finalidade de demonstrar as habilidades da nossa equipe de desenvolvimento, com foco em projetos de software e soluções tecnológicas. Tecnologia utilizada: React.js, Tailwind CSS e etc.',
    imagem: finexDevImg,
    corFundo: '#2e0d55',
    corCard: '#1e0838'
  },
  {
    titulo: 'Landing Page JC Studios',
    descricao: 'Website para a JC Studios, uma empresa de web design. O site é responsivo e otimizado para dispositivos móveis assim como os outros. Tecnologia utilizada: React.js, Tailwind CSS e etc.',
    imagem: jcStudiosImg,
    corFundo: '#2a2a2e', 
    corCard: '#1c1c1e'   
  }
];

const ProjetosCarousel: React.FC = () => {
  const [projetoAtual, setProjetoAtual] = useState(0);
  const prevButtonMobileRef = useRef<HTMLButtonElement>(null);
  const nextButtonMobileRef = useRef<HTMLButtonElement>(null);

  const proximoProjeto = () => {
    setProjetoAtual((prev) => (prev + 1) % meusProjetos.length);
  };

  const projetoAnterior = () => {
    setProjetoAtual((prev) => (prev - 1 + meusProjetos.length) % meusProjetos.length);
  };
  
  const playMobileAnimation = (buttonRef: React.RefObject<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      button.classList.remove('clicked');
      void button.offsetWidth;
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 450);
    }
  };

  const projeto = meusProjetos?.[projetoAtual];

  const corDeFundoAtual = projeto ? projeto.corFundo : '#2a2a2e';
  const corDoCardAtual = projeto ? projeto.corCard : '#1c1c1e';

  if (!projeto) {
    return (
      <div className="container-geral" style={{ backgroundColor: '#2a2a2e' }}>
        <p>Carregando projetos...</p>
      </div>
    );
  }

  const { titulo, descricao, imagem } = projeto;

  return (
    <>
      <style>{`
        .container-geral {
          background-color: #2a2a2e; /* Cor padrão */
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          overflow: hidden;
          transition: background-color 0.5s ease-in-out; 
        }
        .bg-noise::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><filter id="n" x="0" y="0"><feTurbulence type="fractalNoise" baseFrequency="0.75" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.1"/></svg>');
        }
        
        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 650px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .carousel-card {
          background-color: #1c1c1e; /* Cor padrão */
          width: 100%;
          text-align: center;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
          transition: background-color 0.5s ease-in-out;
        }
        .carousel-conteudo { padding: 30px; }
        .carousel-imagem {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .carousel-titulo { font-size: 2.2rem; color: #e6f1ff; margin-bottom: 10px; }
        .carousel-descricao { 
          font-size: 1rem; 
          line-height: 1.5; 
          color: #a8b2d1; 
          min-height: 90px; 
          text-align: justify;
        }
        
        .nav-botao {
          cursor: pointer;
          outline: none;
          border: 0;
          background: transparent;
          padding: 10px;
          -webkit-tap-highlight-color: transparent;
        }
        .botao-texto {
          display: block;
          position: relative;
          color: #a8b2d1;
          font-size: 2.5rem;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), color 0.3s ease;
        }
        .botao-texto::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background: #64ffda;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .nav-botao:hover .botao-texto::after,
        .nav-botao.clicked .botao-texto::after {
          transform: scaleX(1);
        }

        .nav-botao:hover .botao-texto { color: #ccd6f6; }
        
        .navegacao-desktop { display: block; }
        .navegacao-desktop .nav-botao {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .navegacao-desktop .prev { left: -80px; }
        .navegacao-desktop .next { right: -80px; }
        .navegacao-desktop .prev:hover .botao-texto { transform: translateX(-5px); }
        .navegacao-desktop .next:hover .botao-texto { transform: translateX(5px); }

        .navegacao-mobile {
          display: none;
          width: 100%;
          justify-content: space-around;
          margin-top: 20px;
        }
        
        @media (max-width: 900px) {
          .navegacao-desktop { display: none; }
          .navegacao-mobile { display: flex; }
          .carousel-wrapper { max-width: 500px; }
        }
        @media (max-width: 768px) {
          .carousel-conteudo { padding: 25px; }
          .carousel-imagem { height: 200px; }
          .carousel-titulo { font-size: 1.8rem; }
          .carousel-descricao { 
            font-size: 0.95rem; 
            min-height: 100px;
            text-align: justify;
          }
        }
      `}</style>

      <div className="container-geral bg-noise" style={{ backgroundColor: corDeFundoAtual }}>
        
        {/* Logo BS com a fonte Orbitron */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center w-full">
          <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
        </div>

        <div className="carousel-wrapper">
          
          <div className="navegacao-desktop">
            <button onClick={projetoAnterior} className="nav-botao prev" aria-label="Projeto anterior">
              <span className="botao-texto">&#8592;</span>
            </button>
            <button onClick={proximoProjeto} className="nav-botao next" aria-label="Próximo projeto">
              <span className="botao-texto">&#8594;</span>
            </button>
          </div>
          
          <div className="carousel-card" style={{ backgroundColor: corDoCardAtual }}>
            <div className="carousel-conteudo">
              <img src={imagem} alt={`Imagem do projeto ${titulo}`} className="carousel-imagem" />
              <h2 className="carousel-titulo">{titulo}</h2>
              <p className="carousel-descricao">{descricao}</p>
            </div>
          </div>
          
          <div className="navegacao-mobile">
            <button 
              ref={prevButtonMobileRef}
              onClick={() => {
                projetoAnterior();
                playMobileAnimation(prevButtonMobileRef);
              }}
              className="nav-botao prev"
              aria-label="Projeto anterior"
            >
              <span className="botao-texto">&#8592;</span>
            </button>
            <button
              ref={nextButtonMobileRef}
              onClick={() => {
                proximoProjeto();
                playMobileAnimation(nextButtonMobileRef);
              }}
              className="nav-botao next"
              aria-label="Próximo projeto"
            >
              <span className="botao-texto">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjetosCarousel;