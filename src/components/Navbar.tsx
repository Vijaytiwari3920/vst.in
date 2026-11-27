"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Research", href: "/#research" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-border-strong bg-bg-elevated font-mono text-xs font-medium text-fg transition-colors group-hover:border-accent group-hover:text-accent">
            {portfolioData.profile.monogram}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-medium text-fg">
              {portfolioData.profile.name}
            </span>
            <span className="font-mono text-[11px] text-fg-faint">
              {portfolioData.profile.subtitle}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-8 w-8 items-center justify-center border border-border bg-bg-elevated text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <Sun className="hidden h-3.5 w-3.5 dark:block" />
            <Moon className="block h-3.5 w-3.5 dark:hidden" />
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-8 w-8 items-center justify-center border border-border bg-bg-elevated text-fg-muted"
          >
            <Sun className="hidden h-3.5 w-3.5 dark:block" />
            <Moon className="block h-3.5 w-3.5 dark:hidden" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center border border-border bg-bg-elevated text-fg"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-xs font-medium uppercase tracking-widest text-fg-muted hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
