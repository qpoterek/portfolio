import { defineConfig } from 'astro/config'
import compress from "astro-compress"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true
  },
  integrations: [
    compress({
      img: false,
    }), 
    react(),
    tailwind()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    }
  }
});