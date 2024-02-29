import Link from "next/link";

import api from "@/api";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}

export const dynamicParams = false;

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return (
    <>
      <article key={`restaurant-${restaurant.id}`}>
        <div className="hidden md:block md:pb-4">
          <Link
            className="flex flex-row items-center rounded-md bg-white font-bold text-white md:text-black"
            href="/"
          >
            <img alt="Chevron" className="mb-[2px] h-4 w-4" src="/img/chevron-left.svg" />
            <p className="ml-1">Go Back Home</p>
          </Link>
        </div>
        <Hero
          description={restaurant.description}
          image={restaurant.image}
          name={restaurant.name}
        />
        <small className="hidden p-[22px] text-lg font-normal md:block">
          <div className="flex gap-4">
            <div className="flex flex-row">
              <img alt="Star Overview" className="mb-3 h-6 w-6" src="/img/star-overview.svg" />
              <p className="ml-[6px] text-[#3D404A]">{restaurant.score}</p>
            </div>
            <div className="flex flex-row">
              <img alt="Bubble Overview" className="mb-3 h-6 w-6" src="/img/bubble-overview.svg" />
              <p className="ml-[6px] text-[#3D404A]">{restaurant.ratings}</p>
            </div>
            <div className="flex flex-row">
              <img
                alt="Location Overview"
                className="mb-3 h-6 w-6"
                src="/img/location-overview.svg"
              />
              <p className="ml-[6px] text-[#3D404A]">Peach Lake, NY</p>
            </div>
          </div>
        </small>
        <small className=" flex p-[22px] text-lg font-normal md:hidden">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-4">
              <div className="flex flex-row">
                <img alt="Star Overview" className="mb-3 h-6 w-6" src="/img/star-overview.svg" />
                <p className="ml-[6px] text-[#3D404A]">{restaurant.score}</p>
              </div>
              <div className="flex flex-row">
                <img
                  alt="Bubble Overview"
                  className="mb-3 h-6 w-6"
                  src="/img/bubble-overview.svg"
                />
                <p className="ml-[6px] text-[#3D404A]">{restaurant.ratings}</p>
              </div>
            </div>
            <div className="flex flex-row">
              {" "}
              <img
                alt="Location Overview"
                className="mb-3 h-6 w-6"
                src="/img/location-overview.svg"
              />
              <p className="ml-[6px] text-[#3D404A]">Peach Lake, NY</p>
            </div>
          </div>
        </small>
      </article>
      <Highlights />
      <div className="my-4 block px-4 md:hidden md:px-0">
        <Link href="/">
          <button
            className="mr-1 w-full rounded-xl bg-violet-500 p-4 text-center font-semibold text-white"
            type="submit"
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
}
