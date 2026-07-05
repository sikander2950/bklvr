import SearchBar from "../Searchbar";
import HeroIllustration from "./HeroIllustration/HeroIllustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-14
          px-6
          py-16

          md:px-8
          md:py-20

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-20
          lg:px-10
          lg:py-24
        "
      >
        {/* Left : Hero Content */}

        <div
          className="
            w-full
            lg:w-1/2
            max-w-xl

            text-center
            lg:text-left
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-amber-100
              px-4
              py-2

              text-sm
              font-medium
              text-amber-700
            "
          >
            📚 BOOK LOVER
          </span>

          {/* Heading */}

          <h1
            className="
              mt-6

              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900

              sm:text-5xl

              lg:text-6xl
            "
          >
            Read Less.
            <br />
            <span className="text-amber-600">Discover</span> More.
          </h1>

          {/* Description */}

          <p
            className="
              mt-6

              text-base
              leading-8
              text-slate-600

              sm:text-lg
            "
          >
            Discover books tailored to your interests, favorite authors and
            genres through personalized recommendations.
          </p>

          {/* Search */}

          <div className="mt-8">
            <SearchBar />
          </div>

          {/* Buttons */}

          <div
            className="
              mt-8

              flex
              flex-wrap
              justify-center
              gap-4

              lg:justify-start
            "
          >
            <button
              className="
                rounded-xl
                bg-slate-900
                px-6
                py-3

                font-semibold
                text-white

                transition
                hover:bg-slate-800
              "
            >
              Explore Library
            </button>

            <button
              className="
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                py-3

                font-semibold
                text-slate-900

                transition
                hover:bg-slate-100
              "
            >
              Trending Books
            </button>
          </div>

          {/* Stats */}

          <div
            className="
              mt-12

              flex
              justify-center
              gap-8

              sm:gap-12

              lg:justify-start
            "
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900">25K+</h3>

              <p className="mt-1 text-slate-500">Books</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">12K+</h3>

              <p className="mt-1 text-slate-500">Readers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">4.9★</h3>

              <p className="mt-1 text-slate-500">Rating</p>
            </div>
          </div>
        </div>

        {/* Right : Hero Illustration */}

        <div
          className="
            flex
            w-full
            lg:w-1/2

            justify-center
            lg:justify-end

            mt-4
            lg:mt-0
          "
        >
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
