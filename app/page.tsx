'use client';
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <br />
      <Hero />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Book Recommendation app</h1>
      </main>
    </div>
  );
}
