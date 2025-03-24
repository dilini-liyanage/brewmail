import React from 'react';

import { UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-teal-500 to-indigo-800 text-white">
      <div className="container mx-auto py-3">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Brewmail" width={100} height={100} />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/draft"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Draft
            </Link>
            <Link
              href="/profile"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <UserCircle size={32} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
