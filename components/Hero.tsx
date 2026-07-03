import SearchBar from "./searchbar";
import HeroIllustration from "./HeroIllistration";
export default function Hero()
 {
  return (
    <section className="bg-stone-50  ">
      <div className="mx-auto flex min-h-[90vh] max-w-8xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* LEFT CONTENT */}

        <div className="max-w-xl">

          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
            📚 BOOK LOVER
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Read Less.
            <br />
            <span className="text-amber-600">Discover </span>
            More.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover books tailored to your interests,
            favorite authors and genres through
            personalized recommendations.
          </p>

          {/* Search */}
          <SearchBar />
          
          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              Explore Library
            </button>

            <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              Trending Books
            </button>

          </div>

          {/* Stats */}

          <div className="mt-12 flex gap-10 text-green-300">

            <div>
              <h3 className="text-2xl font-bold">
                25K+
              </h3>

              <p className="text-slate-500">
                Books
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                12K+
              </h3>

              <p className="text-slate-500">
                Readers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                4.9★
              </h3>

              <p className="text-slate-500">
                Rating
              </p>
            </div>

          </div>

        </div>
        
        {/* RIGHT SIDE */}
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">

          <div className="absolute h-100 w-100 rounded-full bg-amber-200 blur-3xl"></div>

          <img
            src="https://images.pangobooks.com/blog_images/2024%20bestselling%20books%20blog%20banner.png?width=800&quality=95&format=auto"
            alt="Books"
            className="relative w-full max-w-md drop-shadow-2xl position-absolute rounded-lg object-cover shadow-2xl"
            width={800}
            height={800}
          />
          {/* <HeroIllustration /> */}
        </div>

      </div>
    </section>
  );
}