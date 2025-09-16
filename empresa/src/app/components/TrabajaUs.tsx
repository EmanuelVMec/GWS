"use client";

import React from "react";

export default function TrabajaUs() {
  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#2A8CFF]/15 to-[#1BC6D9]/15 rounded-full blur-3xl animate-float-bg-1" 
             style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/10 to-[#1BC6D9]/10 rounded-full blur-2xl animate-float-bg-2"
             style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#1BC6D9]/8 to-[#2A8CFF]/8 rounded-full blur-xl animate-pulse"
             style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>

      <div className="relative z-10 px-4 py-16 mx-auto max-w-4xl text-center">
        {/* Icono principal */}
        <div className="mb-8">
          <svg className="w-24 h-24 mx-auto text-[#2A8CFF] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#2A8CFF] to-[#1BC6D9] bg-clip-text text-transparent">
            Trabaja con
          </span>
          <br />
          <span className="text-white">Nosotros</span>
        </h1>

        {/* Coming Soon */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2A8CFF]/20 to-[#1BC6D9]/20 border border-[#2A8CFF]/30 rounded-full backdrop-blur-sm">
            <svg className="w-6 h-6 text-[#1BC6D9] mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[#1BC6D9] font-semibold text-lg">COMING SOON</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed mb-12">
          Estamos preparando una experiencia increíble para que puedas unirte a nuestro equipo. 
          Pronto podrás enviar tu CV y formar parte de la familia GWS.
        </p>

        {/* Características del futuro portal */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-6 hover:border-[#1BC6D9]/40 transition-all duration-300">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-white mb-2">Aplicación Fácil</h3>
            <p className="text-[#B5B5B5] text-sm">Proceso de aplicación simple e intuitivo</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-6 hover:border-[#1BC6D9]/40 transition-all duration-300">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-white mb-2">Múltiples Posiciones</h3>
            <p className="text-[#B5B5B5] text-sm">Oportunidades en desarrollo, diseño y marketing</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-[#2A8CFF]/20 rounded-2xl p-6 hover:border-[#1BC6D9]/40 transition-all duration-300">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-lg font-semibold text-white mb-2">Crecimiento</h3>
            <p className="text-[#B5B5B5] text-sm">Ambiente de aprendizaje y crecimiento profesional</p>
          </div>
        </div>

      </div>
    </section>
  );
}
