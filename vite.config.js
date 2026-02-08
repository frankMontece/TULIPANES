import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Use esbuild for minification on Vercel (no extra dependency required)
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})
