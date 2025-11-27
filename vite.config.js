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
  base: '/quina_associacio.github.io/'
})
