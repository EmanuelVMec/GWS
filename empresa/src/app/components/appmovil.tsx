"use client";

import React from "react";

export default function AppMovil() {
  return (
    <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Fondo animado igual que en equipo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elementos superiores */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2A8CFF]/20 to-[#1BC6D9]/20 rounded-full blur-3xl animate-float-bg-1" 
             style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/3 right-1/6 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/15 to-[#1BC6D9]/15 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#2A8CFF]/10 to-[#8B5CF6]/10 rounded-full blur-2xl"
             style={{ clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)' }}></div>
        
        {/* Elementos inferiores */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#1BC6D9]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-float-bg-1"
             style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-r from-[#2A8CFF]/15 to-[#1BC6D9]/15 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-tl from-[#8B5CF6]/12 to-[#2A8CFF]/12 rounded-full blur-2xl animate-float-bg-1"
             style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-[#1BC6D9]/18 to-[#2A8CFF]/18 rounded-full blur-3xl animate-float-bg-2"
             style={{ clipPath: 'polygon(45% 0%, 100% 0%, 55% 100%, 0% 100%)' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl relative z-10">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5 animate-fadeInLeft">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-[#0A0A0A] uppercase rounded-full bg-gradient-to-r from-[#1BC6D9] to-[#2A8CFF] shadow-lg">
                Innovación Móvil
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none title-glow-cyan">
              Aplicaciones móviles
              <br className="hidden md:block" />
              que conectan con{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1BC6D9] to-[#8B5CF6]">
                tus usuarios
              </span>
            </h2>
            <p className="text-base text-[#B5B5B5] md:text-lg leading-relaxed">
              Desarrollamos apps móviles nativas para Android. 
              Experiencias de usuario intuitivas, rendimiento optimizado y funcionalidades 
              que impulsan el crecimiento de tu negocio.
            </p>
          </div>
          <div className="flex items-center animate-fadeInUp delay-600">
            <a
              href="/soporte"
              className="group relative inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] hover:from-[#1BC6D9] hover:to-[#8B5CF6] focus:shadow-outline focus:outline-none transform hover:scale-105 hover:shadow-2xl hover:shadow-[#2A8CFF]/25"
            >
              <span className="relative z-10">Comenzar Proyecto</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </a>
            <a
              href="/servicios"
              className="group inline-flex items-center font-semibold transition-all duration-200 text-[#1BC6D9] hover:text-[#2A8CFF] relative"
            >
              <span className="relative z-10">Ver más servicios</span>
              <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1BC6D9] to-[#2A8CFF] group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
        <div className="animate-fadeInRight delay-300">
          <div className="relative group">
            <img
              src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
              className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm transition-all duration-500 transform group-hover:scale-105 drop-shadow-2xl"
              alt="Vista previa de aplicación móvil"
            />
            {/* Efectos de iluminación en la imagen */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#2A8CFF]/10 via-transparent to-[#1BC6D9]/10 group-hover:from-[#2A8CFF]/20 group-hover:to-[#1BC6D9]/20 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2A8CFF]/20 via-[#1BC6D9]/20 to-[#8B5CF6]/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Sección de características adicionales */}
      <div className="max-w-7xl mx-auto px-4 mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-[#2A8CFF]/10 to-[#1BC6D9]/10 rounded-xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group animate-fadeInUp delay-800">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#2A8CFF]/20 rounded-full group-hover:bg-[#2A8CFF]/30 transition-all duration-300">
                <svg className="w-8 h-8 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2A8CFF] transition-colors duration-300">Apps Nativas</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Desarrollo nativo para Android con rendimiento óptimo</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#1BC6D9]/10 to-[#8B5CF6]/10 rounded-xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group animate-fadeInUp delay-1000">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#1BC6D9]/20 rounded-full group-hover:bg-[#1BC6D9]/30 transition-all duration-300">
                <svg className="w-8 h-8 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#1BC6D9] transition-colors duration-300">Cross-Platform</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Aplicaciones híbridas desarrolladas con React Native</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#8B5CF6]/10 to-[#2A8CFF]/10 rounded-xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group animate-fadeInUp delay-1200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#8B5CF6]/20 rounded-full group-hover:bg-[#8B5CF6]/30 transition-all duration-300">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300">UI/UX Design</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Interfaces intuitivas y experiencias de usuario excepcionales</p>
          </div>
        </div>
      </div>

      {/* Sección de Tecnologías */}
      <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 title-glow-purple">
            Tecnologías que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BC6D9] to-[#8B5CF6]">dominamos</span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Utilizamos las tecnologías más avanzadas y frameworks modernos para garantizar apps robustas y escalables
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { 
              name: "React Native", 
              icon: <svg className="w-8 h-8 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            },
            { 
              name: "Flutter", 
              icon: <svg className="w-8 h-8 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            },
            { 
              name: "Firebase", 
              icon: <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            },
            { 
              name: "MongoDB", 
              icon: <svg className="w-8 h-8 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
              </svg>
            },
            { 
              name: "Node.js", 
              icon: <svg className="w-8 h-8 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
              </svg>
            },
            { 
              name: "TypeScript", 
              icon: <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            },
          ].map((tech, index) => (
            <div key={tech.name} className={`text-center p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group cursor-pointer animate-fadeInUp`} style={{animationDelay: `${1400 + index * 100}ms`}}>
              <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
              <p className="text-white text-sm font-medium group-hover:text-[#2A8CFF] transition-colors duration-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proceso de Desarrollo */}
      <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 title-glow-cyan">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9]">proceso</span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Metodología ágil y transparente para garantizar el éxito de tu aplicación móvil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Análisis & Planning",
              description: "Estudiamos tu idea, definimos objetivos y creamos la arquitectura técnica",
              icon: <svg className="w-12 h-12 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
              </svg>
            },
            {
              step: "02", 
              title: "UI/UX Design",
              description: "Diseñamos interfaces intuitivas y experiencias de usuario excepcionales",
              icon: <svg className="w-12 h-12 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"/>
              </svg>
            },
            {
              step: "03",
              title: "Desarrollo",
              description: "Programamos tu app con las mejores prácticas y tecnologías modernas",
              icon: <svg className="w-12 h-12 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            },
            {
              step: "04",
              title: "Testing & Deploy",
              description: "Probamos exhaustivamente y desplegamos en App Store y Google Play",
              icon: <svg className="w-12 h-12 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            }
          ].map((process, index) => (
            <div key={process.step} className={`relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group animate-fadeInUp`} style={{animationDelay: `${2000 + index * 200}ms`}}>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {process.step}
              </div>
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{process.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#2A8CFF] transition-colors duration-300">{process.title}</h3>
              <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio de Apps */}
      <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 title-glow-purple">
            Apps que hemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#1BC6D9]">desarrollado</span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Casos de éxito que demuestran nuestra experiencia en desarrollo móvil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "EcoTrack",
              category: "Sustentabilidad",
              description: "App para monitoreo de huella de carbono personal con gamificación",
              downloads: "50K+",
              rating: "4.8",
              color: "from-green-500/20 to-blue-500/20"
            },
            {
              name: "FitCoach Pro",
              category: "Fitness & Salud",
              description: "Entrenador personal virtual con IA y seguimiento de progreso",
              downloads: "100K+",
              rating: "4.9",
              color: "from-orange-500/20 to-red-500/20"
            },
            {
              name: "CryptoWallet",
              category: "Fintech",
              description: "Billetera digital segura para criptomonedas con trading integrado",
              downloads: "25K+",
              rating: "4.7",
              color: "from-purple-500/20 to-pink-500/20"
            }
          ].map((app, index) => (
            <div key={app.name} className={`p-6 bg-gradient-to-br ${app.color} rounded-xl border border-white/10 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group cursor-pointer animate-fadeInUp`} style={{animationDelay: `${2800 + index * 200}ms`}}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {app.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-[#2A8CFF] transition-colors duration-300">{app.name}</h3>
                    <p className="text-[#B5B5B5] text-sm">{app.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-400 mb-1">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white font-semibold">{app.rating}</span>
                  </div>
                  <p className="text-[#B5B5B5] text-xs">{app.downloads} descargas</p>
                </div>
              </div>
              <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">{app.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center space-x-1 text-[#B5B5B5] text-sm">
                  <svg className="w-4 h-4 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <span>iOS</span>
                </div>
                <div className="flex items-center space-x-1 text-[#B5B5B5] text-sm">
                  <svg className="w-4 h-4 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <span>Android</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 title-glow-cyan">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BC6D9] to-[#2A8CFF]">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "María González",
              company: "CEO, EcoStart",
              text: "GWS transformó nuestra idea en una app increíble. El proceso fue transparente y el resultado superó nuestras expectativas.",
              avatar: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>,
              rating: 5
            },
            {
              name: "Carlos Mendez",
              company: "Founder, FitLife",
              text: "La atención al detalle y la calidad del código es excepcional. Nuestra app tiene más de 100K usuarios activos.",
              avatar: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>,
              rating: 5
            },
            {
              name: "Ana Rodriguez",
              company: "CTO, FinanceApp",
              text: "Equipo altamente profesional. Cumplieron todos los plazos y la app es robusta y escalable.",
              avatar: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>,
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={testimonial.name} className={`p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group animate-fadeInUp`} style={{animationDelay: `${3400 + index * 200}ms`}}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[#B5B5B5] mb-6 italic group-hover:text-white transition-colors duration-300">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] rounded-full flex items-center justify-center mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-[#2A8CFF] transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-[#B5B5B5] text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="max-w-4xl mx-auto px-4 mt-32 mb-16 relative z-10">
        <div className="text-center p-12 bg-gradient-to-br from-[#2A8CFF]/10 to-[#8B5CF6]/10 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm animate-fadeInUp" style={{animationDelay: '4000ms'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 title-glow-purple">
            ¿Listo para crear tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BC6D9] to-[#8B5CF6]">app móvil</span>?
          </h2>
          <p className="text-[#B5B5B5] text-lg mb-8 max-w-2xl mx-auto">
            Convierte tu idea en realidad con una aplicación móvil profesional que destaque en el mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/soporte"
              className="group relative inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] hover:from-[#1BC6D9] hover:to-[#8B5CF6] focus:shadow-outline focus:outline-none transform hover:scale-105 hover:shadow-2xl hover:shadow-[#2A8CFF]/25"
            >
              <span className="relative z-10">Solicitar Cotización</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </a>
            <a
              href="/equipo"
              className="group inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-[#1BC6D9] transition-all duration-300 rounded-lg border-2 border-[#1BC6D9]/30 hover:border-[#1BC6D9] hover:bg-[#1BC6D9]/10 focus:shadow-outline focus:outline-none"
            >
              <span className="relative z-10">Conocer el Equipo</span>
              <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
