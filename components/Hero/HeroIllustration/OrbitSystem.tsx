// Animation controller (NEW)
//It controls the rotation of the orbiting books and passes the rotation value to the Orbit component
// Controls the orbit
//now its Animate rotating
//
"use client";

import { useEffect, useState } from "react";
import Orbit from "./Orbit";
import type { OrbitSystemProps } from "./types";

export default function OrbitSystem({
  size,
}: OrbitSystemProps) {
  const [rotation, setRotation] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frame: number;
    let lastTime = 0;

    const SPEED = 18; // degrees per second

    const animate = (timeStamp: number) => {
      if (!lastTime) {
        lastTime = timeStamp;
      }

      const deltaTime = (timeStamp - lastTime) / 1000;
      lastTime = timeStamp;

      setRotation((prev) => (prev + SPEED * deltaTime) % 360);

      // Independent animation time
      setTime(timeStamp / 1000);

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
        time={time}
      />
    </div>
  );
}