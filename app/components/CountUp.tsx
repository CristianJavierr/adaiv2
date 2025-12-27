"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export function CountUp({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    decimals = 0
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        const startValue = 0;

        const easeOutQuart = (t: number): number => {
            return 1 - Math.pow(1 - t, 4);
        };

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuart(progress);
            const currentValue = startValue + (end - startValue) * easedProgress;

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    const displayValue = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toString();

    return (
        <span ref={ref}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}
