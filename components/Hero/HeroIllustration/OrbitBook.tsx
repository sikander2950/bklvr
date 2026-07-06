// //now it's a UI Component only
// //only renders one book at a time, based on the props passed in

// One book in the orbit
// Only renders the book UI
"use client";

import Image from "next/image";
import type { OrbitBookProps } from "./Types";

export default function OrbitBook({
  image,
  title,
  x,
  y,
  width,
  height,
  scale,
  opacity,
  zIndex,
}: OrbitBookProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
        opacity,
        zIndex,
      }}
    >
      <div
        className="
          overflow-hidden
          rounded-xl
          transition-transform
          duration-300
          hover:scale-110
          hover:-translate-y-2
          will-change-transform
          cursor-pointer
        "
      >
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          draggable={false}
          priority={false}
          className="
            rounded-xl
            object-cover
            select-none
            pointer-events-none
            drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]
          "
        />
      </div>
    </div>
  );
}
