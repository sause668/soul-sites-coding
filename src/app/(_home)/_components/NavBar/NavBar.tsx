"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const PAGE_LINKS = [
  { id: "title", label: "Home" },
  { id: "sites", label: "Projects" },
  { id: "about", label: "Profile" },
] as const;

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const logo = (
    <Image
      src="/img/logos/logo-main-inverted.jpg"
      height={50}
      width={Math.round((50 * 582) / 1004)}
      alt="Soul Sites"
      className="h-[50px] w-auto"
      priority
    />
  );

  return (
    <header className="fixed top-0 z-[999] w-full bg-primary text-secondary">
      <nav
        className="relative mx-auto flex h-14 max-w-[100vw] items-center px-2 min-[1000px]:px-4"
        aria-label="Primary"
      >
        {/* Mobile */}
        <div className="flex w-full items-center justify-between min-[1000px]:hidden">
          <button
            type="button"
            className="rounded p-2 text-secondary hover:bg-white/10"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon />
          </button>
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-1">
            {logo}
          </div>
          <div className="flex items-center gap-0">
            <Link
              href="https://www.linkedin.com/in/kamara-reynolds-41248686/"
              className="p-2 text-secondary hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/sause668"
              className="p-2 text-secondary hover:bg-white/10"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute left-2 top-full mt-1 flex min-w-[10rem] flex-col rounded-lg bg-primary py-1 shadow-lg min-[1000px]:hidden"
          >
            {PAGE_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="px-4 py-2 text-left font-subtitle text-lg text-secondary hover:bg-white/10"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}

        {/* Desktop */}
        <div className="hidden w-full items-center gap-6 min-[1000px]:flex">
          {logo}
          <div className="flex flex-1 flex-wrap gap-2 pl-2">
            {PAGE_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="rounded px-4 py-2 font-subtitle text-lg text-secondary hover:bg-white/10"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-0">
            <Link
              href="https://www.linkedin.com/in/kamara-reynolds-41248686/"
              className="p-2 text-secondary hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/sause668"
              className="p-2 text-secondary hover:bg-white/10"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
