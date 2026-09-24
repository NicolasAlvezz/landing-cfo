"use client";

import { useInView } from "@/lib/useInView";

type Direction = "up" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const OFFSET: Record<Direction, string> = {
  up: "translate-y-4",
  left: "translate-x-4",
  right: "-translate-x-4",
  none: "",
};

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${OFFSET[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
