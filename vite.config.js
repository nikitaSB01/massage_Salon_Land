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
        { src: "src/components/*", dest: "components" }, // Копируем все компоненты
        { src: "src/pages/*", dest: "pages" }, // Копируем все страницы
        { src: "src/js/include.js", dest: "js" }, // Копируем include.js
        { src: "src/js/reviews.js", dest: "js" }, // Копируем reviews.js
        { src: "src/js/service-details.js", dest: "js" }, // Копируем service-details.js
      ],
    }),
  ],
});
