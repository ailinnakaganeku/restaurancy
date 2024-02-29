"use client";

import type {Restaurant} from "@/types";

import dynamic from "next/dynamic";
import Link from "next/link";

function FavoriteButton({restaurant}: {restaurant: Restaurant}) {
  const isFavourite = window.localStorage.getItem("favorites")?.includes(restaurant.id);

  return (
    <button
      className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
      type="button"
    >
      ♥
    </button>
  );
}

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, {ssr: false});

export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {
  return (
    <article>
      <Link legacyBehavior passHref href={`/${restaurant.id}`}>
        <img
          alt={restaurant.name}
          className="mb-3 h-[300px] w-full rounded-xl object-cover"
          src={restaurant.image}
        />
      </Link>
      <h2 className="inline-flex items-center gap-2 text-lg font-bold">
        <Link legacyBehavior passHref href={`/${restaurant.id}`}>
          <span>{restaurant.name}</span>
        </Link>
        <div className="flex items-center gap-1">
          <img alt="Star Icon" className="mb-1 h-[14px] w-[14px]" src="/img/star.svg" />
          <span className="text-[14.4px]">{restaurant.score}</span>
          <span className="text-[14.4px] font-normal opacity-75">({restaurant.ratings})</span>
        </div>
        <DynamicFavoriteButton restaurant={restaurant} />
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
