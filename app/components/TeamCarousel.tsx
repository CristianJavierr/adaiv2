"use client";

import Image from "next/image";
import { useRef } from "react";

const teamMembers = [
  { src: "/images/team/_MG_9030.jpg", name: "Jorge Luis Rodríguez Mármol" },
  { src: "/images/team/_MG_9076.jpg", name: "Aylin Grullón Báez" },
  { src: "/images/team/_MG_9044.jpg", name: "Josefina Báez Hernández" },
  { src: "/images/team/_MG_9054.jpg", name: "Alina de Jesús Báez Hernández" },
];

export default function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={trackRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3" aria-label="Miembros del equipo Adai">
        {teamMembers.map(({ src, name }, index) => (
          <figure key={src} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%_-_15px)]">
            <div className={`relative aspect-[2/3] overflow-hidden bg-gray-50 ${index % 2 === 0 ? "rounded-tr-[100px] rounded-bl-[100px]" : "rounded-tl-[100px] rounded-br-[100px]"}`}>
              <Image src={src} alt={name} fill className="object-contain" sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 25vw" />
            </div>
            <figcaption className="mt-4 text-center text-base font-light tracking-[0.01em] text-gray-700 md:text-lg">{name}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button type="button" onClick={() => move(-1)} className="team-carousel-control" aria-label="Ver miembro anterior">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onClick={() => move(1)} className="team-carousel-control" aria-label="Ver siguiente miembro">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
