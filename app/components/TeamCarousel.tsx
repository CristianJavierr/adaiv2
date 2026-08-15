"use client";

import Image from "next/image";

const teamMembers = [
  { src: "/images/team/_MG_9054.jpg", name: "Alina de Jesús Báez Hernández" },
  { src: "/images/team/david-suriel-baez.png", name: "David Suriel Báez" },
  { src: "/images/team/_MG_9076.jpg", name: "Aylin Grullón Báez" },
  { src: "/images/team/isaac-grullon-baez.png", name: "Isaac Grullón Báez" },
  { src: "/images/team/_MG_9044.jpg", name: "Josefina Báez Hernández" },
  { src: "/images/team/_MG_9030.jpg", name: "Jorge Luis Rodríguez Mármol" },
];

export default function TeamCarousel() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-12" aria-label="Miembros del equipo Adai">
        {teamMembers.map(({ src, name }, index) => (
          <figure
            key={src}
            className={`min-w-0 lg:col-span-3 ${index === 4 ? "lg:col-start-4" : ""} ${index === 5 ? "lg:col-start-7" : ""}`}
          >
            <div className={`relative aspect-[4/5] overflow-hidden bg-gray-50 ${index % 2 === 0 ? "rounded-tr-[100px] rounded-bl-[100px]" : "rounded-tl-[100px] rounded-br-[100px]"}`}>
              <Image
                src={src}
                alt={name}
                fill
                className={`object-cover object-top ${src === "/images/team/_MG_9030.jpg" ? "origin-top scale-[1.50]" : ""}`}
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 25vw"
              />
            </div>
            <figcaption className="mt-4 px-2 text-center text-sm font-light leading-snug tracking-[0.01em] text-gray-700 md:text-base">{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
