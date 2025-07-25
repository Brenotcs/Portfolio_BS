import React, { useState } from 'react';
import {
  HiOutlineMenuAlt2,
  HiX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
} from 'react-icons/hi';

import finexLogo from '../assets/images/FINEXLOGO.COR.B-8.png';

const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode | string; label: string }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleSmoothScroll}
      className="relative group flex justify-center items-center h-[60px] w-full text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
    >
      {typeof icon === 'string' ? (
        <img src={icon} alt={`${label} logo`} className="h-10 w-auto" />
      ) : (
        icon
      )}
      <span
        className="absolute left-full ml-4 px-3 py-2 whitespace-nowrap rounded-md text-sm font-medium
                   bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity
                   pointer-events-none"
      >
        {label}
      </span>
    </a>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSidebar}
        className="sm:hidden fixed top-0 left-0 z-40 w-[72px] h-[72px] grid place-items-center text-white"
        aria-label="Abrir menu"
      >
        {isOpen ? <HiX size={32} /> : <HiOutlineMenuAlt2 size={32} />}
      </button>

      <div
        className={`
          sm:hidden fixed top-6 left-0 z-30 w-[72px] flex justify-center
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-[72px]' : '-translate-x-full'}
        `}
      >
        <span className="font-orbitron text-xs tracking-widest text-white/60 select-none">BS</span>
      </div>

      <div className="group/sidebar fixed top-0 left-0 h-full z-30">
        <aside
          className={`h-full w-[72px] bg-[#14274C]/30 backdrop-blur-lg
                     transition-transform duration-300 ease-in-out
                     -translate-x-full group-hover/sidebar:translate-x-0
                     ${isOpen ? '!translate-x-0' : ''}`}
        >
          <div className="hidden sm:flex absolute top-6 left-1/2 -translate-x-1/2 z-30 justify-center w-full">
            <span className="font-orbitron text-xs sm:text-sm md:text-base tracking-widest text-white/60 select-none">BS</span>
          </div>

          <header className="h-[72px] w-full"></header>
          <nav className="flex flex-col items-center mt-6">
            <NavItem href="#home" icon={<HiOutlineHome size={24} />} label="Home" />
            <NavItem href="#sobre-mim" icon={<HiOutlineUser size={24} />} label="Sobre Mim" />
            <NavItem href="#finex" icon={finexLogo} label="Finex" />
            <NavItem href="#projetos" icon={<HiOutlineBriefcase size={24} />} label="Projetos" />
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;