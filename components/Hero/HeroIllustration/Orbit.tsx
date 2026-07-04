//logic for the orbiting circle in the hero illustration
//calculates the position of each book based on the angle and radius
// Now Its a Geometry Engine
"use client";

import OrbitBook from "./OrbitBook";
import { books } from "./books";
import type { OrbitProps } from "./types";
import { ORBIT_RADIUS_RATIO } from "./constants";

export default function Orbit({ size, rotation }: OrbitProps) {
  const radius = size > 0 ? size * ORBIT_RADIUS_RATIO : 180;

  return (
    <div className="absolute inset-0">
      {books.map((book, index) => {
        const angle = (360 / books.length) * index + rotation;

        const radians = (angle * Math.PI) / 180;

        const x = Number((radius * Math.cos(radians)).toFixed(2));

        const y = Number((radius * Math.sin(radians)).toFixed(2));
        return (
          <OrbitBook
            key={book.id}
            image={book.image}
            title={book.title}
            x={x}
            y={y}
          />
        );
      })}
    </div>
  );
}
