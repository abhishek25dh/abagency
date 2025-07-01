import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import ABLogo from './ab-logo';

const socialLinks = [
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
];

const quickLinks = [
    { href: '/video-editing', label: 'Video Editing' },
    { href: '/web-design', label: 'Web Design' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center rounded-lg bg-primary p-2">
                    <ABLogo className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">A&B Agency</span>
            </Link>
            <p className="text-muted-foreground text-sm">
                High-Quality Video Editing & Stunning Web Design Under One Roof.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({href, label}) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
             <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary" aria-label={link['aria-label']}>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright &copy; A&B Agency 2025</p>
        </div>
      </div>
    </footer>
  );
}
