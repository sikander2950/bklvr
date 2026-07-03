"use client";

import { motion } from "framer-motion";

const books = [
  {
    title: "Atomic Habits",
    color: "from-amber-400 to-orange-500",
    rotate: "-12deg",
    top: "10%",
    left: "20%",
    delay: 0,
  },
  {
    title: "Ikigai",
    color: "from-emerald-400 to-green-500",
    rotate: "8deg",
    top: "40%",
    left: "65%",
    delay: 0.3,
  },
  {
    title: "Deep Work",
    color: "from-blue-400 to-indigo-500",
    rotate: "-8deg",
    top: "65%",
    left: "30%",
    delay: 0.6,
  },
];

export default function HeroIllustration() {
  return (
    <div className="relative h-[500px] w-full">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/40 blur-3xl" />

      {books.map((book) => (
        <motion.div
          key={book.title}
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: book.delay,
            ease: "easeInOut",
          }}
          className={`absolute h-60 w-40 rounded-2xl bg-gradient-to-br ${book.color} shadow-2xl`}
          style={{
            top: book.top,
            left: book.left,
            rotate: book.rotate,
          }}
        >
          <div className="flex h-full items-center justify-center text-center text-xl font-bold text-white">
            {book.title}
          </div>
        </motion.div>
      ))}
    </div>
  );
}