export default function OrbitRing() {
  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
      "
    >
      {/* Outer Ring */}
      <div
        className="
          absolute
          w-[72%]
          h-[72%]
          rounded-full
          border
          border-amber-300/20
          shadow-[0_0_40px_rgba(251,191,36,0.25)]
        "
      />

      {/* Inner Ring */}
      <div
        className="
          absolute
          w-[58%]
          h-[58%]
          rounded-full
          border
          border-amber-300/20
          shadow-[0_0_40px_rgba(251,191,36,0.25)]
        "
      />
    </div>
  );
}