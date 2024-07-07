import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": "./src/components",
      "@page": "./src/page",
      "@utils": "./src/utils",
    },
  },
  plugins: [react()],
});
