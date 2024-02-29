import type {Restaurant} from "./types";

const api = {
  list: async (): Promise<Restaurant[]> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEebqMbk-NeMoYsHkxV_tdDdLyxVVNiULjPsq6HijPJTLv6-qjgwghVqWUOwZ2xw_OBMZqWOPjVQir/pub?output=csv",
      {cache: "no-store"},
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEebqMbk-NeMoYsHkxV_tdDdLyxVVNiULjPsq6HijPJTLv6-qjgwghVqWUOwZ2xw_OBMZqWOPjVQir/pub?output=csv",
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },
  search: async (query: string): Promise<Restaurant[]> => {
    // Obtenemos los restaurantes
    const results = await api.list().then((restaurants) =>
      // Los filtramos por nombre
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );

    // Los retornamos
    return results;
  },
};

export default api;
