"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: { label: string; href: string; dropdown: boolean }[];
};

export default function MobileMenu({
  open,
  onClose,
  navItems,
}: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      ref={overlayRef}
      className="fixed lg:hidden top-16 bottom-0 left-0 right-0 w-full h-[calc(100vh-64px)] bg-brand-dark/95 z-50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="flex flex-col gap-6 pt-12 text-neutral-white h-full">
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="">
              <button className="w-full flex items-center justify-between text-xl font-bold py-3 border-b border-accent-cyan/50 cursor-pointer">
                <span>{item.label}</span>
                <span className="text-2xl">›</span>
              </button>
            </div>
          ) : (
            <div key={item.label}>
              <Link
                href={item.href}
                className="w-full flex items-center justify-between text-xl font-bold py-3 border-b border-accent-cyan/50"
                onClick={onClose}
              >
                <span>{item.label}</span>
                <span className="text-2xl">›</span>
              </Link>
            </div>
          )
        )}

        {/* Search */}
        <div className="flex items-center justify-center gap-3 pt-4 max-w-353px mx-auto">
          <input
            name="mobile-menu-search"
            type="text"
            placeholder="Search"
            className="flex-1 h-10 rounded-8px px-3 text-brand-dark bg-neutral-white outline-none"
          />
          <button className="h-10 w-10 rounded-8px bg-brand-primary flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6752 18.7587L15.615 14.7181C16.6146 13.4512 17.2104 11.8658 17.2104 10.1379C17.2104 6.16911 13.9099 2.9035 9.89474 2.9035C5.8796 2.9035 2.5791 6.16911 2.5791 10.1379C2.5791 14.1068 5.8796 17.3724 9.89474 17.3724C11.553 17.3724 13.0772 16.79 14.3229 15.7933L18.4226 19.8666C18.6176 20.0607 18.8812 20.1579 19.1397 20.1579C19.3982 20.1579 19.6618 20.0607 19.8568 19.8666C20.2448 19.4827 20.2448 18.9686 19.8568 18.5923L19.6752 18.7587ZM4.63695 10.1209C4.63695 7.12533 7.00026 4.78511 9.91228 4.78511C12.8243 4.78511 15.1876 7.12533 15.1876 10.1209C15.1876 13.1165 12.8243 15.4567 9.91228 15.4567C7.00026 15.4567 4.63695 13.1165 4.63695 10.1209Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>

        <div className="mt-auto pb-6 flex flex-col items-center gap-4">
          <Link href="#" className="underline" onClick={onClose}>
            Support
          </Link>
          <Link
            href="tel:16316869700"
            className="text-2xl font-bold"
            onClick={onClose}
          >
            (631) 686-9700
          </Link>
          <Link
            href="/"
            className="w-full bg-brand-primary text-neutral-white font-semibold rounded-11px py-4 text-center"
            onClick={onClose}
          >
            Try for free
          </Link>
        </div>
      </div>
    </div>
  );
}
