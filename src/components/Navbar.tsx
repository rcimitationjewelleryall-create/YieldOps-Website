'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

const homeLinks = [
  { name: 'Problem', href: '#problem' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];

const digitalGrowthLinks = [
  { name: 'Problem', href: '#dg-problem' },
  { name: 'Process', href: '#dg-process' },
  { name: 'Pricing', href: '#dg-pricing' },
  { name: 'About', href: '#dg-about' },
  { name: 'FAQ', href: '#dg-faq' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isDigitalGrowth = pathname === '/digital-growth';
  const navLinks = isDigitalGrowth ? digitalGrowthLinks : homeLinks;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png" 
              alt="YieldOps Logo" 
              width={36} 
              height={36} 
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-[var(--text-primary)]">
              Yield<span className="text-[var(--primary-gold)]">Ops</span>
            </span>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 glass-badge hover:border-[var(--border-light)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--primary-gold)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href={isDigitalGrowth
                ? "https://wa.me/919825612393?text=Hi%20YieldOps%2C%20I%20want%20to%20know%20about%20the%20Digital%20Dominance%20Bundle"
                : "https://cal.com/dax-yeildops/yield-diagnostic"
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="apple-button px-5 py-2.5 text-sm font-medium cursor-pointer"
            >
              {isDigitalGrowth ? 'Get Bundle' : 'Book Audit'}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
