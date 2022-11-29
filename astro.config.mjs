import { defineConfig } from 'astro/config';
import critters from "astro-critters";

export default defineConfig({
  site: "https://send-this-heart-to-uyen.netlify.app",
  integrations: [critters()],
});
