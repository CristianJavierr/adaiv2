"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  { src: "/images/hero5.jpg", alt: "Donuts artesanales", direction: "from-bottom", shape: "rounded-tr-[100px] rounded-bl-[100px]" },
  { src: "/images/stock-reposteria-1.jpg", alt: "Pastel de chocolate gourmet", direction: "from-top", shape: "rounded-tl-[100px] rounded-br-[100px]" },
  { src: "/images/hero2.jpg", alt: "Pastel artesanal", direction: "from-bottom", shape: "rounded-tr-[100px] rounded-bl-[100px]" },
  { src: "/images/hero1.jpg", alt: "Cupcakes decorados", direction: "from-top", shape: "rounded-tl-[100px] rounded-br-[100px]" },
  { src: "/images/hero3.jpg", alt: "Colaboradores", direction: "from-bottom", shape: "rounded-tr-[100px] rounded-bl-[100px]" },
  { src: "/images/hero6.png", alt: "Colaboradores Adai", direction: "from-top", shape: "rounded-tl-[100px] rounded-br-[100px]" },
] as const;

export default function GalleryReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const masks = gsap.utils.toArray<HTMLElement>(".gallery-reveal__mask", section);
    const images = gsap.utils.toArray<HTMLImageElement>(".gallery-reveal__image", section);

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(masks, { autoAlpha: 0 });
        return;
      }

      gsap.set(images, { scale: 1.35 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      masks.forEach((mask, index) => {
        const revealsFromTop = mask.dataset.direction === "from-top";
        const position = index * 0.1;

        timeline.to(mask, {
          yPercent: revealsFromTop ? 105 : -105,
          duration: 0.72,
          ease: "power4.inOut",
        }, position);
        timeline.to(images[index], {
          scale: 1,
          duration: 1.05,
          ease: "power2.out",
        }, position);
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16" aria-label="Galería de Adai">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-16">
        {galleryImages.map(({ src, alt, direction, shape }) => (
          <div key={src} className={`gallery-reveal__card relative h-80 overflow-hidden image-zoom ${shape}`}>
            <Image src={src} alt={alt} fill className="gallery-reveal__image object-cover object-top" sizes="(max-width: 768px) 50vw, 16vw" />
            <div className="gallery-reveal__mask" data-direction={direction} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
