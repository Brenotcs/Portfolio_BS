import React, { useState, useRef } from 'react';

// --- DADOS DOS PROJETOS ---
const meusProjetos = [
  {
    titulo: 'Plataforma de Gestão',
    descricao: 'Plataforma inovadora para gerenciamento de tarefas, construída com React e Node.js, focada em performance para equipes ágeis.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Loja Virtual Moderna',
    descricao: 'Loja virtual completa com integração de pagamentos e painel de administração. Desenvolvida com a tecnologia Next.js.',
    imagem: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Aplicativo de Bem-Estar',
    descricao: 'Aplicativo para monitoramento de saúde e bem-estar, disponível para iOS e Android, desenvolvido com React Native.',
    imagem: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

const ProjetosCarousel: React.FC = () => {
  const [projetoAtual, setProjetoAtual] = useState(0);
  // Refs para obter acesso direto aos botões mobile
  const prevButtonMobileRef = useRef<HTMLButtonElement>(null);
  const nextButtonMobileRef = useRef<HTMLButtonElement>(null);

  const proximoProjeto = () => {
    setProjetoAtual((prev) => (prev + 1) % meusProjetos.length);
  };

  const projetoAnterior = () => {
    setProjetoAtual((prev) => (prev - 1 + meusProjetos.length) % meusProjetos.length);
  };
  
  // Função que força a re-animação
  const playMobileAnimation = (buttonRef: React.RefObject<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      // 1. Remove a classe para garantir que o estado está limpo
      button.classList.remove('clicked');
      
      // 2. Força o navegador a "repintar" o elemento. Este é o truque principal.
      void button.offsetWidth; 

      // 3. Adiciona a classe novamente para disparar a animação
      button.classList.add('clicked');
      
      // 4. Limpa a classe após a animação terminar
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 450); // Duração um pouco maior que a transição de 0.4s
    }
  };

  const projeto = meusProjetos?.[projetoAtual];

  if (!projeto) {
    return (
      <div className="container-geral">
        <p>Carregando projetos...</p>
      </div>
    );
  }

  const { titulo, descricao, imagem } = projeto;

  return (
    <>
      <style>{`
        /* O CSS permanece o mesmo da versão anterior */
        .container-geral {
          background-color: #2a2a2e;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          overflow: hidden;
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
          background-color: #1c1c1e;
          width: 100%;
          text-align: center;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
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
        .carousel-descricao { font-size: 1rem; line-height: 1.5; color: #a8b2d1; min-height: 90px; }
        
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
          .carousel-descricao { font-size: 0.95rem; min-height: 100px; }
        }
      `}</style>

      <div className="container-geral bg-noise">
        <div className="carousel-wrapper">
          
          <div className="navegacao-desktop">
            <button onClick={projetoAnterior} className="nav-botao prev" aria-label="Projeto anterior">
              <span className="botao-texto">&#8592;</span>
            </button>
            <button onClick={proximoProjeto} className="nav-botao next" aria-label="Próximo projeto">
              <span className="botao-texto">&#8594;</span>
            </button>
          </div>

          <div className="carousel-card">
            <div className="carousel-conteudo">
              <img src={imagem} alt={`Imagem do projeto ${titulo}`} className="carousel-imagem" />
              <h2 className="carousel-titulo">{titulo}</h2>
              <p className="carousel-descricao">{descricao}</p>
            </div>
          </div>
          
          <div className="navegacao-mobile">
            <button 
              ref={prevButtonMobileRef} // Adiciona a ref
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
              ref={nextButtonMobileRef} // Adiciona a ref
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