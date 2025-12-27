"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
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
                            href="/productos"
                            className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Productos
                        </Link>
                        <Link
                            href="/galeria"
                            className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Galería
                        </Link>
                        <Link
                            href="/quienes-somos"
                            className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Quienes Somos
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Desktop Icons + Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon - Hidden on mobile */}
                        <button
                            className="hidden md:block text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Buscar"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>

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
                                href="/quienes-somos"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Quienes Somos
                            </Link>
                            <Link
                                href="/contacto"
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contacto
                            </Link>
                            <button
                                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium text-left flex items-center gap-2"
                                aria-label="Buscar"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                Buscar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
