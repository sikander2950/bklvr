export default function SearchBar() {
  return (
    <div className="flex rounded-xl border bg-white p-2 shadow-md text-gray-700 transition hover:shadow-lg focus-within:shadow-lg">
      <input
        type="text"
        placeholder="Search books, authors or genres..."
        className="flex-1 px-4 py-3 outline-none"
      />

      <button className="rounded-lg bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">
        Search
      </button>
    </div>
  );
}