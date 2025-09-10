"use client";

import { CodeBracketIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Diseño Responsivo',
    description:
      'Páginas web que se adaptan perfectamente a cualquier dispositivo: móviles, tablets y computadoras de escritorio.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Código Optimizado',
    description: 'Desarrollo con las mejores prácticas, código limpio y optimizado para velocidad y SEO.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Lanzamiento Rápido',
    description: 'Desde la idea hasta el lanzamiento, garantizamos tiempos de entrega rápidos sin comprometer la calidad.',
    icon: RocketLaunchIcon,
  },
]

export default function PWeb() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] py-24 sm:py-32 relative">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2A8CFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1BC6D9]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 animate-fadeInLeft">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#00D2FF] animate-fadeInUp delay-200 tracking-wide uppercase">
                Desarrollo Web Profesional
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl animate-fadeInUp delay-400 title-glow-blue">
                Páginas Web que Impulsan tu Negocio
              </p>
              <p className="mt-6 text-lg/8 text-[#B5B5B5] animate-fadeInUp delay-600 leading-relaxed">
                Creamos páginas web modernas, rápidas y optimizadas que convierten visitantes en clientes. 
                Diseño profesional con tecnologías de vanguardia.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#B5B5B5] lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className={`relative pl-9 animate-fadeInLeft delay-${800 + index * 200} hover:transform hover:translate-x-2 transition-all duration-300`}>
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#00D2FF] hover:text-[#2A8CFF] transition-colors duration-300 drop-shadow-lg" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative animate-fadeInRight delay-300">
            <div className="relative group">
              <img
                alt="Vista previa de página web moderna"
                src="/G.png"
                width={2432}
                height={1442}
                className="w-full max-w-none rounded-xl shadow-2xl ring-1 ring-[#00D2FF]/20 sm:w-[57rem] md:-ml-4 lg:-ml-0 bg-gradient-to-br from-[#2A8CFF]/10 to-[#1BC6D9]/10 p-4 hover:shadow-[#00D2FF]/25 hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#00D2FF]/10 via-transparent to-[#3A7BD5]/10 group-hover:from-[#00D2FF]/20 group-hover:to-[#3A7BD5]/20 transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2A8CFF] via-[#1BC6D9] to-[#8B5CF6] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Proceso de Desarrollo */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl title-glow-blue mb-4">
            Nuestro Proceso de Desarrollo
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="mt-6 text-lg leading-8 text-[#B5B5B5]">
            Un proceso estructurado que garantiza resultados excepcionales
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#2A8CFF]/10 to-[#1BC6D9]/10 rounded-xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-500 group animate-fadeInUp delay-400 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2A8CFF]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2A8CFF]/20 mb-4 group-hover:bg-[#2A8CFF]/30 transition-all duration-300 relative">
              <span className="text-xl font-bold text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300">1</span>
              <div className="absolute inset-0 rounded-lg bg-[#2A8CFF]/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2A8CFF] transition-colors duration-300">Análisis</h3>
            <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Estudiamos tus necesidades, objetivos y audiencia objetivo</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#1BC6D9]/10 to-[#8B5CF6]/10 rounded-xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-500 group animate-fadeInUp delay-600 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1BC6D9]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1BC6D9]/20 mb-4 group-hover:bg-[#1BC6D9]/30 transition-all duration-300 relative">
              <span className="text-xl font-bold text-[#1BC6D9] group-hover:scale-110 transition-transform duration-300">2</span>
              <div className="absolute inset-0 rounded-lg bg-[#1BC6D9]/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#1BC6D9] transition-colors duration-300">Diseño</h3>
            <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Creamos wireframes y diseños únicos que reflejen tu marca</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#8B5CF6]/10 to-[#2A8CFF]/10 rounded-xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-500 group animate-fadeInUp delay-800 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8B5CF6]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#8B5CF6]/20 mb-4 group-hover:bg-[#8B5CF6]/30 transition-all duration-300 relative">
              <span className="text-xl font-bold text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300">3</span>
              <div className="absolute inset-0 rounded-lg bg-[#8B5CF6]/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300">Desarrollo</h3>
            <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Programamos con tecnologías modernas y mejores prácticas</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#00D2FF]/10 to-[#2A8CFF]/10 rounded-xl border border-[#00D2FF]/20 backdrop-blur-sm hover:border-[#00D2FF]/40 transition-all duration-500 group animate-fadeInUp delay-1000 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00D2FF]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00D2FF]/20 mb-4 group-hover:bg-[#00D2FF]/30 transition-all duration-300 relative">
              <span className="text-xl font-bold text-[#00D2FF] group-hover:scale-110 transition-transform duration-300">4</span>
              <div className="absolute inset-0 rounded-lg bg-[#00D2FF]/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D2FF] transition-colors duration-300">Lanzamiento</h3>
            <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Implementamos, probamos y ponemos tu sitio en línea</p>
          </div>
        </div>
      </div>

      {/* Sección de Tecnologías */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl title-glow-cyan mb-4">
            Tecnologías que Utilizamos
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1BC6D9] to-[#8B5CF6] mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="mt-6 text-lg leading-8 text-[#B5B5B5]">
            Trabajamos con las tecnologías más avanzadas del mercado
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#2A8CFF]/5 to-[#1BC6D9]/5 rounded-xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-500 group animate-fadeInUp delay-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A8CFF]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#2A8CFF] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">Frontend</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">React, Next.js, Vue.js, TypeScript</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#1BC6D9]/5 to-[#8B5CF6]/5 rounded-xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-500 group animate-fadeInUp delay-400 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1BC6D9]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#1BC6D9] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">Backend</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Node.js, Python, PHP, Laravel</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#8B5CF6]/5 to-[#00D2FF]/5 rounded-xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-500 group animate-fadeInUp delay-500 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8B5CF6]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#8B5CF6] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">Base de Datos</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">MySQL, PostgreSQL, MongoDB</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#00D2FF]/5 to-[#2A8CFF]/5 rounded-xl border border-[#00D2FF]/20 backdrop-blur-sm hover:border-[#00D2FF]/40 transition-all duration-500 group animate-fadeInUp delay-600 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D2FF]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#00D2FF] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">Cloud</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">AWS, Google Cloud, Vercel</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#2A8CFF]/5 to-[#1BC6D9]/5 rounded-xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-500 group animate-fadeInUp delay-700 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2A8CFF]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#2A8CFF] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">CMS</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">WordPress, Strapi, Sanity</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#1BC6D9]/5 to-[#8B5CF6]/5 rounded-xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-500 group animate-fadeInUp delay-800 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1BC6D9]/10">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#1BC6D9] mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-lg">E-commerce</h3>
              <p className="text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Shopify, WooCommerce, Stripe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Tipos de Páginas Web */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl title-glow-purple mb-4">
            Tipos de Páginas Web que Desarrollamos
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8B5CF6] to-[#00D2FF] mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="mt-6 text-lg leading-8 text-[#B5B5B5]">
            Soluciones web personalizadas para cada tipo de negocio
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="p-8 bg-gradient-to-br from-[#2A8CFF]/10 to-[#1BC6D9]/10 rounded-xl border border-[#2A8CFF]/20 backdrop-blur-sm hover:border-[#2A8CFF]/40 transition-all duration-500 group animate-fadeInUp delay-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2A8CFF]/20">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#2A8CFF]/20 rounded-lg mr-3 group-hover:bg-[#2A8CFF]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2A8CFF] group-hover:text-white transition-colors duration-300 drop-shadow-lg">Páginas Corporativas</h3>
            </div>
            <p className="text-[#B5B5B5] mb-4 group-hover:text-white transition-colors duration-300">Sitios web profesionales que proyectan confianza y credibilidad para tu empresa.</p>
            <ul className="space-y-2 text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">
              <li className="flex items-center"><span className="text-[#2A8CFF] mr-2">•</span> Diseño profesional y elegante</li>
              <li className="flex items-center"><span className="text-[#2A8CFF] mr-2">•</span> Secciones de servicios y equipo</li>
              <li className="flex items-center"><span className="text-[#2A8CFF] mr-2">•</span> Formularios de contacto</li>
              <li className="flex items-center"><span className="text-[#2A8CFF] mr-2">•</span> Integración con redes sociales</li>
            </ul>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-[#1BC6D9]/10 to-[#8B5CF6]/10 rounded-xl border border-[#1BC6D9]/20 backdrop-blur-sm hover:border-[#1BC6D9]/40 transition-all duration-500 group animate-fadeInUp delay-400 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1BC6D9]/20">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#1BC6D9]/20 rounded-lg mr-3 group-hover:bg-[#1BC6D9]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#1BC6D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1BC6D9] group-hover:text-white transition-colors duration-300 drop-shadow-lg">Tiendas Online</h3>
            </div>
            <p className="text-[#B5B5B5] mb-4 group-hover:text-white transition-colors duration-300">E-commerce completos con sistemas de pago seguros y gestión de inventario.</p>
            <ul className="space-y-2 text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">
              <li className="flex items-center"><span className="text-[#1BC6D9] mr-2">•</span> Catálogo de productos</li>
              <li className="flex items-center"><span className="text-[#1BC6D9] mr-2">•</span> Carrito de compras</li>
              <li className="flex items-center"><span className="text-[#1BC6D9] mr-2">•</span> Pasarelas de pago</li>
              <li className="flex items-center"><span className="text-[#1BC6D9] mr-2">•</span> Panel de administración</li>
            </ul>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-[#8B5CF6]/10 to-[#00D2FF]/10 rounded-xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-all duration-500 group animate-fadeInUp delay-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8B5CF6]/20">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#8B5CF6]/20 rounded-lg mr-3 group-hover:bg-[#8B5CF6]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B5CF6] group-hover:text-white transition-colors duration-300 drop-shadow-lg">Portafolios</h3>
            </div>
            <p className="text-[#B5B5B5] mb-4 group-hover:text-white transition-colors duration-300">Sitios web creativos para mostrar tu trabajo y atraer nuevos clientes.</p>
            <ul className="space-y-2 text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">
              <li className="flex items-center"><span className="text-[#8B5CF6] mr-2">•</span> Galerías de trabajos</li>
              <li className="flex items-center"><span className="text-[#8B5CF6] mr-2">•</span> Biografía profesional</li>
              <li className="flex items-center"><span className="text-[#8B5CF6] mr-2">•</span> Testimonios de clientes</li>
              <li className="flex items-center"><span className="text-[#8B5CF6] mr-2">•</span> Blog integrado</li>
            </ul>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-[#00D2FF]/10 to-[#2A8CFF]/10 rounded-xl border border-[#00D2FF]/20 backdrop-blur-sm hover:border-[#00D2FF]/40 transition-all duration-500 group animate-fadeInUp delay-600 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00D2FF]/20">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-[#00D2FF]/20 rounded-lg mr-3 group-hover:bg-[#00D2FF]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#00D2FF] group-hover:text-white transition-colors duration-300 drop-shadow-lg">Landing Pages</h3>
            </div>
            <p className="text-[#B5B5B5] mb-4 group-hover:text-white transition-colors duration-300">Páginas optimizadas para conversión y campañas de marketing digital.</p>
            <ul className="space-y-2 text-sm text-[#B5B5B5] group-hover:text-white transition-colors duration-300">
              <li className="flex items-center"><span className="text-[#00D2FF] mr-2">•</span> Diseño enfocado en conversión</li>
              <li className="flex items-center"><span className="text-[#00D2FF] mr-2">•</span> Call-to-actions efectivos</li>
              <li className="flex items-center"><span className="text-[#00D2FF] mr-2">•</span> Integración con analytics</li>
              <li className="flex items-center"><span className="text-[#00D2FF] mr-2">•</span> Optimización SEO</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl title-glow-blue mb-4">
            ¿Por Qué Elegir Nuestros Servicios?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#2A8CFF] to-[#00D2FF] mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="mt-6 text-lg leading-8 text-[#B5B5B5]">
            Beneficios que hacen la diferencia para tu negocio
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="text-center p-6 animate-fadeInUp delay-300 group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className="p-4 bg-[#2A8CFF]/20 rounded-full backdrop-blur-sm border border-[#2A8CFF]/30 group-hover:bg-[#2A8CFF]/30 group-hover:border-[#2A8CFF]/50 transition-all duration-300 relative">
                <svg className="w-8 h-8 text-[#2A8CFF] drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-[#2A8CFF]/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2A8CFF] transition-colors duration-300">Velocidad de Carga</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Sitios web optimizados que cargan en menos de 3 segundos</p>
          </div>
          
          <div className="text-center p-6 animate-fadeInUp delay-400 group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className="p-4 bg-[#1BC6D9]/20 rounded-full backdrop-blur-sm border border-[#1BC6D9]/30 group-hover:bg-[#1BC6D9]/30 group-hover:border-[#1BC6D9]/50 transition-all duration-300 relative">
                <svg className="w-8 h-8 text-[#1BC6D9] drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-[#1BC6D9]/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#1BC6D9] transition-colors duration-300">Seguridad</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Certificados SSL, protección contra malware y copias de seguridad</p>
          </div>
          
          <div className="text-center p-6 animate-fadeInUp delay-500 group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className="p-4 bg-[#8B5CF6]/20 rounded-full backdrop-blur-sm border border-[#8B5CF6]/30 group-hover:bg-[#8B5CF6]/30 group-hover:border-[#8B5CF6]/50 transition-all duration-300 relative">
                <svg className="w-8 h-8 text-[#8B5CF6] drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300">SEO Optimizado</h3>
            <p className="text-[#B5B5B5] group-hover:text-white transition-colors duration-300">Posicionamiento en Google desde el primer día</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 relative">
        <div className="mx-auto max-w-2xl text-center animate-fadeInUp delay-200">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl title-glow-cyan mb-4">
            ¿Listo para Crear tu Página Web?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00D2FF] to-[#8B5CF6] mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="mt-6 text-lg leading-8 text-[#B5B5B5] animate-fadeInUp delay-400">
            Cotiza tu proyecto sin compromiso y recibe una propuesta personalizada
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeInUp delay-600">
            <a
              href="/soporte"
              className="group relative rounded-md bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-[#1BC6D9] hover:to-[#8B5CF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A8CFF] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#2A8CFF]/25"
            >
              <span className="relative z-10">Solicitar Cotización</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </a>
            <a href="/servicios" className="group text-base font-semibold leading-6 text-[#1BC6D9] hover:text-[#2A8CFF] transition-all duration-200 relative">
              <span className="relative z-10">Ver más servicios</span>
              <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1BC6D9] to-[#2A8CFF] group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
        
        {/* Efectos de partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#2A8CFF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-[#1BC6D9]/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-[#8B5CF6]/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#00D2FF]/40 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  )
}