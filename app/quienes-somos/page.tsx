import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function QuienesSomos() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500 mb-2">Nuestra Historia</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Quiénes Somos
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Una empresa familiar nacida de la fe, la perseverancia y el amor por las soluciones
                        </p>
                    </div>
                </section>

                {/* History Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden aspect-[4/3]">
                                <Image
                                    src="/images/aboutus.jpeg"
                                    alt="Equipo Adai Soluciones"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                                La Historia detrás de Adai Soluciones
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Durante más de una década, combiné roles como gerente de innovación y calidad,
                                catedrática, regente farmacéutica, madre de tres y soporte familiar, acumulando
                                conocimientos y responsabilidades. Los excesos de trabajo me llevaron a un derrame
                                pleural atípico y una lenta recuperación.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                En una noche de desvelo, un detalle en el ventilador de techo me inspiró a dibujar
                                nuestro logo. Pensé en mis tres hijos y nuestras iniciales formaron la marca: <strong>Adai</strong>.
                                Una voz me dijo: &quot;Ante las situaciones, las Soluciones&quot;. Así surgió el nombre
                                comercial: <strong>Adai Soluciones</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Una decisión de vida y fe: renuncié a tres empleos para cuidar mi salud y a mi familia
                                con un ritmo distinto. Con el apoyo de siempre, habilitamos el local, desarrollamos
                                productos y servicios, registramos la empresa, y comenzamos a darla a conocer en las
                                panaderías de pueblos cercanos.
                            </p>
                            <p className="text-gray-700 leading-relaxed italic font-medium">
                                Hoy mantenemos la certeza de que, para quien cree, todo obra para bien y que ante
                                situaciones extremas deben generarse soluciones duraderas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Company Info */}
                <section className="max-w-7xl mx-auto px-6 py-8">
                    <div className="bg-red-50 rounded-tr-[60px] rounded-bl-[60px] p-8 md:p-12 text-center">
                        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            <strong>Adai Soluciones, S.R.L.</strong> fue creada el 2 de enero de 2017 como una
                            empresa familiar, dedicada a ofrecer soluciones a las industrias de alimentos y bebidas,
                            a través de producción, distribución, capacitación, importación, exportación, de materias
                            primas, aditivos, alimentos y bebidas.
                        </p>
                    </div>
                </section>

                {/* Mission, Vision, Policy Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="border-t border-gray-200 mb-16"></div>

                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500 mb-2">Nuestro Propósito</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                            Misión, Visión y Política de Calidad
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white border border-gray-100 p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-red-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Misión</h3>
                            <p className="text-gray-700 leading-relaxed text-center text-sm">
                                Ofrecemos soluciones con productos concentrados, inocuos, deliciosos, a costo
                                competitivo, agregando valor por el soporte técnico para la elaboración de
                                exquisitos panes, pasteles y donas; además capacitamos a nuestros clientes en
                                el cumplimiento de estándares de calidad y normativas nacionales e internacionales.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white border border-gray-100 p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-red-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Visión</h3>
                            <p className="text-gray-700 leading-relaxed text-center text-sm">
                                Posicionarnos entre las principales industrias de la República Dominicana en
                                proveer productos alimenticios y servicios de capacitación al personal de las
                                áreas de alimentos, medicamentos, cosméticos e higiene.
                            </p>
                        </div>

                        {/* Quality Policy */}
                        <div className="bg-white border border-gray-100 p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-red-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Política de Calidad</h3>
                            <p className="text-gray-700 leading-relaxed text-center text-sm">
                                Proveer productos y servicios de satisfacción a nuestros clientes, en cumplimiento
                                de las regulaciones nacionales e internacionales.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="border-t border-gray-200 mb-16"></div>

                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500 mb-2">Lo Que Nos Define</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                            Nuestros Valores
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Apertura */}
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-red-600 rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl font-bold text-white">A</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Apertura</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Antes temas de interés de nuestros colaboradores y clientes, para juntos buscar soluciones.
                            </p>
                        </div>

                        {/* Disciplina */}
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-red-600 rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl font-bold text-white">D</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Disciplina</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Dispuestos al constante crecimiento personal y corporativo en favor de la sociedad.
                            </p>
                        </div>

                        {/* Agilidad */}
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-red-600 rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl font-bold text-white">A</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Agilidad</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Atentos a los retos que se nos presentan para asistir a nuestros clientes de manera oportuna y eficiente.
                            </p>
                        </div>

                        {/* Integridad */}
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-red-600 rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl font-bold text-white">I</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Integridad</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Involucrados con los valores humanos, respeto, confidencialidad y cuidado al ambiente.
                            </p>
                        </div>
                    </div>

                    {/* ADAI Meaning */}
                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-700 italic">
                            <strong>A</strong>pertura + <strong>D</strong>isciplina + <strong>A</strong>gilidad + <strong>I</strong>ntegridad = <strong className="text-red-600">ADAI</strong>
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="border-t border-gray-200 mb-16"></div>

                    <div className="bg-gray-900 rounded-tr-[60px] rounded-bl-[60px] p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            ¿Quieres saber más sobre Adai Soluciones?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Si deseas conocer cómo podemos colaborar contigo y tu negocio, no dudes en contactarnos.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide"
                            style={{ fontSize: '13px' }}
                        >
                            CONTÁCTANOS
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
