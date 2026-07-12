"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

interface MaskTextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaskTextReveal({ children, className = "" }: MaskTextRevealProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const text = textRef.current;
    if (!text || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const content = text.querySelector<HTMLElement>(".mask-text-reveal__content");
    if (!content) return;

    const context = gsap.context(() => {
      const split = new SplitText(content, {
        type: "lines,chars",
        linesClass: "mask-text-reveal__line",
        charsClass: "mask-text-reveal__character",
      });
      const characters = content.querySelectorAll<HTMLElement>(".mask-text-reveal__character");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          once: true,
        },
      });

      gsap.set(text, { autoAlpha: 0 });
      gsap.set(characters, { yPercent: 110 });
      timeline
        .to(text, { autoAlpha: 1, duration: 1.25, ease: "power3.out" }, 0)
        .to(characters, { yPercent: 0, duration: 1.2, ease: "power3.out" }, 0.08);

      return () => split.revert();
    }, text);

    return () => context.revert();
  }, []);

  return (
    <p ref={textRef} className={`mask-text-reveal ${className}`}>
      <span className="mask-text-reveal__content">{children}</span>
    </p>
  );
}
