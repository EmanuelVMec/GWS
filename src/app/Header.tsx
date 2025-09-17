"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  ChatBubbleLeftRightIcon, 
  ShareIcon, 
  ServerIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/20/solid";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios" },
  { name: "Equipo", href: "/equipo" },
  { name: "Soporte"},
  { name: "Trabaja con Nosotros", href: "/trabaja" },
];

type FlyoutLinkProps = {
  children: React.ReactNode;
  href?: string;
  FlyoutContent: React.ComponentType;
};
const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutLinkProps) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;
  
  // Si no hay href, es solo un dropdown sin navegación
  const isDropdownOnly = !href;
  
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      {isDropdownOnly ? (
        <div className="relative text-white text-base font-semibold transition-all duration-300 hover:text-[#60a5fa] hover:drop-shadow-[0_0_8px_#60a5fa] hover:scale-105 text-glow-hover cursor-pointer">
          {children}
          <span
            style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </div>
      ) : (
        <a href={href} className="relative text-white text-base font-semibold transition-all duration-300 hover:text-[#60a5fa] hover:drop-shadow-[0_0_8px_#60a5fa] hover:scale-105 text-glow-hover">
          {children}
          <span
            style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </a>
      )}
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
      <Link href="/Paginasweb" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <GlobeAltIcon className="w-4 h-4 text-blue-500" />
        Desarrollo de Paginas Web
      </Link>
      <Link href="/Movil" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <DevicePhoneMobileIcon className="w-4 h-4 text-green-500" />
        Desarrollo de Aplicaciones móviles
      </Link>
      <Link href="/ChatBot" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <ChatBubbleLeftRightIcon className="w-4 h-4 text-purple-500" />
        ChatBots
      </Link>
      <Link href="/MarketingD" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <ShareIcon className="w-4 h-4 text-pink-500" />
        Marketing Digital
      </Link>
      <Link href="/Hosteo" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <ServerIcon className="w-4 h-4 text-orange-500" />
        Hosting
      </Link>
    </div>
    <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
      <Link href="/soporte" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        Contactar
      </Link>
    </button>
  </div>
);

const SoporteContent = () => (
  <div className="w-64 bg-white p-6 shadow-xl">
    <div className="mb-3 space-y-3">
      <h3 className="font-semibold">Soporte</h3>
      <a href="/soporte" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <PhoneIcon className="w-4 h-4 text-blue-500" />
        Contáctanos
      </a>
      <Link href="/FAQS" className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors">
        <EnvelopeIcon className="w-4 h-4 text-red-500" />
        FAQ
      </Link>
    </div>
    
  </div>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/20">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="/GWSICO.png"
              className="h-17 w-auto"
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
                <FlyoutLink key={item.name} FlyoutContent={ServiciosContent}>
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
              <Link key={item.name} href={item.href ?? "#"} className="text-base font-semibold text-[#2A8CFF] hover:text-[#1BC6D9] transition-all duration-300 hover:drop-shadow-[0_0_8px_#60a5fa] hover:scale-105 text-glow-hover">
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-base font-semibold text-[#2A8CFF] hover:text-[#1BC6D9] transition-all duration-300 hover:drop-shadow-[0_0_8px_#60a5fa] hover:scale-105 text-glow-hover">
             <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0A0A] p-6 sm:max-w-sm sm:ring-1 sm:ring-[#B5B5B5]/10">
          <div className="flex items-center justify-between">
            
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
                      <FlyoutLink key={item.name} FlyoutContent={ServiciosContent}>
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
  );
}
