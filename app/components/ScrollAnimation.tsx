"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "fade-scale" | "slide-left" | "slide-right" | "zoom-in";
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export function ScrollAnimation({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 1,
    className = "",
    threshold = 0.1,
}: ScrollAnimationProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold });

    const baseStyles: React.CSSProperties = {
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
    };

    const animations: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
        "fade-up": {
            hidden: { opacity: 0, transform: "translateY(30px)" },
            visible: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "fade-scale": {
            hidden: { opacity: 0, transform: "scale(0.95)" },
            visible: { opacity: 1, transform: "scale(1)" },
        },
        "slide-left": {
            hidden: { opacity: 0, transform: "translateX(-40px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right": {
            hidden: { opacity: 0, transform: "translateX(40px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        "zoom-in": {
            hidden: { opacity: 0, transform: "scale(0.9)" },
            visible: { opacity: 1, transform: "scale(1)" },
        },
    };

    const currentAnimation = animations[animation];
    const animationStyles = isVisible ? currentAnimation.visible : currentAnimation.hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{ ...baseStyles, ...animationStyles }}
        >
            {children}
        </div>
    );
}

// Stagger animation wrapper for lists
interface StaggerContainerProps {
    children: React.ReactNode;
    staggerDelay?: number;
    className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = "" }: StaggerContainerProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateY(0)" : "translateY(20px)",
                            transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
                            transitionDelay: `${index * staggerDelay}s`,
                        }}
                    >
                        {child}
                    </div>
                ))
                : children}
        </div>
    );
}
