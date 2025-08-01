// Em: src/components/AnimatedBackground.tsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Inicializa o motor de partículas
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: "transparent", // Fundo do canvas transparente
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 60,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false, // Desabilitamos as linhas entre as partículas
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true, // Movimento aleatório
        speed: 0.5,   // Velocidade lenta para um efeito sutil
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Quantidade de partículas
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 }, // Tamanhos variados
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options as any}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default AnimatedBackground;