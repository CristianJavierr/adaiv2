"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let firstFrame = 0;
    let secondFrame = 0;

    const refresh = () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          ScrollTrigger.update();
        });
      });
    };

    refresh();
    const restorationTimer = window.setTimeout(refresh, 150);

    window.addEventListener("pageshow", refresh);
    window.addEventListener("popstate", refresh);

    return () => {
      window.clearTimeout(restorationTimer);
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("popstate", refresh);
    };
  }, [pathname]);

  return null;
}
