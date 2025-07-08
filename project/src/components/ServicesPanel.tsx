import React from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Palette,
  Zap,
  Globe,
  Database,
} from "lucide-react";

interface ServicesPanelProps {
  panelNumber: number;
}

const ServicesPanel: React.FC<ServicesPanelProps> = ({ panelNumber }) => {
  const services = [
    {
      id: "servicos",
      title: "Nossos Serviços",
      description:
        "Soluções completas em desenvolvimento de software para impulsionar seu negócio digital.",
      icon: Code,
      features: [
        { name: "Desenvolvimento Web & Mobile", icon: Globe },
        { name: "Sistemas Corporativos", icon: Database },
        { name: "APIs e Integrações", icon: Zap },
        { name: "UI/UX Design", icon: Palette },
      ],
    },
    {
      id: "web-mobile-development",
      title: "Desenvolvimento Web & Mobile",
      description:
        "Criamos aplicações web modernas e aplicativos mobile nativos com experiência excepcional.",
      icon: Globe,
      features: [
        { name: "React & Next.js", icon: Code },
        { name: "React Native & Flutter", icon: Smartphone },
        { name: "TypeScript & Node.js", icon: Zap },
        { name: "Design Responsivo", icon: Palette },
      ],
    },
    {
      id: "cloud-solutions",
      title: "Soluções em Nuvem",
      description:
        "Migração e desenvolvimento de aplicações escaláveis na nuvem com alta disponibilidade.",
      icon: Cloud,
      features: [
        { name: "AWS & Google Cloud", icon: Cloud },
        { name: "DevOps & CI/CD", icon: Zap },
        { name: "Microserviços", icon: Database },
        { name: "Monitoramento 24/7", icon: Shield },
      ],
    },
  ];

  const service = services[panelNumber - 1];
  if (!service) return null;

  const IconComponent = service.icon;

  const gridClasses =
    panelNumber === 1 || panelNumber === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6";

  return (
    <section
      id={service.id}
      className={`w-full h-full flex flex-col justify-center items-center ${
        panelNumber % 2 === 0
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
          : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
      } relative overflow-hidden`}
    >
      {/* Efeitos de Fundo em tons de cinza */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-700/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="w-full max-w-screen-xl mx-auto h-full text-center overflow-y-auto py-12 px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-3 sm:p-5 bg-gray-600 bg-opacity-20 rounded-full border border-gray-500 backdrop-blur-sm">
            <IconComponent size={18} className="text-gray-400" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          {service.title}
        </h2>

        <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
          {service.description}
        </p>

        <div className={gridClasses}>
          {service.features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-700 bg-opacity-50 p-4 sm:p-5 rounded-xl border border-gray-600 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="p-2 sm:p-3 bg-gray-500 bg-opacity-20 rounded-lg border border-gray-500">
                    <FeatureIcon size={14} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPanel;