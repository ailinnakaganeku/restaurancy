import {redirect} from "next/navigation";

import api from "@/api";
import RestaurantCard from "@/components/RestaurantCard";

import Hero from "./components/Hero";

export default async function Home({searchParams}: {searchParams: {q?: string}}) {
  const restaurants = await api.search(searchParams.q ?? "");

  async function searchAction(formData: FormData) {
    "use server";

    redirect(`/?q=${formData.get("query")}`);
  }

  return (
    <>
      <Hero />
      <form
        action={searchAction}
        className="my-5 mb-3 flex justify-center px-4 md:my-6 md:mb-4 md:px-0"
      >
        <div className="relative flex w-full items-center justify-center rounded-xl border border-gray-300 shadow-sm md:w-9/12">
          <img
            alt="Search Icon"
            className="absolute left-4 top-[30px] h-[22px] w-[22px] -translate-y-1/2 transform"
            src="/img/search.svg"
          />
          <input
            className="md:text-md h-[64px] w-full rounded-xl pl-12 pr-4 text-sm"
            defaultValue={searchParams.q || ""}
            name="query"
            placeholder="Enter your restaurant here..."
          />
          <button
            className="mr-1 rounded-xl bg-violet-500 p-4 text-center text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <section className="grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {restaurants.length === 0 ? (
          <p className="whitespace-nowrap">Could not find results for {searchParams.q}</p>
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard key={`restaurant-${restaurant.id}`} restaurant={restaurant} />
          ))
        )}
      </section>
    </>
  );
}
