import React from 'react';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen border-b-4 border-gray-200 border-opacity-50 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brew.png"
          alt="Brewery Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto flex flex-col justify-center">
        <h1 className="text-8xl font-normal text-gray-900 my-6">
          We&apos;re here to
        </h1>
        <div className="w-full flex justify-center mb-3">
          <Image
            src="/brew-heropage.svg"
            alt="Brewmail"
            width={100}
            height={100}
            className="w-1/2 object-contain"
          />
        </div>
        <p className="text-8xl font-normal text-gray-900 mb-4 text-end">
          Your next <span className="font-bold">Coffee chat.</span>
        </p>
      </div>
    </div>
  );
}
