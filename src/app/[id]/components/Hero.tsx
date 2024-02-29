"use client";

interface HeroProps {
  image: string;
  name: string;
  description: string;
}

export default function Hero({image, name, description}: HeroProps) {
  return (
    <div className="relative overflow-hidden md:rounded-xl">
      <img
        alt={name}
        className="mb-3 h-[40vh] w-full object-cover md:h-[344px] md:rounded-xl"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-[22px] text-white md:p-[32px]">
        <p className="text-3xl font-bold md:text-5xl">{name}</p>
        <p className="md:text-md mt-1 text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
}
