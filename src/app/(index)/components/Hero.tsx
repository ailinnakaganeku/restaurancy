"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[480px] overflow-hidden rounded-xl">
      <Image
        alt="Your image description"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/restaurant.avif"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-[56px] text-white">
        <p className="text-5xl font-bold">Discover the best restaurants</p>
      </div>
    </div>
  );
}
