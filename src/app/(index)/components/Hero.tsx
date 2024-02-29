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
      <div className="absolute bottom-0 left-0 right-0 p-[22px] text-center text-white md:p-[32px]">
        <p className="text-3xl font-bold md:text-5xl">Discover the best restaurants</p>
      </div>
    </div>
  );
}
