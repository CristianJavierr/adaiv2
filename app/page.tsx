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
import Hero from "./components/Hero";
import TitleReveal from "./components/TitleReveal";
import MaskTextReveal from "./components/MaskTextReveal";
import TeamCarousel from "./components/TeamCarousel";

export default function Home() {
  return (
    <div>
      <PromoPopup />
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />

        {/* Image Gallery Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-16">
            <ScrollAnimation animation="fade-scale" delay={0}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero5.jpg" alt="Donuts artesanales" fill className="object-cover" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-scale" delay={0.1}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero4.jpg" alt="Productos Adai" fill className="object-cover" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-scale" delay={0.2}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero2.jpg" alt="Pastel artesanal" fill className="object-cover" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-scale" delay={0.3}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero1.jpg" alt="Cupcakes decorados" fill className="object-cover" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-scale" delay={0.4}>
              <div className="relative h-80 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero3.jpg" alt="Colaboradores" fill className="object-cover" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-scale" delay={0.5}>
              <div className="relative h-80 rounded-tl-[100px] rounded-br-[100px] overflow-hidden image-zoom">
                <Image src="/images/hero6.png" alt="Colaboradores Adai" fill className="object-cover" />
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
                  <CountUp end={new Date().getFullYear() - 2017} suffix="+" duration={2000} />
                </h3>
                <p className="text-xs md:text-sm text-gray-700">
                  Años de Experiencia
                  <br />
                  <span className="text-xs text-gray-500">(desde 2017)</span>
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
                <p className="text-xs md:text-sm text-gray-700">Productos y Servicios</p>
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
          <div className="text-center mb-12">
            <MaskTextReveal className="text-sm text-gray-500 mb-2">Nuestros Productos</MaskTextReveal>
            <TitleReveal className="text-3xl md:text-4xl font-serif text-gray-900">
              Ingredientes de Calidad a Precio Competitivo
            </TitleReveal>
          </div>

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
          <div className="text-center mb-12">
            <MaskTextReveal className="text-sm text-gray-500 mb-2">Acerca de nosotros</MaskTextReveal>
            <TitleReveal className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
              Por qué elegir Adai
            </TitleReveal>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
                <MaskTextReveal className="text-gray-700 leading-relaxed">
                  En Adai Soluciones, S.R.L. ofrecemos soluciones e ingredientes de alta calidad para panaderías, reposterías, pastelerías y negocios alimentarios, combinando insumos confiables con asesoría estratégica para mejorar procesos e impulsar el crecimiento de nuestros aliados. Nuestro enfoque está en brindar herramientas prácticas que permitan producir con mayor eficiencia y calidad.
                </MaskTextReveal>


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

            {/* Right Column - Image */}
            <ScrollAnimation animation="slide-right">
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[100px] rounded-br-[100px] bg-gray-50">
                  <Image
                    src="/images/team/_MG_9071.jpg"
                    alt="Equipo Adai Soluciones"
                    fill
                    className="object-cover object-center"
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
          <div className="text-center mb-12">
            <MaskTextReveal className="text-sm text-gray-500 mb-2">Instagram</MaskTextReveal>
            <TitleReveal className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
              Nuestras últimas publicaciones
            </TitleReveal>
          </div>

          {/* Instagram Posts */}
          <ScrollAnimation animation="zoom-in" delay={0.1}>
            <InstagramEmbed
              posts={[
                {
                  imageUrl: "/images/hero5.jpg",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 245,
                  caption: "Los donuts perfectos con presentación atractiva y textura suave.",
                },
                {
                  imageUrl: "/images/hero1.jpg",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 189,
                  caption: "Cupcakes de chocolate y vainilla para reposterías y pastelerías.",
                },
                {
                  imageUrl: "/images/hero2.jpg",
                  postUrl: "https://www.instagram.com/adaisoluciones/",
                  likes: 312,
                  caption: "Torta de maíz elaborada con fórmula concentrada.",
                },
              ]}
            />
          </ScrollAnimation>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <MaskTextReveal className="text-sm text-gray-500 mb-2">El equipo Adai</MaskTextReveal>
            <TitleReveal className="text-3xl md:text-4xl font-serif text-gray-900">
              Nuestro equipo
            </TitleReveal>
          </div>

          <TeamCarousel />
        </section>

        {/* Location Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-16"></div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <MaskTextReveal className="text-sm text-gray-500 mb-2">Ubicación</MaskTextReveal>
            <TitleReveal className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
              Dónde encontrarnos
            </TitleReveal>
          </div>

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
