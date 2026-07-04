import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration/HeroIllustration";

export default function Hero() {
  return (
    <section className="relative bg-stone-50">
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-16

          flex
          flex-col

          lg:flex-row

          items-center
          justify-between
          gap-12

          min-h-screen
        "
      >
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center lg:w-1/2">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}