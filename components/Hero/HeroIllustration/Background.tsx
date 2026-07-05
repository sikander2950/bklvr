// Gradient + radial glow
export default function Background() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">

      {/* Main Glow */}
      <div
        className="
          h-72
          w-72
          rounded-full
          bg-orange-400/30
          blur-3xl
        "
      />

    </div>
  );
}