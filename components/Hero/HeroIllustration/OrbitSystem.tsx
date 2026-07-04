// Animation controller (NEW)
//It controls the rotation of the orbiting books and passes the rotation value to the Orbit component
// Controls the orbit
//now its Animate rotating

"use client";

import { useEffect, useState } from "react";
import Orbit from "./Orbit";
import type { OrbitSystemProps } from "./types";

export default function OrbitSystem({
  size,
}: OrbitSystemProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setRotation((prev) => (prev + 0.2) % 360);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute inset-0">
      <Orbit
        size={size}
        rotation={rotation}
      />
    </div>
  );
}