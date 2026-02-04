import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const RECIPES_PATH = "src/data/recipes";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${RECIPES_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      description: z.string(),
      source: z.string().optional(),
      prepTime: z.string().optional(),
      cookTime: z.string().optional(),
      servings: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().optional(),
      ogImage: image().or(z.string()).optional(),
    }),
});

export const collections = { blog, recipes };
