"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

const galleryImages: GalleryImage[] = [
    {
        src: "/images/hero1.jpg",
        alt: "Cupcakes decorados",
        category: "Repostería"
    },
    {
        src: "/images/hero2.jpg",
        alt: "Pastel artesanal",
        category: "Pasteles"
    },
    {
        src: "/images/hero3.jpg",
        alt: "Chef profesional",
        category: "Equipo"
    },
    {
        src: "/images/hero4.jpg",
        alt: "Productos Adai",
        category: "Productos"
    },
    {
        src: "/images/hero5.jpg",
        alt: "Donuts artesanales",
        category: "Panadería"
    },
    {
        src: "/images/aboutus.jpeg",
        alt: "Equipo Adai Soluciones",
        category: "Equipo"
    },
    {
        src: "/images/products/cupcake.png",
        alt: "Premezcla para Cupcake",
        category: "Productos"
    },
    {
        src: "/images/products/mejorante.png",
        alt: "Mejorante para pan",
        category: "Productos"
    },
    {
        src: "/images/products/basedonuts.png",
        alt: "Base para Donuts",
        category: "Productos"
    },
    {
        src: "/images/products/vainilla.png",
        alt: "Base para Pastel de Vainilla",
        category: "Productos"
    },
];

const categories = ["Todos", "Repostería", "Pasteles", "Panadería", "Productos", "Equipo"];

export default function GaleriaPage() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = selectedCategory === "Todos"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section
                    className="py-16 relative"
                    style={{
                        backgroundImage: 'url(/images/bkimage2.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '400px',
                    }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/80"></div>
                    <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in-up relative z-10">
                        <p className="text-sm text-gray-500 mb-2">Explora Nuestro Trabajo</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Galería
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Descubre nuestros productos, creaciones y el equipo detrás de Adai Soluciones.
                            Cada imagen cuenta una historia de calidad y dedicación.
                        </p>
                    </div>
                </section>

                {/* Filter Tabs */}
                <section className="max-w-7xl mx-auto px-6 py-8 animate-fade-in">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-tr-[20px] rounded-bl-[20px] text-sm font-medium transition-all ${selectedCategory === category
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="max-w-7xl mx-auto px-6 py-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative cursor-pointer overflow-hidden rounded-tr-[40px] rounded-bl-[40px] aspect-square bg-gray-100 hover-lift animate-fade-in-scale"
                                style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-2">
                                            {image.category}
                                        </span>
                                        <h3 className="text-white text-lg font-semibold">
                                            {image.alt}
                                        </h3>
                                    </div>
                                </div>
                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500">No hay imágenes en esta categoría.</p>
                        </div>
                    )}
                </section>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div
                            className="relative max-w-4xl max-h-[80vh] w-full aspect-square animate-fade-in-scale"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <span className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-2">
                                {selectedImage.category}
                            </span>
                            <h3 className="text-white text-xl font-semibold">
                                {selectedImage.alt}
                            </h3>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in-up">
                        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                            ¿Te gustaría ver más?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Síguenos en Instagram para ver nuestras últimas creaciones y novedades.
                        </p>
                        <a
                            href="https://instagram.com/adaisoluciones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-all uppercase tracking-wide btn-animate"
                            style={{ fontSize: '13px' }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Síguenos en Instagram
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
