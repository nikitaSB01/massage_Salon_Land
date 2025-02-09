import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  server: {
    mimeTypes: {
      "text/css": ["css"],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "src/components", dest: "" }, // Копируем компоненты
        { src: "src/js/include.js", dest: "js" }, // Копируем include.js
        { src: "src/js/reviews.js", dest: "js" }, // Копируем include.js
        { src: "src/js/service-details.js", dest: "js" }, // Добавили service-details.js
      ],
    }),
  ],
});
