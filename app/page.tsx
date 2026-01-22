"use client";

import Navbar from "./components/Navbar";
import ProductsCarousel from "./components/ProductsCarousel";
import InstagramEmbed from "./components/InstagramEmbed";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation } from "./components/ScrollAnimation";
import { CountUp } from "./components/CountUp";
import PromoPopup from "./components/PromoPopup";

export default function Home() {
  return (
    <div>
      <PromoPopup />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section with Video Background */}
        <section className="relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/videos/vecteezy_fresh-raw-dough-for-bread-or-pizza_48020125.mov" type="video/quicktime" />
              <source src="/images/videos/vecteezy_fresh-raw-dough-for-bread-or-pizza_48020125.mov" type="video/mp4" />
            </video>
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
            <ScrollAnimation animation="fade-up" duration={0.7}>
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl text-white mb-2 italic drop-shadow-lg" style={{ fontFamily: 'Monotype Corsiva, cursive' }}>
                  Adai Soluciones
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                  Ingredientes para Panaderías, Reposterías y Consultoría Empresarial
                </p>
                <Link
                  href="/productos"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide btn-animate"
                  style={{ fontSize: '13px' }}
                >
                  NUESTROS PRODUCTOS
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
            </ScrollAnimation>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-16">
            {/* Image 1 - Donuts */}
            <ScrollAnimation animation="fade-scale" delay={0}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero5.jpg"
                  alt="Donuts artesanales"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image 2 - Products */}
            <ScrollAnimation animation="fade-scale" delay={0.1}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero4.jpg"
                  alt="Productos Adai"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image 3 - Cake */}
            <ScrollAnimation animation="fade-scale" delay={0.2}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero2.jpg"
                  alt="Pastel artesanal"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image 4 - Cupcakes */}
            <ScrollAnimation animation="fade-scale" delay={0.3}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero1.jpg"
                  alt="Cupcakes decorados"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image 5 - Chef */}
            <ScrollAnimation animation="fade-scale" delay={0.4}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero3.jpg"
                  alt="Chef profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image 6 - New */}
            <ScrollAnimation animation="fade-scale" delay={0.5}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image
                  src="/images/hero6.png"
                  alt="Panadería artesanal"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {/* Stat 1 */}
            <ScrollAnimation animation="fade-up" delay={0}>
              <div className="text-center md:border-r border-gray-400">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 stat-number">
                  <CountUp end={9} suffix="+" duration={2000} />
                </h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Años de
                  <br />
                  Experiencia
                </p>
              </div>
            </ScrollAnimation>

            {/* Stat 2 */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="text-center md:border-r border-gray-400">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 stat-number">
                  <CountUp end={100} suffix="+" duration={2200} />
                </h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Clientes
                  <br />
                  Satisfechos
                </p>
              </div>
            </ScrollAnimation>

            {/* Stat 3 */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div className="text-center md:border-r border-gray-400">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 stat-number">
                  <CountUp end={25} suffix="+" duration={2000} />
                </h3>
                <p className="text-xs md:text-sm text-gray-700">Productos</p>
              </div>
            </ScrollAnimation>

            {/* Stat 4 */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 stat-number">
                  <CountUp end={98} suffix="%" duration={2400} />
                </h3>
                <p className="text-xs md:text-sm text-gray-700">Satisfacción</p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">Nuestros Productos</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Ingredientes de Calidad a Precio Competitivo
              </h2>
            </div>
          </ScrollAnimation>

          {/* Products Carousel */}
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <ProductsCarousel />
          </ScrollAnimation>
        </section>

        {/* About Us Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-16"></div>

          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">Acerca de nosotros</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
                Por que elegir adai
              </h2>
            </div>
          </ScrollAnimation>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <ScrollAnimation animation="slide-left">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  En Adai Soluciones SRL ofrecemos soluciones e ingredientes de alta calidad para panaderías, reposterías y negocios alimentarios, combinando insumos confiables con asesoría estratégica para mejorar procesos y impulsar el crecimiento. Nuestro enfoque está en brindar herramientas prácticas y eficientes que permitan producir con mayor consistencia y competitividad.
                </p>


                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide mt-4 btn-animate"
                  style={{ fontSize: '13px' }}
                >
                  Sobre Nosotros
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
            </ScrollAnimation>

            {/* Right Column - Image */}
            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="relative rounded-tl-[100px] rounded-br-[100px] overflow-hidden aspect-[4/3] image-zoom">
                  <Image
                    src="/images/aboutus.jpeg"
                    alt="Equipo Adai Soluciones"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-16"></div>

          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">Instagram</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
                Nuestras ultimas publicaciones
              </h2>
            </div>
          </ScrollAnimation>

          {/* Instagram Posts */}
          <ScrollAnimation animation="zoom-in" delay={0.1}>
            <InstagramEmbed
              posts={[
                {
                  imageUrl: "/images/instagram/Frame 1 (1).png",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 245,
                  caption: "Productos de la mejor calidad para tu panadería 🥖✨",
                },
                {
                  imageUrl: "/images/instagram/Frame 2.png",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 189,
                  caption: "Ingredientes que marcan la diferencia 🍞💪",
                },
                {
                  imageUrl: "/images/hero5.jpg",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 312,
                  caption: "Deliciosos resultados con Adai Soluciones 🍩❤️",
                },
              ]}
            />
          </ScrollAnimation>
        </section>

        {/* Location Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-16"></div>

          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">ubicación</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
                Donde Encontrarnos
              </h2>
            </div>
          </ScrollAnimation>

          {/* Map */}
          <ScrollAnimation animation="zoom-in" duration={0.8}>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.395936027385!2d-70.7068515!3d19.438488900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cfd097b75d19%3A0x9cf57a1013760d05!2sAdai%20Soluciones%2C%20SRL.!5e0!3m2!1ses-419!2sdo!4v1764968987895!5m2!1ses-419!2sdo"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Read More Button */}
          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="flex justify-center mt-8">
              <a
                href="https://maps.google.com/?q=Adai+Soluciones,+SRL."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide btn-animate"
                style={{ fontSize: '13px' }}
              >
                VER MÁS
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
              </a>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </div>
  );
}
