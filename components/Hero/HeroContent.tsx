import SearchBar from "../Searchbar";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      {/* Badge */}
      <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
        📚 BOOK LOVER
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
        Read Less.
        <br />
        <span className="text-amber-600">Discover </span>
        More.
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        Discover books tailored to your interests, favorite authors and genres
        through personalized recommendations.
      </p>

      {/* Search */}
      <div className="mt-8">
        <SearchBar />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
          Explore Library
        </button>

        <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
          Trending Books
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 flex gap-10">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">25K+</h3>

          <p className="text-slate-500">Books</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">12K+</h3>

          <p className="text-slate-500">Readers</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">4.9★</h3>

          <p className="text-slate-500">Rating</p>
        </div>
      </div>
    </div>
  );
}
