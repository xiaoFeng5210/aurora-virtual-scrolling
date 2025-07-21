import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'package/index.ts'),
        react: resolve(__dirname, 'package/react-virtual-scrolling/index.ts'),
        vue: resolve(__dirname, 'package/vue-virtual-scrolling/index.ts')
      },
      name: 'AuroraVirtualScrolling',
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'js' : 'cjs'
        return entryName === 'index' ? `index.${extension}` : `${entryName}/index.${extension}`
      },
      formats: ['es', 'cjs']
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue', 'react', 'react-dom'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    minify: 'terser',
    target: 'es2020'
  },
  plugins: [
    vue(),
    react(),
    dts({
      include: ['package/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: false,
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'package')
    }
  }
}) 
