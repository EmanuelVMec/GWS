"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Equipo", href: "/equipo" },
  { name: "Soporte", href: "/soporte", dropdown: true },
  { name: "Trabaja con Nosotros", href: "/trabaja" },
];

type FlyoutLinkProps = {
  children: React.ReactNode;
  href: string;
  FlyoutContent: React.ComponentType;
};
const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white text-sm/6 font-semibold">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black z-50"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiciosContent = () => (
  <div className="w-64 bg-white p-6 shadow-xl">
    <div className="mb-3 space-y-3">
      <h3 className="font-semibold">Servicios</h3>
      <a href="#" className="block text-sm hover:underline">Paginas Web</a>
      <a href="#" className="block text-sm hover:underline">Aplicaciones móviles</a>
      <a href="#" className="block text-sm hover:underline">ChatBots</a>
      <a href="#" className="block text-sm hover:underline">Gestion de Redes</a>
      <a href="#" className="block text-sm hover:underline">Hosting</a>
      
    </div>
    <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
      Contactar
    </button>
  </div>
);

const SoporteContent = () => (
  <div className="w-64 bg-white p-6 shadow-xl">
    <div className="mb-3 space-y-3">
      <h3 className="font-semibold">Soporte</h3>
      <a href="#" className="block text-sm hover:underline">Contacto</a>
      <a href="#" className="block text-sm hover:underline">Email</a>
    </div>
    <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
      Ayuda
    </button>
  </div>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <div className="bg-[#0A0A0A]">
  <header className="absolute inset-x-0 top-0 z-50">
  <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/LOGOGWS.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => {
              if (item.name === "Servicios") {
                return (
                  <FlyoutLink key={item.name} href={item.href} FlyoutContent={ServiciosContent}>
                    Servicios
                  </FlyoutLink>
                );
              }
              if (item.name === "Soporte") {
                return (
                  <FlyoutLink key={item.name} href={item.href} FlyoutContent={SoporteContent}>
                    Soporte
                  </FlyoutLink>
                );
              }
              return (
                <Link key={item.name} href={item.href ?? "#"} className="text-sm/6 font-semibold text-[#2A8CFF] hover:text-[#1BC6D9] transition-colors">
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-[#2A8CFF] hover:text-[#1BC6D9] transition-colors">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0A0A] p-6 sm:max-w-sm sm:ring-1 sm:ring-[#B5B5B5]/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src="/LOGO.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    if (item.name === "Servicios") {
                      return (
                        <FlyoutLink key={item.name} href={item.href} FlyoutContent={ServiciosContent}>
                          Servicios
                        </FlyoutLink>
                      );
                    }
                    if (item.name === "Soporte") {
                      return (
                        <FlyoutLink key={item.name} href={item.href} FlyoutContent={SoporteContent}>
                          Soporte
                        </FlyoutLink>
                      );
                    }
                    return (
                      <Link
                        key={item.name}
                        href={item.href ?? "#"}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

  <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
  <div className="w-full py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-8">
              <img
                src="/G.png"
                alt="Logo GWS"
                className="h-48 w-48 sm:h-64 sm:w-64 object-contain"
              />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-balance text-[#2A8CFF] sm:text-7xl drop-shadow-lg mb-4 animate-fade-in flex items-center justify-center gap-2">
              <span className="text-6xl"></span> GWS
            </h1>
            <p className="mt-4 text-lg font-medium text-pretty text-[#B5B5B5] sm:text-xl/8 max-w-2xl mx-auto animate-fade-in">
              Impulsamos tu empresa con tecnología, innovación y soporte de calidad.
            </p>
            <div className="mt-6 mb-8 max-w-3xl mx-auto animate-fade-in text-[#0A0A0A] text-base bg-white rounded-xl p-4 border border-[#B5B5B5]">
              <span className="font-bold text-[#2A8CFF]">Significado del nombre:</span> Grain Wave Studios representa la unión de lo pequeño y lo grande: <br/>
              <span className="font-semibold text-[#1BC6D9]">Grain (grano)</span> simboliza el detalle, la precisión y el inicio de una gran idea.<br/>
              <span className="font-semibold text-[#2A8CFF]">Wave (ola)</span> simboliza la innovación, la fuerza del cambio y la expansión digital.<br/>
              <span className="font-semibold text-[#0A0A0A]">Studios</span> refleja creatividad, tecnología y trabajo en equipo.<br/>
              <br/>
              En conjunto, GWS es un estudio tecnológico que transforma ideas en soluciones digitales sólidas, escalables y modernas.
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in">
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

          {/* Sección de misión, visión y valores rediseñada */}
          <section className="w-full mt-8 mb-8 px-4 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto mb-10 justify-center items-stretch">
              {/* Misión */}
              <div className="flex-1 bg-[#1BC6D9]/80 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-[#2A8CFF] min-w-[220px] max-w-xs mx-auto">
                <span className="text-5xl mb-3">🚀</span>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 text-center">Misión</h3>
                <p className="text-[#0A0A0A] text-sm text-center">Soluciones digitales innovadoras y confiables en web, apps, automatización y soporte, ayudando a crecer en un mundo conectado.</p>
              </div>
              {/* Visión */}
              <div className="flex-1 bg-[#1BC6D9]/80 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-[#2A8CFF] min-w-[220px] max-w-xs mx-auto">
                <span className="text-5xl mb-3">🌍</span>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 text-center">Visión</h3>
                <p className="text-[#0A0A0A] text-sm text-center">Ser referente tecnológico en Latinoamérica y el mundo, reconocido por innovación, calidad y confianza en cada proyecto.</p>
              </div>
              {/* Valores */}
              <div className="flex-1 bg-[#1BC6D9]/80 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-[#2A8CFF] min-w-[220px] max-w-xs mx-auto">
                <span className="text-5xl mb-3">⭐</span>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 text-center">Valores</h3>
                <ul className="text-[#0A0A0A] text-sm text-center space-y-1">
                  <li><span className="font-semibold text-[#0A0A0A]">Innovación</span></li>
                  <li><span className="font-semibold text-[#0A0A0A]">Calidad</span></li>
                  <li><span className="font-semibold text-[#0A0A0A]">Compromiso</span></li>
                  <li><span className="font-semibold text-[#0A0A0A]">Confianza</span></li>
                  <li><span className="font-semibold text-[#0A0A0A]">Eficiencia</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#B5B5B5] max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-[#2A8CFF] mb-2 flex items-center gap-2 justify-center">📌 Descripción corporativa</h3>
              <p className="text-[#B5B5B5] text-base mb-2 text-center">GWS – Grain Wave Studios es una empresa de tecnología que ofrece:</p>
              <ul className="text-[#B5B5B5] text-sm list-disc list-inside space-y-1 mb-2 mx-auto max-w-md">
                <li><span className="font-semibold text-[#2A8CFF]">Páginas Web & E-commerce:</span> sitios modernos y tiendas online.</li>
                <li><span className="font-semibold text-[#2A8CFF]">Apps Móviles:</span> soluciones para Android y iOS.</li>
                <li><span className="font-semibold text-[#2A8CFF]">Chatbots & Automatización:</span> atención al cliente inteligente y procesos optimizados.</li>
                <li><span className="font-semibold text-[#2A8CFF]">Email Marketing:</span> campañas efectivas y gestión profesional de dominios.</li>
                <li><span className="font-semibold text-[#2A8CFF]">Mantenimiento & Reparación:</span> cuidado preventivo y correctivo de equipos y servidores.</li>
                <li><span className="font-semibold text-[#2A8CFF]">Soporte & Actualización:</span> asistencia técnica, actualizaciones de software y hardware.</li>
              </ul>
              <p className="text-[#B5B5B5] text-base mt-2 text-center">Con GWS, cada idea se convierte en una ola de innovación que impulsa el éxito digital. <span className="text-2xl">🌊💻📱</span></p>
            </div>
          </section>
          {/* Sección de servicios (original) */}
          <section className="w-full mt-20 mb-10 px-2 sm:px-8 lg:px-32 xl:px-64">
            <h2 className="text-3xl font-bold text-center text-[#2A8CFF] mb-8 animate-fade-in">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-10 justify-items-center">
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">🌐</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Páginas Web & E-commerce</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Desarrollo de sitios web modernos, tiendas online y presencia digital profesional.</p>
              </div>
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-100 border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">📱</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Apps Móviles</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Aplicaciones móviles a medida para Android y iOS, funcionales y atractivas.</p>
              </div>
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-200 border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">🤖</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Chatbots & Automatización</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Automatiza tu atención al cliente y procesos con bots inteligentes.</p>
              </div>
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-300 border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">📧</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Email Marketing</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Campañas de emails masivos y gestión de dominios para tu marca.</p>
              </div>
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-400 border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">🛠️</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Mantenimiento & Reparación</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Mantenimiento preventivo, correctivo y optimización de equipos y servidores.</p>
              </div>
              <div className="bg-white rounded-2xl min-h-[180px] min-w-[180px] max-w-xs p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in delay-500 border border-[#B5B5B5]">
                <span className="text-4xl mb-3 text-[#1BC6D9]">💻</span>
                <h3 className="text-lg font-bold text-[#2A8CFF] mb-2 text-center">Soporte & Actualización</h3>
                <p className="text-[#0A0A0A] text-center text-sm">Soporte remoto/en sitio, actualización de hardware y software.</p>
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
