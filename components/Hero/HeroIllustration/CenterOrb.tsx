// Knowledge Core (Center of the orbit)

import { BookOpen } from "lucide-react";

export default function CenterOrb() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-20
        select-none
      "
    >
      <div
        className="
          relative

          flex
          flex-col
          items-center
          justify-center
          text-center

          w-28 h-28
          sm:w-36 sm:h-36
          md:w-44 md:h-44
          lg:w-48 lg:h-48

          rounded-full

          bg-gradient-to-br
          from-amber-200
          via-amber-400
          to-orange-500

          border
          border-amber-100/60

          shadow-[0_0_40px_rgba(251,191,36,0.45)]
        "
      >
        {/* Book Icon */}

        <BookOpen
          className="
            mb-2
            h-5
            w-5
            text-white
          "
        />

        {/* Brand */}

        <h2
          className="
            text-lg
            sm:text-xl
            md:text-2xl

            font-bold
            tracking-[0.30em]

            text-white
          "
        >
          BOOK LOVER
        </h2>

        {/* Tagline */}

        <p
          className="
            mt-2

            text-[10px]
            sm:text-xs

            text-white/90

            leading-relaxed
          "
        >
          Knowledge
          <br />
          Awaits
        </p>
      </div>
    </div>
  );
}
