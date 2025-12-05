import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductosPage() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm text-gray-500 mb-2">Catálogo</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Nuestros Productos
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ingredientes de alta calidad para panaderías y reposterías.
                            Descubre nuestra línea completa de productos profesionales.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/productos/${product.id}`}
                                className="group bg-white border border-gray-100 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            >
                                {/* Product Image */}
                                <div className="bg-gray-50 p-8 flex items-center justify-center aspect-square">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={250}
                                        height={250}
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-red-600 font-medium text-sm">
                                        Ver detalles
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                            ¿Necesitas más información?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Contáctanos para conocer más sobre nuestros productos y cómo pueden ayudar a tu negocio.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-colors uppercase tracking-wide"
                            style={{ fontSize: '13px' }}
                        >
                            Contáctanos
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
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
