import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Contacto() {
    const whatsappNumber = "18092479182";
    const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una cita con Adai Soluciones.");

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
                        backgroundSize: '600px',
                    }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/80"></div>
                    <div className="max-w-7xl mx-auto px-6 text-center mb-12 animate-fade-in-up relative z-10">
                        <p className="text-sm text-gray-500 mb-2">Estamos para ayudarte</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            Contáctanos
                        </h1>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            ¿Tienes alguna pregunta o deseas agendar una cita? Estamos aquí para ayudarte.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8 animate-slide-in-left">
                            {/* Info Cards */}
                            <div className="bg-gray-50 rounded-tr-[40px] rounded-bl-[40px] p-8">
                                <h2 className="text-2xl font-serif text-gray-900 mb-6">
                                    Información de Contacto
                                </h2>

                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Teléfono</h3>
                                            <p className="text-gray-600">+1 809-247-9182</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <p className="text-gray-600">info@adaisoluciones.com</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Ubicación</h3>
                                            <p className="text-gray-600">República Dominicana</p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Horario</h3>
                                            <p className="text-gray-600">Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                                            <p className="text-gray-600">Sábado: 8:00 AM - 12:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="bg-green-50 rounded-tr-[40px] rounded-bl-[40px] p-8 text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Agenda por WhatsApp
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    ¿Prefieres agendar tu cita directamente? Escríbenos por WhatsApp y te atenderemos de inmediato.
                                </p>
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] transition-colors uppercase tracking-wide btn-animate"
                                    style={{ fontSize: '13px' }}
                                >
                                    AGENDAR POR WHATSAPP
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-white border border-gray-100 rounded-tr-[60px] rounded-bl-[60px] p-8 md:p-12 shadow-sm animate-slide-in-right">
                            <h2 className="text-2xl font-serif text-gray-900 mb-2">
                                Agenda tu Cita
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Completa el formulario y nos pondremos en contacto contigo.
                            </p>

                            <form className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo Electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="+1 809-000-0000"
                                    />
                                </div>

                                {/* Service Type */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Tipo de Servicio
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="productos">Consulta sobre Productos</option>
                                        <option value="consultoria">Consultoría Empresarial</option>
                                        <option value="capacitacion">Capacitación</option>
                                        <option value="distribucion">Distribución</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                {/* Preferred Date */}
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                        Fecha Preferida para Cita
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Cuéntanos más sobre lo que necesitas..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide btn-animate"
                                    style={{ fontSize: '13px' }}
                                >
                                    ENVIAR SOLICITUD
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
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="border-t border-gray-200 mb-16"></div>

                    <div className="text-center mb-12 animate-fade-in-up">
                        <p className="text-sm text-gray-500 mb-2">Ubicación</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                            Visítanos
                        </h2>
                    </div>

                    <div className="w-full flex justify-center animate-fade-in-scale">
                        <div className="w-full max-w-4xl rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.395936027385!2d-70.7068515!3d19.438488900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cfd097b75d19%3A0x9cf57a1013760d05!2sAdai%20Soluciones%2C%20SRL.!5e0!3m2!1ses-419!2sdo!4v1764968987895!5m2!1ses-419!2sdo"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
