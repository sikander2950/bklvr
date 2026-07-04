//now it's a UI Component only
//only renders one book at a time, based on the props passed in
"use client";

import Image from "next/image";
import type { OrbitBookProps } from "./types";
import { BOOK_WIDTH, BOOK_HEIGHT } from "./constants";

export default function OrbitBook({ image, title, x, y }: OrbitBookProps) {
  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="
          rounded-xl
          overflow-hidden
          cursor-pointer
          transition-transform
          duration-300
          hover:scale-110
          hover:-translate-y-2
          will-change-transform
        "
      >
        <Image
          src={image}
          alt={title}
          width={BOOK_WIDTH}
          height={BOOK_HEIGHT}
          priority
          draggable={false}
          className="
            rounded-xl
            object-cover
            select-none
            pointer-events-none
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]
          "
        />
      </div>
    </div>
  );
}
