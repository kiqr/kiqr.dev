import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    // The sidebar's shorter name for the page, when the title is too long for it.
    nav: z.string().optional(),
    description: z.string(),
    order: z.number(),
    section: z.enum(["Start", "Using KIQR", "Building abilities", "kiqr.cloud"]),
  }),
});

export const collections = { docs };
