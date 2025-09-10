"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function Home() {
  const [currentTechSlide, setCurrentTechSlide] = useState(0);
  const maxSlides = 5;

  // Función para actualizar el carrusel
  const updateTechCarousel = (slideIndex: number) => {
    const carousel = document.getElementById('tech-carousel-content');
    if (!carousel) return;
    
    let translateX;
    if (slideIndex === 0) translateX = 0;
    else if (slideIndex === 1) translateX = -624; // 2 cards
    else if (slideIndex === 2) translateX = -1248; // 4 cards
    else if (slideIndex === 3) translateX = -1872; // 6 cards
    else if (slideIndex === 4) translateX = -2496; // 8 cards
    else if (slideIndex === 5) translateX = -2808; // últimas 3 cards
    
    carousel.style.transform = `translateX(${translateX}px)`;
  };

  // Navegación del carrusel
  const prevSlide = () => {
    const newSlide = currentTechSlide > 0 ? currentTechSlide - 1 : maxSlides - 1;
    setCurrentTechSlide(newSlide);
    updateTechCarousel(newSlide);
  };

  const nextSlide = () => {
    const newSlide = currentTechSlide < maxSlides - 1 ? currentTechSlide + 1 : 0;
    setCurrentTechSlide(newSlide);
    updateTechCarousel(newSlide);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      const newSlide = currentTechSlide < maxSlides - 1 ? currentTechSlide + 1 : 0;
      setCurrentTechSlide(newSlide);
      updateTechCarousel(newSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTechSlide, maxSlides]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
  <div className="bg-[#0A0A0A]">
  <Header />

  <div className="relative isolate px-6 pt-16 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-5rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-15rem)] sm:w-288.75 animate-float-bg-1"
          />
        </div>

  <div className="w-full py-2 sm:py-4 lg:py-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-2 relative">
              <img
                src="/GWSICO.png"
                alt="Logo GWS"
                className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-contain metallic-logo"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>

            {/* Nueva sección con diseño mejorado */}
            <div className="px-6 py-12 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-32 lg:px-12 lg:py-16 scroll-animate">
              <div className="max-w-4xl mb-16 md:mx-auto sm:text-center lg:max-w-5xl md:mb-20">
                <div>
                  <p className="inline-block px-6 py-3 mb-6 text-sm font-bold tracking-wider text-[#2A8CFF] uppercase rounded-full bg-[#60a5fa]/20 border border-[#60a5fa]/30">
                    Tecnología e Innovación
                  </p>
                </div>
                <h2 className="max-w-4xl mb-8 font-sans text-4xl font-bold leading-none tracking-tight text-[#2A8CFF] sm:text-5xl lg:text-6xl md:mx-auto title-glow scroll-animate">
                  <span className="relative inline-block">
                    <span className="relative">Impulsamos</span>
                  </span>{' '}
                  tu emprendimiento con tecnología, innovación y soporte de calidad
                </h2>
                <p className="text-xl text-[#B5B5B5] md:text-2xl mb-10 leading-relaxed scroll-animate">
                  GWS - Grain Wave Studios es donde las ideas se transforman en soluciones digitales innovadoras
                </p>
                
                {/* Cuadros de servicios principales */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-animate">
                  <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-6 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group">
                    <div className="flex justify-center mb-4">
                      <svg className="w-12 h-12 text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2A8CFF] mb-2">Desarrollo Web</h3>
                    <p className="text-[#B5B5B5] text-sm">Aplicaciones web modernas, escalables y optimizadas para el rendimiento.</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-6 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                    <div className="flex justify-center mb-4">
                      <svg className="w-12 h-12 text-[#1BC6D9] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1BC6D9] mb-2">Apps Móviles</h3>
                    <p className="text-[#B5B5B5] text-sm">Experiencias móviles nativas e híbridas que conectan con tus usuarios.</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-6 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                    <div className="flex justify-center mb-4">
                      <svg className="w-12 h-12 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#8B5CF6] mb-2">Consultoría Digital</h3>
                    <p className="text-[#B5B5B5] text-sm">Estrategias tecnológicas que impulsan el crecimiento de tu negocio.</p>
                  </div>
                </div>
                
                {/* Cuadro de significado mejorado */}
                <div className="bg-gradient-to-r from-[#60a5fa]/10 to-[#1BC6D9]/10 rounded-3xl p-10 border border-[#60a5fa]/20 backdrop-blur-sm scroll-animate">
                  <h3 className="text-3xl font-bold text-[#2A8CFF] mb-8 flex items-center gap-3 justify-center">
                    <svg className="w-10 h-10 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Significado del nombre
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 text-base">
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-[#1BC6D9]/20 hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                      <span className="font-bold text-[#1BC6D9] block mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">Grain (grano)</span>
                      <span className="text-[#B5B5B5] text-lg leading-relaxed">Detalle, precisión y el inicio de una gran idea</span>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-[#2A8CFF]/20 hover:border-[#2A8CFF]/40 transition-all duration-300 group">
                      <span className="font-bold text-[#2A8CFF] block mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">Wave (ola)</span>
                      <span className="text-[#B5B5B5] text-lg leading-relaxed">Innovación, fuerza del cambio y expansión digital</span>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-[#B5B5B5]/20 hover:border-[#B5B5B5]/40 transition-all duration-300 group">
                      <span className="font-bold text-white block mb-3 text-2xl group-hover:scale-110 transition-transform duration-300">Studios</span>
                      <span className="text-[#B5B5B5] text-lg leading-relaxed">Creatividad, tecnología y trabajo en equipo</span>
                    </div>
                  </div>
                  <p className="text-[#B5B5B5] text-center mt-8 font-medium text-xl leading-relaxed">
                    En conjunto, GWS transforma ideas en soluciones digitales sólidas, escalables y modernas. 
                    <span className="inline-flex items-center gap-2 ml-2">
                      <svg className="w-8 h-8 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <svg className="w-8 h-8 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="flex items-center justify-center gap-x-6 mb-8 scroll-animate">
                <a
                  href="/servicios"
                  className="rounded-md bg-[#2A8CFF] px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1BC6D9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A8CFF] transition-all duration-200"
                >
                  Ver servicios
                </a>
                <a href="/soporte" className="text-base font-semibold text-[#1BC6D9] hover:text-[#2A8CFF] transition-all duration-200">
                  Soporte técnico <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sección de misión, visión y valores rediseñada */}
          <section className="w-full mt-8 mb-8 px-4 scroll-animate">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2A8CFF] mb-12 title-glow">Nuestra Esencia</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Misión */}
                <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group scroll-animate">
                  <div className="flex justify-center mb-6">
                    <svg className="w-20 h-20 text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2A8CFF] mb-4 text-center">Misión</h3>
                  <p className="text-[#B5B5B5] text-base text-center leading-relaxed">Soluciones digitales innovadoras y confiables en web, apps, automatización y soporte, ayudando a crecer en un mundo conectado.</p>
                </div>

                {/* Visión */}
                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate">
                  <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12 text-[#1BC6D9] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1BC6D9] mb-4 text-center">Visión</h3>
                  <p className="text-[#B5B5B5] text-base text-center leading-relaxed">Ser referente tecnológico en Latinoamérica y el mundo, reconocido por innovación, calidad y confianza en cada proyecto.</p>
                </div>

                {/* Valores */}
                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate">
                  <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#8B5CF6] mb-4 text-center">Valores</h3>
                  <div className="text-[#B5B5B5] text-base text-center space-y-2">
                    <div><span className="font-semibold text-[#8B5CF6]">Innovación</span></div>
                    <div><span className="font-semibold text-[#8B5CF6]">Calidad</span></div>
                    <div><span className="font-semibold text-[#8B5CF6]">Compromiso</span></div>
                    <div><span className="font-semibold text-[#8B5CF6]">Confianza</span></div>
                    <div><span className="font-semibold text-[#8B5CF6]">Eficiencia</span></div>
                  </div>
                </div>
              </div>

              {/* Descripción corporativa rediseñada */}
              <div className="bg-gradient-to-r from-[#374151]/10 via-[#4B5563]/5 to-[#6B7280]/10 p-8 rounded-2xl border border-[#6B7280]/20 backdrop-blur-sm scroll-animate">
                <p className="text-[#B5B5B5] text-xl text-center leading-relaxed">Con GWS, cada idea se convierte en una ola de innovación que impulsa el éxito digital. 
                  <span className="inline-flex items-center gap-2 ml-2">
                    <svg className="w-8 h-8 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <svg className="w-8 h-8 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </section>
          {/* Sección de servicios rediseñada */}
          <section className="w-full mt-20 mb-10 px-4 scroll-animate">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2A8CFF] mb-12 title-glow">Nuestros Servicios</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2A8CFF] mb-4 text-center">Páginas Web & E-commerce</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Desarrollo de sitios web modernos, tiendas online y presencia digital profesional.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#1BC6D9] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1BC6D9] mb-4 text-center">Apps Móviles</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Aplicaciones móviles a medida para Android y iOS, funcionales y atractivas.</p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      <circle cx="12" cy="8" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5CF6] mb-4 text-center">Chatbots & Automatización</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Automatiza tu atención al cliente y procesos con bots inteligentes.</p>
                </div>

                <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2A8CFF] mb-4 text-center">Email Marketing</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Campañas de emails masivos y gestión de dominios para tu marca.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#1BC6D9] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1BC6D9] mb-4 text-center">Mantenimiento & Reparación</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Mantenimiento preventivo, correctivo y optimización de equipos y servidores.</p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5CF6] mb-4 text-center">Soporte & Actualización</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Soporte remoto/en sitio, actualización de hardware y software.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Carrusel de empresas que confían en nosotros */}
          <section className="w-full mt-20 mb-16 px-4 scroll-animate">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2A8CFF] mb-12 title-glow">
                Empresas que Confían en Nosotros
              </h2>
              
              <div className="relative overflow-hidden">
                <div className="flex animate-carousel space-x-16 items-center">
                  {/* Primera serie */}
                  <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGONAULA.png"
                      alt="Logo Naula"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGOODR.png"
                      alt="Logo ODR"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#8B5CF6] text-3xl font-bold opacity-50 group-hover:opacity-100 transition-all duration-300">
                      Tu Empresa
                    </div>
                  </div>

                  {/* Segunda serie idéntica */}
                  <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGONAULA.png"
                      alt="Logo Naula"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGOODR.png"
                      alt="Logo ODR"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#8B5CF6] text-3xl font-bold opacity-50 group-hover:opacity-100 transition-all duration-300">
                      Tu Empresa
                    </div>
                  </div>

                  {/* Tercera serie idéntica */}
                  <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGONAULA.png"
                      alt="Logo Naula"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/LOGOODR.png"
                      alt="Logo ODR"
                      className="h-16 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group min-w-[200px] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#8B5CF6] text-3xl font-bold opacity-50 group-hover:opacity-100 transition-all duration-300">
                      Tu Empresa
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-[#B5B5B5] text-lg leading-relaxed max-w-3xl mx-auto">
                  Nos enorgullece trabajar con empresas visionarias que confían en nuestras soluciones digitales para alcanzar sus objetivos.
                </p>
                <div className="mt-6">
                  <a
                    href="/servicios"
                    className="inline-block bg-[#2A8CFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1BC6D9] transition-all duration-300 shadow-lg"
                  >
                    Únete a Ellos
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Carrusel de Tecnologías */}
          <section className="w-full mt-12 mb-8 px-4 scroll-animate">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2A8CFF] mb-8 title-glow">
                Stack Tecnológico
              </h2>
              
              <div className="relative">
                {/* Botón Izquierda */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Botón Derecha */}
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Contenedor del carrusel */}
                <div className="overflow-hidden mx-16">
                  <div 
                    id="tech-carousel-content"
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: 'translateX(0%)' }}
                  >
                    {/* React */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#61DAFB]/10 via-[#282C34]/5 to-[#61DAFB]/20 p-6 rounded-2xl border border-[#61DAFB]/30 backdrop-blur-sm hover:border-[#61DAFB]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 text-[#61DAFB]" fill="currentColor">
                            <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                            <g stroke="currentColor" strokeWidth="1" fill="none">
                              <ellipse rx="11" ry="4.2"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#61DAFB] mb-2">React & React Native</h3>
                        <p className="text-[#B5B5B5] text-sm">Interfaces web y aplicaciones móviles nativas</p>
                      </div>
                    </div>

                    {/* TypeScript/JSX */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#3178C6]/10 via-[#007ACC]/5 to-[#3178C6]/20 p-6 rounded-2xl border border-[#3178C6]/30 backdrop-blur-sm hover:border-[#3178C6]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#3178C6]" fill="currentColor">
                            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#3178C6] mb-2">TypeScript</h3>
                        <p className="text-[#B5B5B5] text-sm">Código robusto y escalable con tipado estático</p>
                      </div>
                    </div>

                    {/* CSS */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#1572B6]/10 via-[#264de4]/5 to-[#1572B6]/20 p-8 rounded-2xl border border-[#1572B6]/30 backdrop-blur-sm hover:border-[#1572B6]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#1572B6]" fill="currentColor">
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#1572B6] mb-2">CSS3</h3>
                        <p className="text-[#B5B5B5] text-sm">Estilos modernos y animaciones avanzadas</p>
                      </div>
                    </div>

                    {/* HTML */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#E34F26]/10 via-[#f06529]/5 to-[#E34F26]/20 p-8 rounded-2xl border border-[#E34F26]/30 backdrop-blur-sm hover:border-[#E34F26]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#E34F26]" fill="currentColor">
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#E34F26] mb-2">HTML5</h3>
                        <p className="text-[#B5B5B5] text-sm">Estructura semántica y accesible</p>
                      </div>
                    </div>

                    {/* Django */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#092E20]/10 via-[#0c4b33]/5 to-[#092E20]/20 p-8 rounded-2xl border border-[#092E20]/30 backdrop-blur-sm hover:border-[#0c4b33]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#0c4b33]" fill="currentColor">
                            <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.289-2.166-7.289-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.708.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#0c4b33] mb-2">Django</h3>
                        <p className="text-[#B5B5B5] text-sm">Framework robusto para backend Python</p>
                      </div>
                    </div>

                    {/* Python */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#3776AB]/10 via-[#FFD43B]/5 to-[#3776AB]/20 p-8 rounded-2xl border border-[#3776AB]/30 backdrop-blur-sm hover:border-[#3776AB]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#3776AB]" fill="currentColor">
                            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#3776AB] mb-2">Python</h3>
                        <p className="text-[#B5B5B5] text-sm">Desarrollo backend y automatización</p>
                      </div>
                    </div>

                    {/* PHP */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#777BB4]/10 via-[#8892BF]/5 to-[#777BB4]/20 p-8 rounded-2xl border border-[#777BB4]/30 backdrop-blur-sm hover:border-[#777BB4]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <div className="text-[#777BB4] text-4xl font-bold italic">
                            PHP
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#777BB4] mb-2">PHP</h3>
                        <p className="text-[#B5B5B5] text-sm">Desarrollo web del lado del servidor</p>
                      </div>
                    </div>

                    {/* JSX */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#F7DF1E]/10 via-[#FFEB3B]/5 to-[#F7DF1E]/20 p-8 rounded-2xl border border-[#F7DF1E]/30 backdrop-blur-sm hover:border-[#F7DF1E]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 630 630" className="w-16 h-16">
                            <rect width="630" height="630" fill="#f7df1e"/>
                            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#F7DF1E] mb-2">JSX</h3>
                        <p className="text-[#B5B5B5] text-sm">Sintaxis para React y componentes</p>
                      </div>
                    </div>

                    {/* Node.js */}
                    <div className="min-w-[280px] mx-4 bg-gradient-to-br from-[#339933]/10 via-[#68A063]/5 to-[#339933]/20 p-8 rounded-2xl border border-[#339933]/30 backdrop-blur-sm hover:border-[#339933]/50 transition-all duration-300 group">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-16 h-16 text-[#339933]" fill="currentColor">
                            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.274-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#339933] mb-2">Node.js</h3>
                        <p className="text-[#B5B5B5] text-sm">JavaScript runtime para backend</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: maxSlides }, (_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                        index === currentTechSlide ? 'bg-[#2A8CFF]' : 'bg-[#B5B5B5]/30'
                      }`}
                      onClick={() => {
                        setCurrentTechSlide(index);
                        updateTechCarousel(index);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <style jsx>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
            }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .delay-500 { animation-delay: 0.5s; }
          `}</style>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75 animate-float-bg-2"
          />
        </div>
      </div>
    </div>
  );
}
