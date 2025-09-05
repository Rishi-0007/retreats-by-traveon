// components/site/SiteHeader.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { cn as _cn } from "@/lib/utils";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Wellness Retreats", href: "/retreats/wellness" },
  { name: "Corporate Retreats", href: "/retreats/corporate" },
  { name: "Community Tours", href: "/tours/community" },
  { name: "MICE Tours", href: "/tours/mice" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-25 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo height={100} width={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={_cn(
                  "text-sm font-medium transition-smooth hover:text-primary relative",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  active ? "text-primary after:scale-x-100" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">Plan Your Retreat</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={_cn(
                    "block py-2 text-sm font-medium transition-smooth",
                    active
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link href="/contact">Plan Your Retreat</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
