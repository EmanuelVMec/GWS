"use client";

import React, { useState } from "react";

export default function Chatbots() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const features = [
    {
      id: 0,
      title: "Conversaciones en Tiempo Real",
      description: "WebSockets nativos para comunicación instantánea sin delays, garantizando una experiencia de chat fluida y natural.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      technologies: ["Django Channels", "WebSockets", "Redis Cache"],
      benefits: ["Respuesta instantánea", "Múltiples usuarios simultáneos", "Estado persistente"]
    },
    {
      id: 1,
      title: "Inteligencia Artificial Integrada",
      description: "Verificación automática con OpenAI GPT-4, análisis de documentos y respuestas personalizadas para cada usuario.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      technologies: ["OpenAI GPT-4", "Machine Learning", "NLP Processing"],
      benefits: ["Verificación automática", "Respuestas inteligentes", "Análisis de documentos"]
    },
    {
      id: 2,
      title: "Procesamiento de Pagos",
      description: "Integración completa con PayPal y Payphone para pagos seguros, webhooks automáticos y confirmación en tiempo real.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      technologies: ["PayPal API", "Payphone Ecuador", "Webhook Security"],
      benefits: ["Pagos seguros SSL", "Múltiples métodos", "Confirmación automática"]
    },
    {
      id: 3,
      title: "Gestión de Documentos",
      description: "Subida automática a Google Drive, validación de PDFs y registro en Google Sheets para máxima organización.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      technologies: ["Google Drive API", "Google Sheets API", "PDF Processing"],
      benefits: ["Almacenamiento seguro", "Organización automática", "Acceso controlado"]
    }
  ];

  const plans = [
    {
      id: 0,
      name: "Básico",
      price: "$299",
      period: "mensual",
      description: "Perfecto para empresas pequeñas que inician con automatización",
      features: [
        "Chat básico con respuestas automáticas",
        "Hasta 1,000 conversaciones/mes",
        "1 canal de integración (Web)",
        "Soporte por email",
        "Dashboard básico"
      ],
      color: "from-[#2A8CFF] to-[#1BC6D9]",
      popular: false
    },
    {
      id: 1,
      name: "Profesional",
      price: "$599",
      period: "mensual",
      description: "La opción más popular para empresas en crecimiento",
      features: [
        "IA avanzada con OpenAI GPT-4",
        "Hasta 5,000 conversaciones/mes",
        "3 canales (Web + WhatsApp + Email)",
        "Procesamiento de pagos integrado",
        "Gestión de documentos PDF",
        "Google Sheets/Drive integrado",
        "Soporte prioritario 24/7",
        "Analytics avanzado"
      ],
      color: "from-[#8B5CF6] to-[#1BC6D9]",
      popular: true
    },
    {
      id: 2,
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solución completa para grandes empresas y casos específicos",
      features: [
        "Todo lo del plan Profesional",
        "Conversaciones ilimitadas",
        "Canales ilimitados",
        "APIs personalizadas",
        "Integraciones custom",
        "WhatsApp Business API oficial",
        "Multi-empresa/Multi-marca",
        "Soporte dedicado",
        "SLA garantizado",
        "Hosting dedicado"
      ],
      color: "from-[#1BC6D9] to-[#2A8CFF]",
      popular: false
    }
  ];

  const technologies = [
    { 
      name: "Django", 
      description: "Framework web robusto", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      name: "WebSockets", 
      description: "Comunicación en tiempo real", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: "OpenAI GPT-4", 
      description: "Inteligencia artificial avanzada", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      name: "PayPal/Payphone", 
      description: "Procesamiento de pagos", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    { 
      name: "Google APIs", 
      description: "Drive, Sheets, integración", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: "WhatsApp Business", 
      description: "API oficial de Meta", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    { 
      name: "Redis", 
      description: "Cache y sesiones", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      description: "Base de datos confiable", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Inscripciones Automatizadas",
      description: "Sistema completo de inscripción a cursos con validación de documentos, pagos automáticos y registro en planillas.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      benefits: ["Reducción del 90% en tiempo de procesamiento", "Validación automática con IA", "Pagos seguros integrados"]
    },
    {
      title: "Atención al Cliente 24/7",
      description: "Chatbot inteligente que resuelve consultas frecuentes, programa citas y transfiere a agentes humanos cuando es necesario.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      benefits: ["Disponibilidad 24/7", "Respuestas instantáneas", "Satisfacción del cliente aumentada"]
    },
    {
      title: "Ventas y Lead Generation",
      description: "Califica leads automáticamente, programa demos y facilita el proceso de compra directamente desde el chat.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: ["Aumento del 40% en conversiones", "Cualificación automática de leads", "Seguimiento personalizado"]
    },
    {
      title: "Gestión de Documentos",
      description: "Recolección, validación y almacenamiento automático de documentos con integración a Google Drive y Sheets.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      benefits: ["Procesamiento automático", "Almacenamiento seguro", "Organización inteligente"]
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
              ChatBots Inteligentes
            </span>
            <br />
            <span className="text-white">Con IA Avanzada</span>
          </h1>
          <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed">
            Automatiza tu atención al cliente con chatbots que procesan pagos, gestionan documentos y 
            se integran con WhatsApp, Google Drive y múltiples APIs. Desarrollados con Django y OpenAI GPT-4.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Características <span className="text-[#1BC6D9]">Avanzadas</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Tecnología de punta que revoluciona la forma de interactuar con tus clientes
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
                  Ver Demo en Vivo
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1BC6D9] mb-4">Tecnologías:</h4>
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

        {/* Technologies Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stack <span className="text-[#1BC6D9]">Tecnológico</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Utilizamos las mejores tecnologías del mercado para garantizar rendimiento y escalabilidad
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

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Casos de <span className="text-[#1BC6D9]">Uso</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Descubre cómo nuestros chatbots están transformando diferentes industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-8 hover:border-[#1BC6D9]/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-[#2A8CFF] group-hover:scale-110 transition-transform duration-300 group-hover:text-[#1BC6D9]">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-[#B5B5B5] mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
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

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planes y <span className="text-[#1BC6D9]">Precios</span>
            </h2>
            <p className="text-[#B5B5B5] max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu empresa
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
                    {plan.period && (
                      <span className="text-[#B5B5B5]">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-[#B5B5B5] text-sm mt-2">{plan.description}</p>
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
                  {plan.price === "Personalizado" ? "Contactar Ventas" : "Comenzar Ahora"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2A8CFF]/10 to-[#1BC6D9]/10 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tu <span className="text-[#1BC6D9]">Atención al Cliente</span>?
          </h2>
          <p className="text-[#B5B5B5] text-lg mb-8 max-w-2xl mx-auto">
            Desarrollamos tu chatbot personalizado con IA, integraciones avanzadas y todo lo que necesitas 
            para revolucionar la experiencia de tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
              Ver Demo Interactivo
            </button>
            <button className="px-8 py-4 border-2 border-[#1BC6D9] text-[#1BC6D9] font-semibold rounded-xl hover:bg-[#1BC6D9] hover:text-black transition-all duration-300">
              Solicitar Cotización
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">48 hrs</div>
              <div className="text-[#B5B5B5] text-sm">Tiempo de desarrollo básico</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">99.9%</div>
              <div className="text-[#B5B5B5] text-sm">Uptime garantizado</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#1BC6D9] mb-2">24/7</div>
              <div className="text-[#B5B5B5] text-sm">Soporte técnico incluido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
