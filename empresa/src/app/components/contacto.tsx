'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Usar FormData directamente (sin JSON)
      const response = await fetch('https://script.google.com/macros/s/AKfycbxDUa-e87AJkIzRCT_aPMGFnH4XRSNyDEFyAvLS5R8fg2w7EueW-CAH8qZ9aSkVLEUH/exec', {
        method: 'POST',
        body: formData, // Enviar FormData directamente
      });

      // Si llegamos aquí sin error, asumimos éxito
      setSubmitStatus('success');
      
      // Resetear formulario de forma segura
      const form = e.currentTarget;
      if (form && typeof form.reset === 'function') {
        form.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
      {/* Fondo animado mejorado - ahora también arriba */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-float-bg-1 absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 blur-3xl"></div>
        <div className="animate-float-bg-2 absolute -top-32 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-20 blur-3xl" style={{animationDelay: '1s'}}></div>
        <div className="animate-float-bg-1 absolute top-0 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-15 blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="animate-float-bg-2 absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-20 blur-3xl" style={{animationDelay: '3s'}}></div>
        <div className="animate-float-bg-1 absolute top-1/3 left-1/6 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10 blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Títulos mejorados con efectos de diseño */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-center text-base/7 font-semibold text-indigo-400 animate-fadeInUp tracking-widest uppercase">
              Contáctanos
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
          </div>
          
          <div className="relative mt-8">
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fadeInUp bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{animationDelay: '0.2s'}}>
              Estamos aquí para ayudarte
            </p>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* Tarjeta 1 - Mobile Friendly */}
          <div className="relative lg:row-span-2 animate-fadeInLeft" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Soporte 24/7</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Atención técnica disponible las 24 horas del día, los 7 días de la semana para resolver cualquier inconveniente.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    alt="Soporte 24/7"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>

          {/* Tarjeta 2 - Performance */}
          <div className="relative max-lg:row-start-1 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Respuesta Rápida</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Garantizamos respuesta en menos de 2 horas para consultas urgentes y proyectos críticos.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="Respuesta Rápida"
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full max-lg:max-w-xs hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>

          {/* Tarjeta 3 - Security */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Consulta Segura</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Todas tus consultas son tratadas con confidencialidad y bajo protocolos de seguridad avanzados.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt="Consulta Segura"
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>

          {/* Tarjeta 4 - APIs */}
          <div className="relative lg:row-span-2 animate-fadeInRight" style={{animationDelay: '1s'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Múltiples Canales</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Contáctanos por email, teléfono, WhatsApp o a través de nuestro formulario web según tu preferencia.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        ContactForm.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">WhatsApp.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm">Email: info@gws.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-gray-300 text-sm">Tel: +1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-gray-300 text-sm">WhatsApp: +1 (555) 987-6543</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>

      {/* Formulario de Cotización ROBUSTO Y LLAMATIVO */}
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8 relative">
        {/* Efectos de fondo extra llamativos */}
        <div className="absolute inset-0 -z-10">
          <div className="animate-float-bg-1 absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10 blur-3xl" style={{animationDelay: '5s'}}></div>
          <div className="animate-float-bg-2 absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-15 blur-3xl" style={{animationDelay: '6s'}}></div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#2A8CFF] to-[#1BC6D9] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>

        {/* Header del formulario con imágenes llamativas */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          
          
          {/* Título mejorado con efectos de diseño */}
          <div className="relative mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fadeInUp bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent relative z-10">
              ¡Solicita tu Cotización GRATIS!
            </h2>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full"></div>
          </div>

          <p className="mt-4 text-xl text-gray-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            🎯 <span className="text-yellow-400 font-semibold">¡Respuesta en menos de 24 horas!</span> 
            <br />
            💰 Presupuesto personalizado sin compromiso 
            <br />
            🚀 Impulsa tu negocio al siguiente nivel
          </p>

          {/* Estadísticas llamativas sin imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
              <div className="w-12 h-12 mx-auto rounded-lg mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-300">Proyectos Exitosos</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="w-12 h-12 mx-auto rounded-lg mb-3 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-gray-300">Clientes Satisfechos</div>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <div className="w-12 h-12 mx-auto rounded-lg mb-3 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-3xl font-bold text-white">2h</div>
              <div className="text-gray-300">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>

        {/* Formulario mejorado */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <form onSubmit={handleSubmit} method="POST" className="space-y-8">
              {/* Información Personal */}
              <div className="border-b border-gray-700 pb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                  Información Personal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold text-white mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      className="block w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-white/10 border border-gray-600/30 focus:border-blue-500/50"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-white/10 border border-gray-600/30 focus:border-blue-500/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Contacto */}
              <div className="border-b border-gray-700 pb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  Información de Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone-number" className="block text-sm font-semibold text-white mb-2">
                      Número de teléfono *
                    </label>
                    <div className="flex rounded-xl bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500 hover:bg-white/10 transition-all duration-300 border border-gray-600/30 focus-within:border-blue-500/50">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-xl bg-gray-800/50 px-3 py-2 text-white text-sm font-medium focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 border border-gray-600/30 shadow-lg backdrop-blur-md hover:bg-gray-700/50 transition-all duration-300"
                        >
                          <option value="+1">🇺🇸 +1 (USA)</option>
                          <option value="+34">🇪🇸 +34 (España)</option>
                          <option value="+39">🇮🇹 +39 (Italia)</option>
                          <option value="+593">🇪🇨 +593 (Ecuador)</option>
                          <option value="+52">🇲🇽 +52 (México)</option>
                          <option value="+57">🇨🇴 +57 (Colombia)</option>
                          <option value="+51">🇵🇪 +51 (Perú)</option>
                          <option value="+54">🇦🇷 +54 (Argentina)</option>
                          <option value="+56">🇨🇱 +56 (Chile)</option>
                          <option value="+58">🇻🇪 +58 (Venezuela)</option>
                          <option value="+502">🇬🇹 +502 (Guatemala)</option>
                          <option value="+503">🇸🇻 +503 (El Salvador)</option>
                          <option value="+504">🇭🇳 +504 (Honduras)</option>
                          <option value="+505">🇳🇮 +505 (Nicaragua)</option>
                          <option value="+506">🇨🇷 +506 (Costa Rica)</option>
                          <option value="+507">🇵🇦 +507 (Panamá)</option>
                          <option value="+55">🇧🇷 +55 (Brasil)</option>
                          <option value="+598">🇺🇾 +598 (Uruguay)</option>
                          <option value="+595">🇵🇾 +595 (Paraguay)</option>
                          <option value="+591">🇧🇴 +591 (Bolivia)</option>
                        </select>
                        <ChevronDownIcon className="pointer-events-none col-start-1 row-start-1 mr-2 size-4 self-center justify-self-end text-gray-600" />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        placeholder="123-456-7890"
                        pattern="[0-9\-\s\(\)\+]*"
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/[^0-9\-\s\(\)]/g, '');
                        }}
                        className="block min-w-0 grow bg-transparent py-3 pr-4 pl-2 text-white placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Empresa/Organización
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="block w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-white/10 border border-gray-600/30 focus:border-blue-500/50"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>
                </div>
              </div>

              {/* Proyecto */}
              <div className="border-b border-gray-700 pb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  Detalles del Proyecto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-semibold text-white mb-2">
                      Tipo de proyecto *
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      required
                      className="block w-full rounded-xl bg-gray-800/50 px-4 py-3 text-white border border-gray-600/30 shadow-lg backdrop-blur-md focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-gray-700/50"
                    >
                      <option value="">Selecciona el tipo de proyecto</option>
                      <option value="web">Página Web Corporativa</option>
                      <option value="ecommerce">Tienda Online / E-commerce</option>
                      <option value="app-movil">Aplicación Móvil (iOS/Android)</option>
                      <option value="app-web">Aplicación Web</option>
                      <option value="chatbot">ChatBot / IA</option>
                      <option value="landing">Landing Page</option>
                      <option value="rediseño">Rediseño de sitio existente</option>
                      <option value="hosting">Hosting y Dominio</option>
                      <option value="mantenimiento">Mantenimiento y Soporte</option>
                      <option value="consultoria">Consultoría Digital</option>
                      <option value="otro">Otro (especificar en descripción)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="block w-full rounded-xl bg-gray-800/50 px-4 py-3 text-white border border-gray-600/30 shadow-lg backdrop-blur-md focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-gray-700/50"
                    >
                      <option value="">Selecciona tu presupuesto</option>
                      <option value="500-1500">$500 - $1,500 USD</option>
                      <option value="1500-3000">$1,500 - $3,000 USD</option>
                      <option value="3000-5000">$3,000 - $5,000 USD</option>
                      <option value="5000-10000">$5,000 - $10,000 USD</option>
                      <option value="10000+">Más de $10,000 USD</option>
                      <option value="consultar">Prefiero consultarlo</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
                    ¿Cuándo necesitas el proyecto?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="block w-full rounded-xl bg-gray-800/50 px-4 py-3 text-white border border-gray-600/30 shadow-lg backdrop-blur-md focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-gray-700/50"
                  >
                    <option value="">Selecciona el tiempo</option>
                    <option value="urgente">¡Es urgente! (1-2 semanas)</option>
                    <option value="1mes">En 1 mes</option>
                    <option value="2-3meses">2-3 meses</option>
                    <option value="flexible">Soy flexible con los tiempos</option>
                    <option value="planificando">Solo estoy planificando</option>
                  </select>
                </div>
              </div>

              {/* Descripción */}
              <div className="pb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full mr-3 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white text-sm">💬</span>
                  </div>
                  Cuéntanos más sobre tu proyecto
                </h3>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="block w-full rounded-xl bg-white/5 px-4 py-3 text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 transition-all duration-300 hover:bg-white/10 border border-gray-600/30 focus:border-blue-500/50"
                  placeholder="Descríbenos tu proyecto con el mayor detalle posible:
• ¿Qué objetivo quieres lograr?
• ¿Cuáles son las funcionalidades principales?
• ¿Tienes algún diseño o referencia en mente?
• ¿Hay integraciones específicas que necesites?
• Cualquier otro detalle relevante..."
                />
              </div>

              {/* Términos y Condiciones */}
              <div className="flex gap-x-4">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-blue-500 transition-colors duration-200 ease-in-out has-checked:bg-blue-500 has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                    <input
                      id="agree-to-policies"
                      name="agree-to-policies"
                      type="checkbox"
                      required
                      className="absolute inset-0 appearance-none focus:outline-hidden"
                    />
                  </div>
                </div>
                <label htmlFor="agree-to-policies" className="text-sm text-gray-300">
                  Acepto la{' '}
                  <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    política de privacidad
                  </a>
                  {' '}y{' '}
                  <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    términos de servicio
                  </a>
                  . Al enviar este formulario autorizo el tratamiento de mis datos personales.
                </label>
              </div>

              {/* Botón de envío ESPECTACULAR */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:shadow-blue-500/25 animate-pulse'
                  }`}
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        ✅ ¡Enviado correctamente!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        ❌ Error al enviar
                      </>
                    ) : (
                      <>
                        🚀 Solicitar Cotización GRATUITA
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 font-semibold">¡Gracias! Tu solicitud fue enviada correctamente.</p>
                    <p className="text-green-300 text-sm">Te contactaremos en menos de 24 horas.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 font-semibold">Error al enviar el formulario.</p>
                    <p className="text-red-300 text-sm">Por favor, inténtalo de nuevo o contáctanos directamente.</p>
                  </div>
                )}
                
                <p className="mt-4 text-sm text-gray-400">
                  ⚡ Respuesta garantizada en menos de 24 horas<br />
                  💯 Sin compromiso • 100% Confidencial
                </p>
              </div>
            </form>
          </div>

          {/* Garantías y beneficios adicionales sin imágenes */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30">
              <div className="w-12 h-12 mx-auto rounded-xl mb-4 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Garantía de Calidad</h4>
              <p className="text-gray-300 text-sm">Revisiones ilimitadas hasta tu satisfacción total</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30">
              <div className="w-12 h-12 mx-auto rounded-xl mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Soporte Técnico</h4>
              <p className="text-gray-300 text-sm">3 meses de soporte técnico gratuito incluido</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30">
              <div className="w-12 h-12 mx-auto rounded-xl mb-4 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Bonus Incluidos</h4>
              <p className="text-gray-300 text-sm">SEO básico, SSL y manual de usuario sin costo extra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}