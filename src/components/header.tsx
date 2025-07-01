"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import ABLogo from './ab-logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/video-editing', label: 'Video Editing' },
  { href: '/web-design', label: 'Web Design' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center justify-center rounded-lg bg-primary p-2">
            <ABLogo className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">A&B Agency</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
           <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary w-full text-left",
                  pathname === href ? "text-primary" : "text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
