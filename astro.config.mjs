import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kiqr.dev",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
});
