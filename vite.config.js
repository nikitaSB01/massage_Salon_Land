import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/pages', dest: '' }, // Копируем все страницы в dist/
        { src: 'src/components', dest: '' }, // Копируем компоненты в dist/
        { src: 'src/js/include.js', dest: 'js' } // Копируем include.js в dist/js/
      ]
    })
  ]
});
