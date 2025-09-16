"use client";

import React, { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2A8CFF]/20 rounded-xl shadow-lg bg-black/40 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-6 focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-white group-hover:text-[#1BC6D9] transition-colors duration-300">
          {title}
        </p>
        <div className="flex items-center justify-center w-10 h-10 border border-[#2A8CFF]/30 rounded-full bg-[#2A8CFF]/10 group-hover:bg-[#1BC6D9]/20 group-hover:border-[#1BC6D9]/50 transition-all duration-300">
          <svg
            viewBox="0 0 24 24"
            className={`w-4 text-[#2A8CFF] group-hover:text-[#1BC6D9] transition-all duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 animate-fadeIn">
          <p className="text-[#B5B5B5] leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2A8CFF]/15 to-[#1BC6D9]/15 rounded-full blur-3xl animate-float-bg-1" 
             style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/10 to-[#1BC6D9]/10 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative z-10">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <a className="mb-6 sm:mx-auto group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#2A8CFF]/20 to-[#1BC6D9]/20 border border-[#2A8CFF]/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#2A8CFF] group-hover:text-[#1BC6D9] transition-colors duration-300"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M26 8v8m0 0l-8-8m8 8l8-8m-8 16v8m0 0l-8-8m8 8l8-8"
                  />
                  <circle cx="26" cy="26" r="20" strokeWidth="2" />
                </svg>
              </div>
            </a>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#2A8CFF]/20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="faq-pattern"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#faq-pattern)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative text-[#2A8CFF]">Preguntas</span>
                </span>{' '}
                <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
                  Frecuentes
                </span>
              </h2>
              <p className="text-base text-[#B5B5B5] md:text-lg leading-relaxed">
                Resolvemos las dudas más comunes sobre nuestros servicios y procesos. 
                Si no encuentras lo que buscas, no dudes en contactarnos directamente.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Item title="¿Qué servicios ofrece GWS - Grain Wave Studios?">
              Ofrecemos desarrollo web personalizado, aplicaciones móviles, automatización de procesos, 
              consultoría digital y soluciones tecnológicas integrales. Nos especializamos en transformar 
              ideas en productos digitales innovadores utilizando las últimas tecnologías.
            </Item>
            
            <Item title="¿Cuánto tiempo toma desarrollar una aplicación web?">
              El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web básica 
              puede tomar 4-6 semanas, mientras que proyectos más complejos pueden requerir 3-6 meses. 
              Siempre proporcionamos estimaciones detalladas después de analizar tus requerimientos específicos.
            </Item>
            
            <Item title="¿Ofrecen soporte técnico después del lanzamiento?">
              Sí, ofrecemos diferentes planes de soporte técnico que incluyen mantenimiento, actualizaciones, 
              monitoreo 24/7 y resolución de incidencias. Nuestro equipo está disponible para garantizar 
              que tu solución funcione de manera óptima en todo momento.
            </Item>
            
            <Item title="¿Trabajan con empresas de todos los tamaños?">
              Absolutamente. Trabajamos con startups, pequeñas y medianas empresas, así como grandes 
              corporaciones. Adaptamos nuestras soluciones y metodologías según las necesidades y 
              presupuesto de cada cliente, sin comprometer la calidad.
            </Item>
            
            <Item title="¿Qué tecnologías utilizan en sus desarrollos?">
              Utilizamos tecnologías modernas como React, Next.js, Node.js, Python, TypeScript, 
              bases de datos SQL y NoSQL, servicios en la nube (AWS, Azure), y frameworks móviles 
              como React Native. Siempre elegimos la tecnología más adecuada para cada proyecto.
            </Item>
            
            <Item title="¿Cómo funciona el proceso de desarrollo?">
              Nuestro proceso incluye: 1) Análisis y planificación inicial, 2) Diseño de wireframes 
              y prototipos, 3) Desarrollo iterativo con entregas parciales, 4) Testing exhaustivo, 
              5) Lanzamiento y puesta en producción, 6) Soporte continuo. Mantenemos comunicación 
              constante durante todo el proceso.
            </Item>
            
            <Item title="¿Proporcionan capacitación para usar las soluciones desarrolladas?">
              Sí, incluimos capacitación completa para tu equipo sobre cómo usar y administrar 
              las soluciones que desarrollamos. Proporcionamos documentación detallada, sesiones 
              de entrenamiento en vivo y materiales de apoyo para garantizar una adopción exitosa.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
