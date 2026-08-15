"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const nav = navRef.current;
        if (!nav || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const context = gsap.context(() => {
            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline
                .from(".nav-logo", { x: -20, autoAlpha: 0, duration: 0.55 })
                .from(".nav-link", { y: -12, autoAlpha: 0, stagger: 0.055, duration: 0.4 }, 0.12)
                .from(".nav-actions", { x: 16, autoAlpha: 0, duration: 0.45 }, 0.22);
        }, nav);

        return () => context.revert();
    }, []);

    return (
        <nav ref={navRef} className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="nav-logo flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Adai Logo"
                            width={80}
                            height={40}
                            className="h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/productos"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Productos
                        </Link>
                        <Link
                            href="/galeria"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Galería
                        </Link>
                        <Link
                            href="/consultoria"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Consultoría
                        </Link>
                        <Link
                            href="/quienes-somos"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Quiénes Somos
                        </Link>
                        <Link
                            href="/contacto"
                            className="nav-link text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Desktop Icons + Mobile Menu Button */}
                    <div className="nav-actions flex items-center gap-4">
                        {/* WhatsApp Button - Hidden on mobile */}
                        <a
                            href="https://wa.me/18092479182"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-tr-[18px] rounded-bl-[18px] transition-colors text-sm font-semibold"
                            aria-label="Contactar por WhatsApp"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menú"
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/productos"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Productos
                            </Link>
                            <Link
                                href="/galeria"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Galería
                            </Link>
                            <Link
                                href="/consultoria"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Consultoría
                            </Link>
                            <Link
                                href="/quienes-somos"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Quiénes Somos
                            </Link>
                            <Link
                                href="/contacto"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contacto
                            </Link>
                            <a
                                href="https://wa.me/18092479182"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-tr-[18px] rounded-bl-[18px] transition-colors text-sm font-semibold"
                                aria-label="Contactar por WhatsApp"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
