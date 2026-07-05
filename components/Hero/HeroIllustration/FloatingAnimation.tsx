"use client";

import type { ReactNode } from "react";

interface FloatingAnimationProps {
  children: ReactNode;
  time: number;
  phase?: number;
  amplitude?: number;
  speed?: number;
}

export default function FloatingAnimation({
  children,
  time,
  phase = 0,
  amplitude = 6,
  speed = 2,
}: FloatingAnimationProps) {
  const translateY =
    Math.sin(time * speed + phase) * amplitude;

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `translateY(${translateY}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}