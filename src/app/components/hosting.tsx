"use client";

import React, { useState } from "react";

export default function Hosting() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const features = [
    {
      id: 0,
      title: "Servidores de Alto Rendimiento",
      description: "Infraestructura en la nube con SSD NVMe, múltiples cores y RAM dedicada para garantizar velocidad y estabilidad óptima.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      technologies: ["SSD NVMe", "CPU Multicore", "RAM Dedicada", "CDN Global"],
      benefits: ["99.9% Uptime garantizado", "Velocidad ultra rápida", "Escalabilidad automática"]
    },
    {
      id: 1,
      title: "Seguridad Avanzada",
      description: "Protección completa con SSL gratuito, firewall avanzado, backups automáticos y monitoreo 24/7 contra amenazas.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      technologies: ["SSL Let's Encrypt", "Firewall WAF", "DDoS Protection", "Malware Scanning"],
      benefits: ["Certificados SSL gratuitos", "Protección anti-malware", "Backups diarios automáticos"]
    },
    {
      id: 2,
      title: "Panel de Control Avanzado",
      description: "cPanel/WHM completo con gestión de dominios, emails, bases de datos y estadísticas en tiempo real.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      technologies: ["cPanel", "WHM", "Softaculous", "File Manager"],
      benefits: ["Instalación con 1 clic", "Gestión fácil e intuitiva", "Estadísticas detalladas"]
    },
    {
      id: 3,
      title: "Soporte Técnico 24/7",
      description: "Equipo especializado disponible las 24 horas con respuesta garantizada en menos de 30 minutos para incidencias críticas.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      technologies: ["Chat en Vivo", "Ticket System", "Teléfono", "Remote Support"],
      benefits: ["Respuesta < 30 minutos", "Técnicos certificados", "Soporte en español"]
    }
  ];

  const plans = [
    {
      id: 0,
      name: "Básico",
      price: "$4.99",
      period: "mes",
      description: "Perfecto para sitios web personales y pequeños proyectos",
      features: [
        "1 Sitio Web",
        "10 GB SSD Storage",
        "100 GB Transferencia",
        "5 Cuentas de Email",
        "1 Base de Datos MySQL",
        "SSL Gratuito",
        "cPanel incluido",
        "Backup semanal"
      ],
      color: "from-[#2A8CFF] to-[#1BC6D9]",
      popular: false,
      domains: "1 Dominio",
      bandwidth: "100 GB"
    },
    {
      id: 1,
      name: "Profesional",
      price: "$9.99",
      period: "mes",
      description: "Ideal para empresas y sitios web con tráfico moderado",
      features: [
        "5 Sitios Web",
        "50 GB SSD Storage",
        "500 GB Transferencia",
        "25 Cuentas de Email",
        "10 Bases de Datos MySQL",
        "SSL Gratuito",
        "cPanel + Softaculous",
        "Backup diario",
        "CDN Gratuito",
        "Soporte Prioritario"
      ],
      color: "from-[#8B5CF6] to-[#1BC6D9]",
      popular: true,
      domains: "5 Dominios",
      bandwidth: "500 GB"
    },
    {
      id: 2,
      name: "Enterprise",
      price: "$19.99",
      period: "mes",
      description: "Solución completa para sitios web con alto tráfico",
      features: [
        "Sitios Ilimitados",
        "100 GB SSD Storage",
        "Transferencia Ilimitada",
        "Cuentas Email Ilimitadas",
        "Bases de Datos Ilimitadas",
        "SSL Wildcard Gratuito",
        "cPanel + WHM",
        "Backup diario + incremental",
        "CDN Premium",
        "Soporte Dedicado",
        "IP Dedicada",
        "Staging Environment"
      ],
      color: "from-[#1BC6D9] to-[#2A8CFF]",
      popular: false,
      domains: "Ilimitados",
      bandwidth: "Ilimitado"
    }
  ];

  const technologies = [
    { 
      name: "SSD NVMe", 
      description: "Almacenamiento ultra rápido", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: "cPanel", 
      description: "Panel de control líder", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    { 
      name: "CloudFlare CDN", 
      description: "Red de distribución global", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Let's Encrypt SSL", 
      description: "Certificados SSL gratuitos", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    { 
      name: "MySQL/PostgreSQL", 
      description: "Bases de datos potentes", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    { 
      name: "Litespeed", 
      description: "Servidor web optimizado", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    { 
      name: "PHP 8.3", 
      description: "Última versión de PHP", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      name: "Node.js", 
      description: "Soporte para aplicaciones JS", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const hostingFeatures = [
    {
      title: "Instalaciones con 1 Clic",
      description: "WordPress, Joomla, Drupal, Magento y más de 400 aplicaciones listas para instalar.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      benefits: ["WordPress optimizado", "Magento para e-commerce", "Joomla para portales", "Drupal para empresas"]
    },
    {
      title: "Email Profesional",
      description: "Cuentas de correo con tu dominio, webmail avanzado, filtros anti-spam y sincronización móvil.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      benefits: ["Webmail Roundcube", "IMAP/POP3/SMTP", "Anti-spam SpamAssassin", "Sincronización móvil"]
    },
    {
      title: "Migración Gratuita",
      description: "Nuestro equipo migra tu sitio web desde tu hosting actual sin costo adicional y sin tiempo de inactividad.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      benefits: ["Migración sin downtime", "Transferencia de archivos", "Configuración de emails", "Testing completo"]
    },
    {
      title: "Dominio Gratuito",
      description: "Registro gratuito de dominio .com, .net, .org por el primer año con cualquier plan de hosting anual.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      benefits: ["Dominio .com gratis", "DNS management", "Privacidad WHOIS", "Renovación automática"]
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
              Hosting Web
            </span>
            <br />
            <span className="text-white">Ultra Rápido y Seguro</span>
          </h1>
          <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed">
            Alojamiento web profesional con servidores SSD, SSL gratuito, cPanel incluido y soporte 24/7. 
            99.9% uptime garantizado para mantener tu sitio web siempre online.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Características <span className="text-[#1BC6D9]">Premium</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Infraestructura de clase mundial para garantizar el mejor rendimiento de tu sitio web
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? 'border-[#1BC6D9] bg-gradient-to-br from-[#1BC6D9]/10 to-[#2A8CFF]/10 transform scale-105'
                    : 'border-[#2A8CFF]/20 bg-black/40 hover:border-[#1BC6D9]/40'
                } backdrop-blur-sm`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-[#2A8CFF] mb-4 hover:scale-110 transition-transform duration-300 hover:text-[#1BC6D9]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Active Feature Details */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-[#2A8CFF] mr-4">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
                </div>
                <p className="text-[#B5B5B5] mb-6 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Contratar Ahora
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1BC6D9] mb-4">Tecnologías Incluidas:</h4>
                <div className="space-y-3 mb-6">
                  {features[activeFeature].technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#1BC6D9] rounded-full mr-3"></div>
                      <span className="text-[#B5B5B5] text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-[#1BC6D9] mb-4">Beneficios:</h4>
                <div className="space-y-3">
                  {features[activeFeature].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#B5B5B5] text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo lo que <span className="text-[#1BC6D9]">Necesitas</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Servicios adicionales incluidos para que tengas todo lo necesario para tu presencia online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hostingFeatures.map((feature, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-8 hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300 group-hover:text-[#1BC6D9]">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-[#B5B5B5] mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#B5B5B5] text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologías <span className="text-[#1BC6D9]">Incluidas</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Las mejores herramientas y tecnologías preinstaladas y optimizadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-6 hover:border-[#1BC6D9]/40 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-[#2A8CFF] mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#1BC6D9] flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-[#B5B5B5] text-xs">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planes de <span className="text-[#1BC6D9]">Hosting</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Elige el plan perfecto para tu proyecto, desde sitios personales hasta aplicaciones empresariales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-black/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-[#1BC6D9] bg-gradient-to-br from-[#1BC6D9]/10 to-[#2A8CFF]/10' 
                    : 'border-[#2A8CFF]/20 hover:border-[#1BC6D9]/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-[#B5B5B5]">/{plan.period}</span>
                  </div>
                  <p className="text-[#B5B5B5] text-sm mt-2">{plan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-[#2A8CFF]/10 rounded-lg">
                    <div className="text-[#1BC6D9] font-bold">{plan.domains}</div>
                    <div className="text-[#B5B5B5] text-xs">Dominios</div>
                  </div>
                  <div className="text-center p-3 bg-[#2A8CFF]/10 rounded-lg">
                    <div className="text-[#1BC6D9] font-bold">{plan.bandwidth}</div>
                    <div className="text-[#B5B5B5] text-xs">Transferencia</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#B5B5B5] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white'
                    : 'border-2 border-[#1BC6D9] text-[#1BC6D9] hover:bg-[#1BC6D9] hover:text-black'
                }`}>
                  Contratar Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2A8CFF]/10 to-[#1BC6D9]/10 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Llevar tu <span className="text-[#1BC6D9]">Sitio Web</span> al Siguiente Nivel?
          </h2>
          <p className="text-[#B5B5B5] text-lg mb-8 max-w-2xl mx-auto">
            Obtén hosting premium con todo incluido: SSL gratuito, migración sin costo, 
            soporte 24/7 y garantía de uptime del 99.9%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
              Empezar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-[#1BC6D9] text-[#1BC6D9] font-semibold rounded-xl hover:bg-[#1BC6D9] hover:text-black transition-all duration-300">
              Hablar con Ventas
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">99.9%</div>
              <div className="text-[#B5B5B5] text-sm">Uptime garantizado</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">24/7</div>
              <div className="text-[#B5B5B5] text-sm">Soporte técnico</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">Gratis</div>
              <div className="text-[#B5B5B5] text-sm">SSL y migración</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">30 días</div>
              <div className="text-[#B5B5B5] text-sm">Garantía de devolución</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
