"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    // Show popup after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Countdown timer
    useEffect(() => {
        if (!isOpen) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Popup */}
            <div className="relative bg-white rounded-tr-[50px] rounded-bl-[50px] shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-scale">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-600"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-8 pt-8 pb-12 text-center relative">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    {/* Logo */}
                    <div className="relative mb-4 flex justify-center">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                            <Image
                                src="/images/logo.png"
                                alt="Adai Soluciones"
                                width={60}
                                height={30}
                                className="h-auto"
                            />
                        </div>
                    </div>

                    {/* Badge */}
                    <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-3 animate-pulse">
                        🔥 OFERTA EXCLUSIVA
                    </span>

                    <h2 className="text-white text-2xl font-bold mb-2">
                        ¡Impulsa tu Negocio!
                    </h2>
                    <p className="text-white/90 text-sm">
                        Obtén un <span className="font-bold">10% de descuento</span> en tu primer pedido
                    </p>
                </div>

                {/* Content */}
                <div className="px-8 py-6 text-center">
                    {/* Countdown */}
                    <p className="text-gray-500 text-sm mb-3">Esta oferta termina en:</p>
                    <div className="flex justify-center gap-3 mb-6">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                            <span className="text-2xl font-bold text-gray-900">
                                {String(timeLeft.hours).padStart(2, "0")}
                            </span>
                            <p className="text-xs text-gray-500">Horas</p>
                        </div>
                        <div className="text-2xl font-bold text-gray-400 self-center">:</div>
                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                            <span className="text-2xl font-bold text-gray-900">
                                {String(timeLeft.minutes).padStart(2, "0")}
                            </span>
                            <p className="text-xs text-gray-500">Min</p>
                        </div>
                        <div className="text-2xl font-bold text-gray-400 self-center">:</div>
                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                            <span className="text-2xl font-bold text-gray-900">
                                {String(timeLeft.seconds).padStart(2, "0")}
                            </span>
                            <p className="text-xs text-gray-500">Seg</p>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                        Contáctanos ahora y recibe asesoría <strong>libre de costo</strong> + descuento especial en productos para tu panadería o repostería.
                    </p>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <a
                            href="https://wa.me/18090000000?text=Hola,%20vi%20la%20oferta%20en%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20obtener%20el%20descuento%20del%2010%25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-bl-[20px] transition-all btn-animate"
                            onClick={handleClose}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Contactar por WhatsApp
                        </a>

                        <Link
                            href="/contacto"
                            className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-bl-[20px] transition-all btn-animate"
                            onClick={handleClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            Agendar una Cita
                        </Link>
                    </div>

                    <p className="text-gray-400 text-xs mt-4">
                        *Oferta válida para nuevos clientes
                    </p>
                </div>
            </div>
        </div>
    );
}
