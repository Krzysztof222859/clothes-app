import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === "build" ? "/clothes-app/" : "/", // Use '/clothes-app/' in production and '/' in development
  server: {
    open: "/", // Automatically open the page at '/' when the server starts
  },
}));
