import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-500 to-indigo-800 text-white py-8 rounded-t-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-top">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Brewmail"
                width={100}
                height={200}
                className="w-full h-full"
              />
            </Link>
          </div>
          <nav className="flex flex-col items-end font-thin mb-6 md:mb-0">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/draft" className="hover:text-gray-200">
              Draft
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact Us
            </Link>
          </nav>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex justify-between">
          <p className="text-white">
            © 2025 BrewMail AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="invert brightness-0"
              />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="invert brightness-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
