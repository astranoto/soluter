import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://astranoto.github.io",
  
  integrations: [tailwind({
    applyBaseStyles: false
  }), compress(), robotsTxt()],
});
