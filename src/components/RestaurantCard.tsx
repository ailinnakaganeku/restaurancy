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
    <Link href={`/${restaurant.id}`}>
      <article>
        <img
          alt={restaurant.name}
          className="mb-3 h-[300px] w-full object-cover"
          src={restaurant.image}
        />
        <h2 className="inline-flex items-center gap-2 text-lg font-bold">
          <span>{restaurant.name}</span>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">({restaurant.ratings})</span>
          </small>
          <DynamicFavoriteButton restaurant={restaurant} />
        </h2>
        <p className="opacity-90">{restaurant.description}</p>
      </article>
    </Link>
  );
}
