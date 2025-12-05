import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById, getAllProductIds } from "../../data/products";

// Generate static params for all products
export function generateStaticParams() {
    return getAllProductIds().map((id) => ({
        id: id,
    }));
}

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    // Get related products (exclude current)
    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-gray-900 transition-colors">
                                Inicio
                            </Link>
                            <span>/</span>
                            <Link href="/productos" className="hover:text-gray-900 transition-colors">
                                Productos
                            </Link>
                            <span>/</span>
                            <span className="text-gray-900">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Product Detail */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Product Image */}
                        <div className="bg-gray-50 rounded-tr-[60px] rounded-bl-[60px] p-12 flex items-center justify-center">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="object-contain"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {product.longDescription}
                            </p>

                            {/* Features */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                                    Características
                                </h2>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg
                                                className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Usage */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Modo de Uso
                                </h2>
                                <p className="text-gray-600">{product.usage}</p>
                            </div>

                            {/* Presentation */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Presentación
                                </h2>
                                <p className="text-gray-600">{product.presentation}</p>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-colors uppercase tracking-wide"
                                    style={{ fontSize: '13px' }}
                                >
                                    Solicitar Información
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
                                <a
                                    href="https://wa.me/18090000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-colors uppercase tracking-wide"
                                    style={{ fontSize: '13px' }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 text-center">
                            Productos Relacionados
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/productos/${relatedProduct.id}`}
                                    className="group bg-white border border-gray-100 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div className="bg-gray-50 p-8 flex items-center justify-center aspect-square">
                                        <Image
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            width={200}
                                            height={200}
                                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                            {relatedProduct.name}
                                        </h3>
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
