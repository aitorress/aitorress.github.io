import type { CollectionEntry } from "astro:content";

const getSortedRecipes = (recipes: CollectionEntry<"recipes">[]) => {
  return recipes
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedRecipes;
