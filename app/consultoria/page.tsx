import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const serviceGroups = [
    {
        title: "Gestión de Registros",
        description: "Acompañamiento para formalizar, registrar y certificar operaciones empresariales.",
        services: [
            "Registros Sanitarios",
            "Signos Distintivos",
            "Registro Mercantil",
            "Registro Industrial",
            "Certificación Industria, Comercio y Mipymes",
        ],
    },
    {
        title: "Etiquetados",
        description: "Revisión y preparación de etiquetas para productos alimentarios.",
        services: [
            "Etiquetado General de Alimentos",
            "Etiquetado Nutricional de Alimentos",
        ],
    },
    {
        title: "Licencias y Habilitaciones",
        description: "Soporte para permisos sanitarios y operación de establecimientos regulados.",
        services: [
            "Licencias Sanitarias",
            "Habilitación de Establecimientos Farmacéuticos",
        ],
    },
];

export default function ConsultoriaPage() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section
                    className="py-16 relative"
                    style={{
                        backgroundImage: "url(/images/bkimage4.png)",
                        backgroundRepeat: "repeat",
                        backgroundSize: "520px",
                    }}
                >
                    <div className="absolute inset-0 bg-white/85"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-slide-in-left">
                                <p className="text-sm text-red-600 font-semibold uppercase tracking-wide mb-3">
                                    Consultoría Empresarial
                                </p>
                                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-5">
                                    Servicios para formalizar y fortalecer su empresa
                                </h1>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    En Adai Soluciones, S.R.L. acompañamos a empresas de alimentos, comercios y
                                    establecimientos regulados en procesos de registros, etiquetados, licencias y
                                    habilitaciones.
                                </p>
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-colors uppercase tracking-wide btn-animate"
                                    style={{ fontSize: "13px" }}
                                >
                                    Solicitar Consultoría
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

                            <div className="relative rounded-tl-[90px] rounded-br-[90px] overflow-hidden aspect-[4/3] image-zoom animate-slide-in-right">
                                <Image
                                    src="/images/aboutus.jpeg"
                                    alt="Consultoría empresarial Adai Soluciones"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <p className="text-sm text-gray-500 mb-2">Servicios</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                            Consultoría adaptada a su operación
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {serviceGroups.map((group, groupIndex) => (
                            <div
                                key={group.title}
                                className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${groupIndex * 0.1}s`, opacity: 0 }}
                            >
                                <h3 className="text-xl font-serif text-gray-900 mb-3">{group.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6">{group.description}</p>
                                <ul className="space-y-3">
                                    {group.services.map((service) => (
                                        <li key={service} className="flex items-start gap-3">
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
                                            <span className="text-gray-700 text-sm">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-slide-in-left">
                                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-5">
                                    Procesos claros para decisiones seguras
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Trabajamos con una revisión inicial de necesidades, levantamiento de requisitos,
                                    preparación documental y seguimiento del proceso correspondiente.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    También podemos incorporar fotos profesionales y referencias de clientes cuando
                                    cuenten con aprobación para su uso en el sitio.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-8 shadow-sm animate-slide-in-right">
                                <h3 className="text-xl font-serif text-gray-900 mb-6">Agenda una evaluación</h3>
                                <p className="text-gray-600 mb-6">
                                    Escríbenos y te orientamos sobre los pasos adecuados según el tipo de producto,
                                    empresa o establecimiento.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contacto"
                                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-tr-[24px] rounded-bl-[24px] transition-colors uppercase tracking-wide btn-animate"
                                        style={{ fontSize: "13px" }}
                                    >
                                        Contacto
                                    </Link>
                                    <a
                                        href="https://wa.me/18092479182"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-tr-[24px] rounded-bl-[24px] transition-colors uppercase tracking-wide btn-animate"
                                        style={{ fontSize: "13px" }}
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
