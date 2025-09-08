"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Fecha de inicio y fin (puedes ajustar estas fechas)

  // Fechas fijas para el contador
  const startDate = new Date('2025-09-08T12:00:00');
  const endDate = new Date('2025-09-08T11:15:00');

  // Estado para pantalla final
  const [finished, setFinished] = useState(false);

  type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  const getTimeLeft = (): TimeLeft => {
    const now = new Date();
    let diff = endDate.getTime() - now.getTime();
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const left = getTimeLeft();
      setTimeLeft(left);
      if (left.days === 0 && left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        setFinished(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-10 sm:p-20">
      {finished ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#18181c] via-[#23243a] to-[#18181c] animate-fadeIn">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src="/LOGO.png"
                alt="Logo"
                width={260}
                height={260}
                className="animate-metal-logo"
              />
              <div className="absolute inset-0 pointer-events-none animate-metal-shine" />
            </div>
            <span className="mt-8 text-4xl font-extrabold text-blue-200 animate-luminous">¡Tiempo finalizado!</span>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center mb-8">
          <div className="bg-[#18181c] rounded-2xl px-16 py-12 flex gap-10 shadow-2xl animate-glow">
            {/* Números y etiquetas alineados verticalmente */}
            <div className="flex items-end">
              <div className="flex flex-col items-center">
                <span className="text-7xl font-extrabold animate-luminous drop-shadow-lg">{String(timeLeft.days).padStart(2,'0')}</span>
                <span className="text-base text-blue-200 uppercase tracking-wide mt-2">days</span>
              </div>
              <span className="text-5xl mx-4 mb-2 metal-separator">:</span>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-extrabold animate-luminous drop-shadow-lg">{String(timeLeft.hours).padStart(2,'0')}</span>
                <span className="text-base text-blue-200 uppercase tracking-wide mt-2">hours</span>
              </div>
              <span className="text-5xl mx-4 mb-2 metal-separator">:</span>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-extrabold animate-luminous drop-shadow-lg">{String(timeLeft.minutes).padStart(2,'0')}</span>
                <span className="text-base text-blue-200 uppercase tracking-wide mt-2">minutes</span>
              </div>
              <span className="text-5xl mx-4 mb-2 metal-separator">:</span>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-extrabold animate-luminous drop-shadow-lg">{String(timeLeft.seconds).padStart(2,'0')}</span>
                <span className="text-base text-blue-200 uppercase tracking-wide mt-2">seconds</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
