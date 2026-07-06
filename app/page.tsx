"use client";

import Navbar from "../components/Navbar";       // ✅ matches lowercase file
import Hero from "@/components/Hero/Hero";       // ✅ absolute import is fine

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <Hero />

      <main className="mx-auto w-full max-w-7xl px-6 py-24">
        <h1 className="text-3xl font-bold">
          Book Recommendation App
        </h1>
      </main>
    </div>
  );
}