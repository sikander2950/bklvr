//main Component
"use client";
import CenterOrb from "./CenterOrb";
import Background from "./Background";
import OrbitSystem from "./OrbitSystem";
import { useContainerSize } from "./useContainerSize";

export default function HeroIllustration() {
  const { ref, size } = useContainerSize();

  return (
    <div
      ref={ref}
      className="
  relative
  mx-auto
  aspect-square
  w-[280px]
  sm:w-[340px]
  md:w-[420px]
  lg:w-[500px]
  xl:w-[600px]
"
    >
      <Background />
      <CenterOrb />
      <OrbitSystem size={size.width} />
    </div>
  );
}
