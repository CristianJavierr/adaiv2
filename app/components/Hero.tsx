"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const heroTitleWords = ["Adai", "Soluciones,", "S.R.L."];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(".hero-overlay", { autoAlpha: 0.72 }, { autoAlpha: 0.5, duration: 0.55, ease: "power2.out" })
        .fromTo(".hero-video", { scale: 1.06 }, { scale: 1, duration: 0.8, ease: "power2.out" }, 0)
        .from(".hero-title", { y: 38, autoAlpha: 0, duration: 0.55, ease: "power3.out" }, 0.05)
        .from(".hero-description", { y: 18, autoAlpha: 0, duration: 0.4, ease: "power3.out" }, "-=0.22")
        .from(".hero-cta-reveal", { y: 16, autoAlpha: 0, duration: 0.4, ease: "power3.out" }, "-=0.12");
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="hero-video absolute inset-0 w-full h-full object-cover">
          <source src="/images/videos/vecteezy_close-up-of-chefs-hand-in-white-cook-uniforms-and-aprons_6551017.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center">
          <h1 className="hero-title text-5xl md:text-6xl text-white mb-2 italic drop-shadow-lg" style={{ fontFamily: "Monotype Corsiva, cursive" }}>
            {heroTitleWords.map((word) => (
              <span className="title-reveal__word" key={word}>
                {Array.from(word).map((character, characterIndex) => (
                  <span className="hero-title-character title-reveal__character" key={`${character}-${characterIndex}`}>
                    {character}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-description text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Ingredientes para Panaderías, Reposterías, Pastelerías y Consultoría Empresarial
          </p>
          <div className="hero-cta-reveal">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-tr-[30px] rounded-bl-[30px] border-2 border-red-600 hover:border-red-700 transition-colors uppercase tracking-wide btn-animate"
              style={{ fontSize: "13px" }}
            >
              NUESTROS PRODUCTOS
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
