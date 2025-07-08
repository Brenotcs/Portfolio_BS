import React from "react";
import { Code } from "lucide-react";
import { motion } from "framer-motion";

import {
  SiNodedotjs, SiReact, SiJavascript, SiTypescript, SiPostgresql,
  SiMysql, SiMongodb, SiDocker, SiCss3, SiPrisma, SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

const TechnologiesPanel: React.FC = () => {

  const technologies = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", category: "Backend" },
    { name: "React.js", icon: SiReact, color: "text-sky-400", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", category: "Language" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", category: "Language" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", category: "Database" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-400", category: "Database" },
    { name: "Java", icon: FaJava, color: "text-red-500", category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", category: "Database" },
    { name: "Docker", icon: SiDocker, color: "text-blue-600", category: "DevOps" },
    { name: "CSS", icon: SiCss3, color: "text-blue-400", category: "Frontend" },
    { name: "SQL", icon: TbSql, color: "text-cyan-400", category: "Database" },
    { name: "React Native", icon: TbBrandReactNative, color: "text-sky-500", category: "Mobile" },
    { name: "Prisma", icon: SiPrisma, color: "text-teal-400", category: "ORM" },
    { name: "Python", icon: SiPython, color: "text-yellow-400", category: "Backend" },
  ];

  // **CORES DAS CATEGORIAS RESTAURADAS PARA AS ORIGINAIS**
  const categories = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Mobile", color: "from-purple-500 to-violet-500" },
    { name: "Database", color: "from-orange-500 to-red-500" },
    { name: "DevOps", color: "from-gray-500 to-slate-500" },
    { name: "Language", color: "from-yellow-500 to-amber-500" },
    { name: "ORM", color: "from-indigo-500 to-purple-500" },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="tecnologias"
      className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-700/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="w-full max-w-screen-xl mx-auto h-full text-center overflow-y-auto py-12 px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 flex-shrink-0"
        >
          <div className="p-4 bg-gray-600 bg-opacity-20 rounded-full border border-gray-500">
            <Code className="text-3xl sm:text-4xl text-gray-400" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Tecnologias que Impulsionam Nossos Projetos
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Utilizamos as tecnologias mais modernas e confiáveis do mercado para
          entregar soluções robustas e escaláveis.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 mb-8 w-full"
        >
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group bg-gray-700 bg-opacity-50 border border-gray-600 hover:border-gray-500 p-3 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
                  <IconComponent className="mx-auto" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 break-words">{tech.name}</h3>
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r ${categories.find(c => c.name === tech.category)?.color} text-white`}>
                  {tech.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full pb-4"
        >
          {categories.map((category) => (
            <div key={category.name} className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 border border-transparent hover:border-gray-400 transition-colors duration-300 text-center`}>
              <h4 className="text-white font-semibold text-xs">{category.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesPanel;