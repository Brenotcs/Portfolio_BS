import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Server,
  User,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Hook para detectar se a visualização é desktop
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    // Garante que o código só rode no lado do cliente (navegador)
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 1024px)");
    const updateMedia = () => setIsDesktop(media.matches);
    
    window.addEventListener("resize", updateMedia);
    updateMedia(); // Define o estado inicial

    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return isDesktop;
};

// Tipagem para o perfil do GitHub
type GithubProfile = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
};

// Componente do Card de Preview do GitHub (Pop-up)
const GithubPreviewCard: React.FC<{ profile: GithubProfile | null; position: { top: number; left: number } }> = ({ profile, position }) => {
  // Se a posição não for válida, não renderiza nada para evitar aparecer no canto da tela
  if (position.top === 0) return null;

  return (
    <div
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translate(-50%, -110%)',
      }}
      // A classe 'animate-popup-appear' foi removida para teste. Se funcionar, verifique seu CSS.
      className="fixed z-50 w-64 p-4 text-left text-white bg-gray-800 border border-gray-500 rounded-lg shadow-lg"
    >
      {!profile ? (
        "Carregando perfil..."
      ) : (
        <>
          <div className="flex items-center mb-3">
            <img src={profile.avatar_url} alt={profile.name} className="w-12 h-12 mr-3 rounded-full" />
            <div>
              <h4 className="font-bold">{profile.name}</h4>
              <p className="text-sm text-gray-400">@{profile.login}</p>
            </div>
          </div>
          <p className="mb-3 text-sm text-gray-300">{profile.bio}</p>
          <div className="flex justify-around text-sm">
            <div className="flex items-center gap-1">
              <User size={14} className="text-gray-400" /> {profile.followers} Seguidores
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-gray-400" /> {profile.public_repos} Repositórios
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ContactSection: React.FC = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "brenotcs@gmail.com", color: "from-gray-500 to-gray-600" },
    { icon: Phone, title: "Telefone", value: "(71) 982964856", color: "from-gray-500 to-gray-600" },
    { icon: MapPin, title: "Localização", value: "Salvador, BA - Brasil", color: "from-gray-500 to-gray-600" },
  ];

  const brenoSouza = {
    name: "Breno Souza",
    role: "Full Stack Developer",
    skills: ["React.Js", "Node.js", "Dart", "MySQL"],
    icon: Server,
    gradient: "from-gray-500 to-gray-600",
    githubUrl: "https://github.com/Brenotcs",
    githubUsername: "Brenotcs",
  };

  const isDesktop = useIsDesktop();
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const hoverTimeoutRef = useRef<number | null>(null);

  // Efeito para buscar o perfil do GitHub apenas uma vez
  useEffect(() => {
    // Só busca o perfil se for desktop, para economizar chamadas de API
    if (isDesktop) {
      console.log("-> [EFFECT] Desktop detectado. Buscando perfil do GitHub...");
      fetch(`https://api.github.com/users/${brenoSouza.githubUsername}`)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Falha na resposta da API do GitHub');
        })
        .then(data => {
          console.log("-> [API SUCCESS] Perfil do GitHub carregado:", data);
          setProfile(data);
        })
        .catch(error => console.error("-> [API ERROR] Não foi possível buscar o perfil do GitHub:", error));
    }
  }, [isDesktop, brenoSouza.githubUsername]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // Limpa qualquer timeout pendente para esconder o pop-up
    if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
    }
    
    // Só ativa no desktop
    if (!isDesktop) {
        console.log("-> [HOVER] Mouse enter, mas não é desktop. Ignorando.");
        return;
    }

    console.log("-> [HOVER] Mouse enter em desktop. Mostrando pop-up.");
    
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Usa um pequeno delay para esconder o pop-up, melhorando a experiência do usuário
    hoverTimeoutRef.current = setTimeout(() => {
        if (!isDesktop) return;
        console.log("-> [HOVER] Mouse leave. Escondendo pop-up.");
        setIsHovering(false);
    }, 100); // 100ms de delay
  };

  return (
    <> {/* Fragmento para permitir que o pop-up seja renderizado fora da section se necessário */}
      <section
        id="contato"
        className="flex flex-col justify-center items-center min-h-screen py-10 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
      >
        {/* ... restante do seu JSX da section ... */}
        
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
            {/* ... Título e subtítulo ... */}
            <div className="text-center mb-4 sm:mb-8">
                <div className="flex justify-center mb-2 sm:mb-4">
                    <div className="p-2 sm:p-4 bg-gray-600 bg-opacity-20 rounded-full border border-gray-500 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                        <MessageSquare size={14} className="text-gray-400" />
                    </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                    Vamos Conversar?
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-6 leading-relaxed max-w-xs sm:max-w-2xl mx-auto">
                    Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos começar seu projeto hoje mesmo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Informações de Contato */}
                <div className="space-y-8">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-4">
                        Informações de Contato
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            const isPhone = info.title === "Telefone";
                            const whatsappUrl = isPhone ? `https://wa.me/55${info.value.replace(/[^0-9]/g, "")}` : "#";
                            const WrapperComponent = isPhone ? "a" : "div";
                            const wrapperProps = isPhone ? { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                            return (
                                <WrapperComponent key={index} {...wrapperProps} className="group flex flex-col items-center text-center p-2 sm:p-4 bg-gray-700 bg-opacity-50 rounded-xl border border-gray-600 md:hover:border-gray-400 transition-all duration-300 transform md:hover:scale-105 md:flex-row md:text-left">
                                    <div className={`p-1 sm:p-2 bg-gradient-to-r ${info.color} bg-opacity-20 rounded-lg border border-gray-500 mb-2 md:mb-0 md:mr-4 md:group-hover:bg-opacity-30 transition-all duration-300`}>
                                        {isPhone ? <FaWhatsapp className="text-white" size={12} /> : <IconComponent className="text-white" size={12} />}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-xs sm:text-base mb-0.5">{info.title}</h4>
                                        <p className="text-gray-300 text-xs sm:text-base">{info.value}</p>
                                        {isPhone && <p className="text-gray-400 text-xs sm:text-sm mt-1 font-semibold md:group-hover:underline">Clique aqui e fale conosco!</p>}
                                    </div>
                                </WrapperComponent>
                            );
                        })}
                    </div>
                </div>

                {/* Card Redondo do Breno Souza */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-4 text-center">
                        Fale com um Especialista
                    </h3>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                    >
                        <a href={brenoSouza.githubUrl} target="_blank" rel="noopener noreferrer" className="group w-64 h-64 sm:w-72 sm:h-72 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 p-5 rounded-full border border-gray-600 hover:border-gray-400 transition-all duration-300 text-center transform hover:scale-105">
                            <div className={`w-16 h-16 bg-gradient-to-br ${brenoSouza.gradient} rounded-full mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                <brenoSouza.icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{brenoSouza.name}</h3>
                            <p className="text-gray-400 font-semibold mb-2 text-sm">{brenoSouza.role}</p>
                            <div className="flex flex-wrap justify-center gap-1">
                                {brenoSouza.skills.slice(0, 2).map((skill, skillIndex) => (
                                    <span key={skillIndex} className="bg-gray-600 bg-opacity-20 text-gray-300 px-2 py-1 rounded-full text-xs font-medium border border-gray-500">{skill}</span>
                                ))}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* O pop-up é renderizado aqui, fora da section, mas posicionado de forma absoluta na tela */}
      {isHovering && <GithubPreviewCard profile={profile} position={position} />}
    </>
  );
};

export default ContactSection;