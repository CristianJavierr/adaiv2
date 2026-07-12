"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TitleRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function TitleReveal({ children, className = "", as: Tag = "h2" }: TitleRevealProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const words = children.split(" ");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const title = titleRef.current;
    if (!title || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const characterElements = title.querySelectorAll<HTMLElement>(".title-reveal__character");
    const context = gsap.context(() => {
      gsap.set(characterElements, { yPercent: 110, clipPath: "inset(0% 0% 100% 0%)" });
      gsap.to(characterElements, {
        yPercent: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.65,
        ease: "power2.out",
        stagger: { each: 0.015, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: title,
          start: "top 88%",
          once: true,
        },
      });
    }, title);

    return () => context.revert();
  }, []);

  return (
    <Tag ref={titleRef} className={className}>
      {words.map((word, index) => (
        <span className="title-reveal__word" key={`${word}-${index}`}>
          {Array.from(word).map((character, characterIndex) => (
            <span className="title-reveal__character" key={`${character}-${characterIndex}`}>
              {character}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
