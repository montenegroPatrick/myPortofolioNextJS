"use client";
import { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ dark, setDarkMode }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);

  const links = [
    { url: "/", name: "Accueil", id: "1" },
    { url: "/projet", name: "Projets", id: "2" },
    { url: "/cv", name: "CV", id: "3" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nom à gauche */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Patrick Montenegro
            </Link>
          </div>

          {/* Navigation au centre - Desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact et Toggle à droite */}
          <div className="flex items-center space-x-4">
            {/* Contact Icon */}
            <Link
              href="/contact"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Contact"
            >
              <HiOutlineEnvelope className="h-5 w-5" />
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!dark)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="Toggle theme"
            >
              {dark ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpenNav(!openNav)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {openNav ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {openNav && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-base font-medium transition-colors"
                  onClick={() => setOpenNav(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
