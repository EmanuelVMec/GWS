"use client";

import React, { useState } from "react";

export default function MarketingDigital() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Pautaje Digital",
      description: "Optimizamos tus inversiones publicitarias en plataformas digitales para maximizar el ROI y alcanzar tu audiencia objetivo.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "YouTube Ads", "TikTok Ads"],
      color: "from-[#2A8CFF] to-[#1BC6D9]"
    },
    {
      id: 1,
      title: "Creación de Publicidad",
      description: "Desarrollamos campañas publicitarias creativas y efectivas que conectan con tu audiencia y generan conversiones.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Diseño Gráfico", "Video Marketing", "Copy Persuasivo", "Banners Digitales", "Stories", "Reels"],
      color: "from-[#1BC6D9] to-[#8B5CF6]"
    },
    {
      id: 2,
      title: "Gestión de Redes Sociales",
      description: "Administramos y optimizamos tus perfiles en redes sociales para construir una comunidad sólida y engagement auténtico.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      features: ["Content Planning", "Community Management", "Engagement", "Analytics", "Reporting", "Growth Strategy"],
      color: "from-[#8B5CF6] to-[#2A8CFF]"
    },
    {
      id: 3,
      title: "Creación de Redes Sociales",
      description: "Establecemos tu presencia digital desde cero, creando perfiles profesionales optimizados para cada plataforma.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      features: ["Setup Profesional", "Branding Consistente", "Bio Optimization", "Estrategia Inicial", "Content Pillars", "Launch Campaign"],
      color: "from-[#2A8CFF] to-[#8B5CF6]"
    }
  ];

  const stats = [
    { 
      number: "300%", 
      label: "Aumento promedio en engagement", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      number: "150+", 
      label: "Campañas exitosas ejecutadas", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      number: "2.5M+", 
      label: "Impresiones generadas mensualmente", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      number: "95%", 
      label: "Satisfacción de clientes", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2A8CFF]/15 to-[#1BC6D9]/15 rounded-full blur-3xl animate-float-bg-1" 
             style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/10 to-[#1BC6D9]/10 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#1BC6D9]/8 to-[#2A8CFF]/8 rounded-full blur-xl animate-pulse"
             style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>

      <div className="relative z-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-[#2A8CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
              Marketing Digital
            </span>
            <br />
            <span className="text-white">Que Convierte</span>
          </h1>
          <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed">
            Impulsamos tu presencia digital con estrategias de marketing innovadoras y basadas en datos. 
            Desde la creación hasta la gestión, construimos tu marca en el mundo digital.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros <span className="text-[#1BC6D9]">Servicios</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de marketing digital para hacer crecer tu negocio online
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeService === index
                    ? 'border-[#1BC6D9] bg-gradient-to-br from-[#1BC6D9]/10 to-[#2A8CFF]/10 transform scale-105'
                    : 'border-[#2A8CFF]/20 bg-black/40 hover:border-[#1BC6D9]/40'
                } backdrop-blur-sm`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-[#2A8CFF] mb-4 hover:scale-110 transition-transform duration-300 hover:text-[#1BC6D9]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-[#2A8CFF] mr-4">
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                </div>
                <p className="text-[#B5B5B5] mb-6 leading-relaxed">
                  {services[activeService].description}
                </p>
                <button className={`px-8 py-3 rounded-xl bg-gradient-to-r ${services[activeService].color} text-white font-semibold hover:scale-105 transition-transform duration-300`}>
                  Solicitar Cotización
                </button>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-[#1BC6D9] mb-4">Incluye:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#1BC6D9] rounded-full mr-3"></div>
                        <span className="text-[#B5B5B5] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Imágenes de Redes Sociales */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#1877F2]/20 to-[#42A5F5]/20 p-4 rounded-xl border border-[#1877F2]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1877F2] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">Facebook</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#E1306C]/20 to-[#F56040]/20 p-4 rounded-xl border border-[#E1306C]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#E1306C] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">Instagram</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#1DA1F2]/20 to-[#14171A]/20 p-4 rounded-xl border border-[#1DA1F2]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1DA1F2] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">Twitter</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0A66C2]/20 to-[#004182]/20 p-4 rounded-xl border border-[#0A66C2]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#0A66C2] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">LinkedIn</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#FF0050]/20 to-[#000000]/20 p-4 rounded-xl border border-[#FF0050]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#FF0050] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">TikTok</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#FF0000]/20 to-[#CC0000]/20 p-4 rounded-xl border border-[#FF0000]/30 hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#FF0000] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <p className="text-xs text-center text-[#B5B5B5]">YouTube</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#8B5CF6] to-[#1BC6D9] rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resultados que <span className="text-[#1BC6D9]">Hablan</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Nuestros números reflejan el compromiso con la excelencia y el éxito de nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl hover:border-[#1BC6D9]/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-[#2A8CFF] mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#1BC6D9] flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-[#B5B5B5] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro <span className="text-[#1BC6D9]">Proceso</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar el éxito de tu estrategia de marketing digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            { [
              { 
                step: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ), 
                title: "Análisis", 
                desc: "Estudiamos tu mercado, competencia y audiencia objetivo" 
              },
              { 
                step: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ), 
                title: "Estrategia", 
                desc: "Desarrollamos un plan personalizado para tus objetivos" 
              },
              { 
                step: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ), 
                title: "Ejecución", 
                desc: "Implementamos las campañas y creamos el contenido" 
              },
              { 
                step: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ), 
                title: "Optimización", 
                desc: "Monitoreamos y optimizamos constantemente los resultados" 
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-6 hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                  <div className="text-[#1BC6D9] font-bold text-center mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{process.title}</h3>
                  <p className="text-[#B5B5B5] text-sm leading-relaxed text-center">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2A8CFF]/10 to-[#1BC6D9]/10 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Hacer Crecer tu <span className="text-[#1BC6D9]">Presencia Digital</span>?
          </h2>
          <p className="text-[#B5B5B5] text-lg mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo tu transformación digital. Nuestro equipo está listo para impulsar tu marca al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
              Solicitar Consulta Gratuita
            </button>
            <button className="px-8 py-4 border-2 border-[#1BC6D9] text-[#1BC6D9] font-semibold rounded-xl hover:bg-[#1BC6D9] hover:text-black transition-all duration-300">
              Ver Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
