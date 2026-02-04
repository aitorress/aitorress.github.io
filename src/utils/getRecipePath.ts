import { RECIPES_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a recipe
 * @param id - id of the recipe (aka slug)
 * @param filePath - the recipe full file location
 * @param includeBase - whether to include `/recipes` in return value
 * @returns recipe path
 */
export function getRecipePath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  const pathSegments = filePath
    ?.replace(RECIPES_PATH, "")
    .split("/")
    .filter(path => path !== "")
    .filter(path => !path.startsWith("_"))
    .slice(0, -1)
    .map(segment => slugifyStr(segment));

  const basePath = includeBase ? "/recipes" : "";

  const recipeId = id.split("/");
  const slug = recipeId.length > 0 ? recipeId.slice(-1) : recipeId;

  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}
