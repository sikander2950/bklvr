//logic for the orbiting circle in the hero illustration
//calculates the position of each book based on the angle and radius
// Now Its a Geometry Engine
"use client";

import OrbitBook from "./OrbitBook";
import { books } from "./books";
import type { OrbitProps } from "./types";

export default function Orbit({
  size,
  rotation,
  time,
}: OrbitProps) {
  // Responsive Orbit Radius
  const radius =
    size > 0
      ? Math.max(140, Math.min(size * 0.4, 260))
      : 180;

  // Responsive Book Size
  const bookWidth = Math.max(60, Math.min(size * 0.16, 100));
  const bookHeight = bookWidth * (100 / 70);

  return (
    <div className="absolute inset-0">
      {books.map((book, index) => {
        // Calculate Angle
        const angle =
          (360 / books.length) * index + rotation;

        // Convert Angle → Radians
        const radians =
          (angle * Math.PI) / 180;

        // Geometry
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        // 3D Depth Effect
        const depth = (Math.sin(radians) + 1) / 2;

        const scale = 0.85 + depth * 0.25;

        const opacity = 0.6 + depth * 0.4;

        const zIndex = Math.round(depth * 100);

        return (
          <OrbitBook
            key={book.id}
            image={book.image}
            title={book.title}
            x={x}
            y={y}
            width={bookWidth}
            height={bookHeight}
            scale={scale}
            opacity={opacity}
            zIndex={zIndex}
          />
        );
      })}
    </div>
  );
}