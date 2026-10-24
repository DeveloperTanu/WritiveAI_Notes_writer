"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = window.localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const pathname = usePathname();

  const hideMenu = pathname === "/login" || pathname === "/signup";
  const hidePricing = pathname === "/pricing";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-100/50 px-6 py-4 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-950/50 sm:px-10 lg:px-40">

      <div className="flex items-center justify-between">


        <Link className="flex items-center gap-x-4" href="/">
          <Image
            width={32}
            height={32}
            src="/logos/logo.svg"
            alt="Writive AI"
          />

          <p className="text-lg font-medium text-blue-600">
            Writive AI
          </p>
        </Link>

        {!hideMenu && (
          <>
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-4">

                <div className="group relative p-2">
                  <button className="flex items-center gap-x-2 text-zinc-800">
                    Apps

                    <span className="relative size-5">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="absolute inset-0 size-5 opacity-100 transition group-hover:opacity-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="absolute inset-0 size-5 opacity-0 transition group-hover:opacity-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>

                    </span>
                  </button>

                  {/* Apps dropdown */}
                  <div className="absolute left-0 top-full hidden min-w-40 flex-col rounded-lg border border-zinc-200 bg-white p-2 shadow-lg backdrop-blur-md group-hover:flex">

                    <Link
                      href="/ainotes"
                      className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      AI Notes
                    </Link>

                    <div className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-zinc-500">
                      <span>AI Mail</span>

                      <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
                        Soon
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-zinc-500">
                      <span>AI Story</span>

                      <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
                        Soon
                      </span>
                    </div>

                  </div>
                </div>

                {!hidePricing && (
                  <Link
                    href="/pricing"
                    className="p-2 text-zinc-800 transition hover:text-blue-500"
                  >
                    Pricing
                  </Link>
                )}

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full p-2 text-zinc-800 transition hover:bg-zinc-200/70 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
                  title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>

                <Link
                  href="/login"
                  className="p-2 text-zinc-800 transition hover:text-blue-500"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center gap-x-2 rounded-full bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-400 active:bg-blue-600"
                >
                  Sign Up

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </Link>

              </div>
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="block rounded-md p-2 text-zinc-800 transition hover:bg-zinc-200/60 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            {menuOpen && (
              <div className="absolute left-4 right-4 top-full mt-3 rounded-xl border border-zinc-200/70 bg-white p-4 shadow-xl lg:hidden">
                <div className="flex flex-col gap-1">

                  <Link
                    href="/ainotes"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-zinc-800 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    AI Notes
                  </Link>

                  <div className="flex items-center justify-between rounded-lg px-4 py-3 text-zinc-500">
                    <span>AI Mail</span>

                    <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                      Coming Soon
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg px-4 py-3 text-zinc-500">
                    <span>AI Story Writer</span>

                    <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                      Coming Soon
                    </span>
                  </div>

                  {!hidePricing && (
                    <Link
                      href="/pricing"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-4 py-3 text-zinc-800 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Pricing
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-zinc-800 transition hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <span>Theme</span>
                    {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
                  </button>

                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-zinc-800 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 rounded-full bg-blue-500 px-4 py-3 text-center text-white transition hover:bg-blue-400"
                  >
                    Sign Up
                  </Link>

                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
