"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
    {
        id: "cupcake",
        name: "Premezcla para Cupcake",
        image: "/images/products/cupcake.png",
        description:
            "Facilita el proceso de elaboración, basta adicionar líquidos, mezclar, hornear y en unos minutos disfrutar cupcakes de delicioso sabor y olor a vainilla natural.",
    },
    {
        id: "mejorante",
        name: "Mejorante para todo tipo de pan",
        image: "/images/products/mejorante.png",
        description:
            "Fórmula superconcentrada, con proteínas y vitaminas, ofrece mayor masa hasta un 75% de dosis y tiempo de elaboración, mejor estructura de la miga, dorado de la corteza y aroma del producto final.",
    },
    {
        id: "basedonuts",
        name: "Base Concentrada para Donuts",
        image: "/images/products/basedonuts.png",
        description:
            "Obtén los mejores resultados de donuts sabrosos y suaves durante varios días.",
    },
    {
        id: "vainilla",
        name: "Base Concentrada Pastel de Vainilla",
        image: "/images/products/vainilla.png",
        description:
            "Mezcla perfecta para crear pasteles de vainilla con textura suave y sabor excepcional.",
    },
];

export default function ProductsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-full md:w-1/3 flex-shrink-0 px-4"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 w-full aspect-square flex items-center justify-center max-w-[250px] mx-auto">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={250}
                                        height={250}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 min-h-[100px]">
                                    {product.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/productos/${product.id}`}
                                        className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors"
                                    >
                                        Más Info.
                                    </Link>
                                    <button className="w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-colors z-10"
                aria-label="Previous product"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-colors z-10"
                aria-label="Next product"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                            ? "bg-gray-900 w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to product ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
