"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[250px] overflow-hidden rounded-xl">
      <Image
        alt="Your image description"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/img/restaurant.avif"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-[32px] text-center text-white">
        <p className="text-5xl font-bold">Discover the best restaurants</p>
      </div>
    </div>
  );
}
