"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  dropdown: boolean;
}

interface NavItemsProps {
  navItems: NavItem[];
}

export default function NavItems({ navItems }: NavItemsProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleGlobalPointerDown(event: MouseEvent | TouchEvent) {
      const targetNode = event.target as Node | null;
      if (
        containerRef.current &&
        targetNode &&
        !containerRef.current.contains(targetNode)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleGlobalPointerDown);
    document.addEventListener("touchstart", handleGlobalPointerDown);
    return () => {
      document.removeEventListener("mousedown", handleGlobalPointerDown);
      document.removeEventListener("touchstart", handleGlobalPointerDown);
    };
  }, []);

  function ClassName(isActive: boolean) {
    return `text-xl font-semibold hover:text-brand-primary flex items-center gap-2 cursor-pointer ${
      isActive ? "text-brand-primary" : "text-brand-dark"
    }`;
  }

  return (
    <div ref={containerRef} className="hidden md:flex gap-8">
      {navItems.map((item) => {
        const isActive = item.dropdown
          ? activeDropdown === item.label
          : pathname === item.href;

        return (
          <div className="relative group flex flex-col gap-2" key={item.label}>
            {item.dropdown ? (
              <button
                className={ClassName(isActive)}
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === item.label ? null : item.label
                  )
                }
                aria-expanded={isActive}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="leading-none">⌃</span>
                ) : (
                  <span className="leading-none translate-y-[-3px]">⌄</span>
                )}
              </button>
            ) : (
              <Link
                href={item.href}
                className={ClassName(isActive)}
                onClick={() => setActiveDropdown(null)}
              >
                <span>{item.label}</span>
              </Link>
            )}
            <div
              className={`h-1 bg-accent-cyan rounded-8 w-full transform origin-center transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
