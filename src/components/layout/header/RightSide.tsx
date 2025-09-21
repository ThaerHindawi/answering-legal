"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RightSide() {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  }, [showSearch]);

  return (
    <div className="flex items-center gap-4">
      {/* Search icon */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-2 h-11 my-1.5">
          <button
            className="text-brand-dark cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-pressed={showSearch}
            aria-controls="header-search-input"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4804 29.567L24.9937 23.1191C26.911 20.7339 28.0591 17.7211 28.0591 14.4457C28.0591 6.75386 21.7676 0.499939 14.0295 0.499939C6.29139 0.499939 -0.00012207 6.75386 -0.00012207 14.4457C-0.00012207 22.1376 6.29139 28.3915 14.0295 28.3915C17.2326 28.3915 20.1717 27.3074 22.5368 25.5156L29.0579 31.9978C29.3909 32.3288 29.8386 32.4999 30.2749 32.4999C30.7112 32.4999 31.1589 32.3288 31.4918 31.9978C32.1692 31.3245 32.1692 30.2403 31.4918 29.5784L31.4804 29.567ZM3.44413 14.4343C3.44413 8.63689 8.19721 3.91221 14.0295 3.91221C19.8617 3.91221 24.6148 8.63689 24.6148 14.4343C24.6148 20.2318 19.8617 24.9564 14.0295 24.9564C8.19721 24.9564 3.44413 20.2318 3.44413 14.4343Z"
                fill="#161641"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              showSearch
                ? "max-w-153px opacity-100 ml-2"
                : "max-w-[0px] opacity-0 ml-0"
            }`}
          >
            <input
              ref={inputRef}
              id="header-search-input"
              type="text"
              placeholder="Search"
              className={`bg-neutral-bg text-xl h-8 w-full text-neutral-gray font-semibold border-b border-brand-dark flex items-center justify-center outline-none ${
                showSearch ? "pointer-events-auto" : "pointer-events-none"
              }`}
            />
          </div>
        </div>

        <Link
          href="/"
          className="bg-brand-primary text-22px text-neutral-white font-semibold  shrink-0
      px-4 py-5 rounded-11px hover:bg-brand-dark transition-colors h-11 flex items-center justify-center"
        >
          Try for free
        </Link>
      </div>
      {/* Mobile menu button */}
      <button className="lg:hidden cursor-pointer">
        <svg
          width="59"
          height="48"
          viewBox="0 0 59 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.714294"
            width="58.2857"
            height="48"
            rx="12.8571"
            fill="#F7F5F5"
            fillOpacity="0.25"
          />
          <rect
            x="7.57143"
            y="6.85714"
            width="44.5714"
            height="6.85714"
            rx="3.42857"
            fill="#161641"
          />
          <rect
            x="7.57143"
            y="20.5714"
            width="44.5714"
            height="6.85714"
            rx="3.42857"
            fill="#161641"
          />
          <rect
            x="7.57143"
            y="34.2857"
            width="44.5714"
            height="6.85714"
            rx="3.42857"
            fill="#161641"
          />
        </svg>
      </button>
    </div>
  );
}
