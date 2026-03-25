"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delayMs?: number;
  distancePx?: number;
  blurPx?: number;
  once?: boolean;
};

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delayMs = 0,
  distancePx = 14,
  blurPx = 3,
  once = true,
}: RevealProps<T>) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    "--reveal-delay-ms": `${delayMs}ms`,
    "--reveal-distance": `${distancePx}px`,
    "--reveal-blur": `${blurPx}px`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal${isVisible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  );
}
