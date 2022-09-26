// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'main',
      fileName: (format) => `main.${format}.js`,
      formats:['es']
    },
    rollupOptions: {
      external: ["@babylonjs/core"]
    }
  }
})