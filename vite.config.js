import {defineConfig} from 'vite'

export default defineConfig({
  // Setup for production build folder
  build: {
    outDir: 'build',

    // setup multi page
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
        blog: 'other/blog.html'
      }
    }
  },

  // Setup server options,
  server: {
    // setup port
    port: 1234
  },

  preview: {
    port: 9000
  },
})