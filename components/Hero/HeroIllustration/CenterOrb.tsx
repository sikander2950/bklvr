// CenterOrb.tsx
// Centeral Sun in the Hero Illustration
"use client";
export default function CenterOrb() {
  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-28
        h-28

        rounded-full

        bg-gradient-to-br
        from-amber-300
        to-orange-500

        shadow-[0_0_80px_rgba(251,191,36,0.4)]
      "
    />
  );
}