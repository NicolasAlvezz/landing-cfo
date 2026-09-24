"use client";

import { useRef, useState } from "react";

export default function Spotlight({
  children,
  className = "",
  color = "rgba(192,132,58,0.16)",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current?.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    glowRef.current?.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 62%)`,
        }}
      />
      {children}
    </div>
  );
}
