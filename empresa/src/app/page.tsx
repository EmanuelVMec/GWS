"use client";

import React, { useEffect } from "react";
import Header from "./Header";

export default function Home() {
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
                  tu empresa con tecnología, innovación y soporte de calidad
                </h2>
                <p className="text-xl text-[#B5B5B5] md:text-2xl mb-10 leading-relaxed scroll-animate">
                  GWS - Grain Wave Studios es donde las ideas se transforman en soluciones digitales innovadoras
                </p>
                
                {/* Cuadros de servicios principales */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 scroll-animate">
                  <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-6 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group">
                    <div className="text-[#2A8CFF] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                    <h3 className="text-lg font-bold text-[#2A8CFF] mb-2">Desarrollo Web</h3>
                    <p className="text-[#B5B5B5] text-sm">Aplicaciones web modernas, escalables y optimizadas para el rendimiento.</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-6 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                    <div className="text-[#1BC6D9] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                    <h3 className="text-lg font-bold text-[#1BC6D9] mb-2">Apps Móviles</h3>
                    <p className="text-[#B5B5B5] text-sm">Experiencias móviles nativas e híbridas que conectan con tus usuarios.</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-6 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                    <div className="text-[#8B5CF6] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h3 className="text-lg font-bold text-[#8B5CF6] mb-2">Consultoría Digital</h3>
                    <p className="text-[#B5B5B5] text-sm">Estrategias tecnológicas que impulsan el crecimiento de tu negocio.</p>
                  </div>
                </div>
                
                {/* Cuadro de significado mejorado */}
                <div className="bg-gradient-to-r from-[#60a5fa]/10 to-[#1BC6D9]/10 rounded-3xl p-10 border border-[#60a5fa]/20 backdrop-blur-sm scroll-animate">
                  <h3 className="text-3xl font-bold text-[#2A8CFF] mb-8 flex items-center gap-3 justify-center">
                    <span className="text-4xl">📌</span> Significado del nombre
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
                    En conjunto, GWS transforma ideas en soluciones digitales sólidas, escalables y modernas. <span className="text-4xl">🌊💻📱</span>
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
                  <div className="text-[#2A8CFF] text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-2xl font-bold text-[#2A8CFF] mb-4 text-center">Misión</h3>
                  <p className="text-[#B5B5B5] text-base text-center leading-relaxed">Soluciones digitales innovadoras y confiables en web, apps, automatización y soporte, ayudando a crecer en un mundo conectado.</p>
                </div>

                {/* Visión */}
                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate">
                  <div className="text-[#1BC6D9] text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🌍</div>
                  <h3 className="text-2xl font-bold text-[#1BC6D9] mb-4 text-center">Visión</h3>
                  <p className="text-[#B5B5B5] text-base text-center leading-relaxed">Ser referente tecnológico en Latinoamérica y el mundo, reconocido por innovación, calidad y confianza en cada proyecto.</p>
                </div>

                {/* Valores */}
                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate">
                  <div className="text-[#8B5CF6] text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">⭐</div>
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
                <h3 className="text-3xl font-bold text-[#2A8CFF] mb-6 flex items-center gap-3 justify-center">
                  <span className="text-4xl">📌</span> Descripción corporativa
                </h3>
                <p className="text-[#B5B5B5] text-xl mb-6 text-center leading-relaxed">GWS – Grain Wave Studios es una empresa de tecnología que ofrece:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#2A8CFF]/20">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <span className="font-semibold text-[#2A8CFF] block">Páginas Web & E-commerce:</span>
                        <span className="text-[#B5B5B5] text-sm">sitios modernos y tiendas online.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#1BC6D9]/20">
                      <span className="text-2xl">📱</span>
                      <div>
                        <span className="font-semibold text-[#1BC6D9] block">Apps Móviles:</span>
                        <span className="text-[#B5B5B5] text-sm">soluciones para Android y iOS.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#8B5CF6]/20">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <span className="font-semibold text-[#8B5CF6] block">Chatbots & Automatización:</span>
                        <span className="text-[#B5B5B5] text-sm">atención al cliente inteligente y procesos optimizados.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#2A8CFF]/20">
                      <span className="text-2xl">📧</span>
                      <div>
                        <span className="font-semibold text-[#2A8CFF] block">Email Marketing:</span>
                        <span className="text-[#B5B5B5] text-sm">campañas efectivas y gestión profesional de dominios.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#1BC6D9]/20">
                      <span className="text-2xl">🛠️</span>
                      <div>
                        <span className="font-semibold text-[#1BC6D9] block">Mantenimiento & Reparación:</span>
                        <span className="text-[#B5B5B5] text-sm">cuidado preventivo y correctivo de equipos y servidores.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-[#8B5CF6]/20">
                      <span className="text-2xl">💻</span>
                      <div>
                        <span className="font-semibold text-[#8B5CF6] block">Soporte & Actualización:</span>
                        <span className="text-[#B5B5B5] text-sm">asistencia técnica, actualizaciones de software y hardware.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#B5B5B5] text-xl text-center leading-relaxed">Con GWS, cada idea se convierte en una ola de innovación que impulsa el éxito digital. <span className="text-4xl">🌊💻📱</span></p>
              </div>
            </div>
          </section>
          {/* Sección de servicios rediseñada */}
          <section className="w-full mt-20 mb-10 px-4 scroll-animate">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2A8CFF] mb-12 title-glow">Nuestros Servicios</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#2A8CFF] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🌐</div>
                  <h3 className="text-xl font-bold text-[#2A8CFF] mb-4 text-center">Páginas Web & E-commerce</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Desarrollo de sitios web modernos, tiendas online y presencia digital profesional.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#1BC6D9] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">📱</div>
                  <h3 className="text-xl font-bold text-[#1BC6D9] mb-4 text-center">Apps Móviles</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Aplicaciones móviles a medida para Android y iOS, funcionales y atractivas.</p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#8B5CF6] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🤖</div>
                  <h3 className="text-xl font-bold text-[#8B5CF6] mb-4 text-center">Chatbots & Automatización</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Automatiza tu atención al cliente y procesos con bots inteligentes.</p>
                </div>

                <div className="bg-gradient-to-br from-[#2A8CFF]/10 via-[#3B82F6]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#2A8CFF] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">📧</div>
                  <h3 className="text-xl font-bold text-[#2A8CFF] mb-4 text-center">Email Marketing</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Campañas de emails masivos y gestión de dominios para tu marca.</p>
                </div>

                <div className="bg-gradient-to-br from-[#1BC6D9]/10 via-[#06B6D4]/5 to-[#2A8CFF]/10 p-8 rounded-2xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#1BC6D9] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🛠️</div>
                  <h3 className="text-xl font-bold text-[#1BC6D9] mb-4 text-center">Mantenimiento & Reparación</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Mantenimiento preventivo, correctivo y optimización de equipos y servidores.</p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6]/10 via-[#A855F7]/5 to-[#1BC6D9]/10 p-8 rounded-2xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-300 group scroll-animate max-w-sm w-full">
                  <div className="text-[#8B5CF6] text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h3 className="text-xl font-bold text-[#8B5CF6] mb-4 text-center">Soporte & Actualización</h3>
                  <p className="text-[#B5B5B5] text-center text-base leading-relaxed">Soporte remoto/en sitio, actualización de hardware y software.</p>
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
