import React, { useState, useEffect } from 'react';
import { Menu, Home, Briefcase, Code, Mail, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  // Toda a lógica de estados e efeitos permanece a mesma
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isHoverBehaviorActive, setIsHoverBehaviorActive] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const parallaxZone = document.getElementById('parallax-zone');
    if (!parallaxZone) return;
    const contactSection = document.getElementById('contato');
    if (!contactSection) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxStart = parallaxZone.offsetTop;
      const parallaxEnd = contactSection.offsetTop;
      const buffer = 10;
      if (scrollY > parallaxStart - buffer && scrollY < parallaxEnd - buffer) {
        setIsHoverBehaviorActive(false);
      } else {
        setIsHoverBehaviorActive(true);
      }
    };

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => { setIsHovering(true); if (isHoverBehaviorActive) setIsDesktopOpen(true); };
  const handleMouseLeave = () => { setIsHovering(false); setIsDesktopOpen(false); };
  const handleMenuClick = () => { if (!isHoverBehaviorActive) setIsDesktopOpen(!isDesktopOpen); };
  const toggleMobileMenu = () => { setIsMobileOpen(!isMobileOpen); };

  const handleNavigate = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const heroSectionHeight = window.innerHeight;
    const panelWidth = window.innerWidth;
    const parallaxStart = heroSectionHeight;
    let targetScrollY;
    switch (id) {
      case 'home': targetScrollY = 0; break;
      case 'servicos': targetScrollY = parallaxStart; break;
      case 'tecnologias': targetScrollY = parallaxStart + (panelWidth * 3); break;
      // O case 'equipe' foi removido daqui
      case 'contato': { const contactElement = document.getElementById('contato'); targetScrollY = contactElement ? contactElement.offsetTop : 0; break; }
      default: return;
    }
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    if (isMobileOpen) { setIsMobileOpen(false); }
  };

  // O item 'Nossa Equipe' foi removido da lista
  const menuItems = [ 
    { id: 'home', label: 'Home', icon: Home }, 
    { id: 'servicos', label: 'Nossos Serviços', icon: Briefcase }, 
    { id: 'tecnologias', label: 'Tecnologias', icon: Code }, 
    { id: 'contato', label: 'Contato', icon: Mail }, 
  ];
  
  const isEffectivelyVisible = isHoverBehaviorActive || isHovering;

  return (
    <>
      {/* --- ESTRUTURA MOBILE (será atualizada automaticamente com a nova lista de menu) --- */}
      <button
        className={`md:hidden fixed top-4 left-4 z-[60] text-white p-2 rounded-full shadow-lg bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? 'opacity-0 pointer-events-none' : 'opacity-80'}`}
        onClick={toggleMobileMenu} aria-label="Abrir menu">
        <Menu size={28} />
      </button>
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={toggleMobileMenu} />
      )}
      <nav className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900/70 backdrop-blur-lg border-r border-white/10 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-white/10">
            <span className="text-xl font-bold text-white">Breno's Site</span>
            <X size={28} className="text-white cursor-pointer" onClick={toggleMobileMenu}/>
        </div>
        <ul className="list-none p-4 mt-4">
          {menuItems.map((item) => (
            <li key={item.id} className="my-1">
              <a href={`#${item.id}`} onClick={(e) => handleNavigate(item.id, e)} className="flex items-center p-3 text-white no-underline rounded-lg text-base hover:bg-white/10 transition-colors">
                <item.icon size={22} className="flex-shrink-0" />
                <span className="ml-4 font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- ESTRUTURA DESKTOP (será atualizada automaticamente com a nova lista de menu) --- */}
      <div 
        className="hidden md:block fixed top-0 left-0 h-full w-16 z-50"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className={`fixed top-4 left-4 h-[calc(100vh-2rem)] transition-opacity duration-300 ease-in-out ${isEffectivelyVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <nav className={`h-full transition-all duration-300 ease-in-out bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl ${isDesktopOpen ? 'w-64' : 'w-24'}`}>
            <div className="flex items-center h-[80px] px-7 cursor-pointer" onClick={handleMenuClick}>
              <Menu size={28} className={`text-white flex-shrink-0 transition-transform duration-300 ease-in-out ${!isDesktopOpen && 'translate-x-1'}`}/>
              <span className={`font-bold text-xl text-white whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isDesktopOpen ? 'max-w-40 ml-4 opacity-100' : 'max-w-0 ml-0 opacity-0'}`}>
                Breno's Site
              </span>
            </div>
            <ul className="list-none p-0 mt-8">
              {menuItems.map((item) => (
                <li key={item.id} className="my-2">
                  <a href={`#${item.id}`} onClick={(e) => handleNavigate(item.id, e)} className="flex items-center mx-4 px-3 py-3 text-white no-underline rounded-xl text-base whitespace-nowrap overflow-hidden transition-colors duration-200 ease-in-out hover:bg-white/10">
                    <item.icon size={24} className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${!isDesktopOpen && 'translate-x-2'}`} />
                    <span className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-200 ease-out ${isDesktopOpen ? 'max-w-40 ml-4 opacity-100' : 'max-w-0 ml-0 opacity-0'}`}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;