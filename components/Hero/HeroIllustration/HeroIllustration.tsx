//main Component
"use client";

import { useEffect, useState } from "react";

import Background from "./Background";
import Glow from "./Glow";
import CenterOrb from "./CenterOrb";
import OrbitSystem from "./OrbitSystem";
import { useContainerSize } from "./UseContainerSize";
import OrbitRing from "./OrbitRing";

export default function HeroIllustration() {
  const { ref, size } = useContainerSize();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[600px]
      "
    >
     <Background />

<Glow />

<OrbitRing />

{mounted && (
  <OrbitSystem
    size={size.width}
  />
)}

<CenterOrb />    </div>
  );
}