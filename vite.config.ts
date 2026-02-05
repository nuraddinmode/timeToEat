import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgx from "@svgx/vite-plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: { host: true },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@common": path.resolve(__dirname, "src", "common"),
      "@fonts": path.resolve(__dirname, "src", "fonts"),
      "@modules": path.resolve(__dirname, "src", "modules"),
      "@routes": path.resolve(__dirname, "src", "routes"),
      "@pages": path.resolve(__dirname, "src", "pages"),
    },
  },
  plugins: [
    react(),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    svgx({
      optimize: true,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { removeViewBox: false } },
          },
        ],
      },
    }),
  ],
});
