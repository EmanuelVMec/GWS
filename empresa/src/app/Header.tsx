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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
              <Link key={item.name} href={item.href ?? "#"} className="text-sm/6 font-semibold text-white">
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
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
  );
}
