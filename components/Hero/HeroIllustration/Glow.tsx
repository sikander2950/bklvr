//Floating Glow particles
// Light behind the Knowledge Core

export default function Glow() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        z-0

        pointer-events-none
      "
    >
      {/* Outer Glow */}
      <div
        className="
          h-72
          w-72

          rounded-full

          bg-amber-300/20

          blur-[90px]
        "
      />

      {/* Middle Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-52
          w-52

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-amber-400/25

          blur-[70px]
        "
      />

      {/* Inner Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-28
          w-28

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-yellow-200/40

          blur-[35px]
        "
      />
    </div>
  );
}