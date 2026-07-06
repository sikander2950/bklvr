"use client";

import Link from "next/link"; // ✅ Added
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Books",
      href: "/books",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Trending",
      href: "/trending",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white text-green-600 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-amber-600 sm:text-2xl">
          📚 BOOK LOVER
        </h1>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 px-2 py-2 text-sm font-medium md:gap-8 md:text-base">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer transition-colors duration-200 hover:text-amber-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/login">
            <button className="rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
              Login
            </button>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-gray-200 p-2 text-green-600 transition-colors hover:border-amber-600 hover:text-amber-600 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 shadow-sm md:hidden">
          <nav className="mx-auto max-w-7xl">
            <ul className="flex flex-col gap-2 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-2 py-2 transition-colors hover:bg-amber-50 hover:text-amber-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md bg-amber-600 px-2 py-2 text-center text-white hover:bg-amber-700"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
}
