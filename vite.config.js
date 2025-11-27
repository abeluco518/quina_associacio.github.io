import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Añade aquí todos los html que quieras incluir
      }
    }
  },
  base: '/gallery_art_microsite.github.io/'
})
