import Link from "next/link";

export default function RightSide() {
  return (
    <div className="flex items-center gap-4">
      {/* Search icon */}
      <button className="text-brand-dark w-10">
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
      <Link
        href="/"
        className="bg-brand-primary text-22 text-neutral-white font-semibold 
      px-4 py-5 rounded-11 hover:bg-brand-dark transition-colors h-44 flex items-center justify-center"
      >
        Try for free
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 text-gray-400 hover:text-gray-600">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
