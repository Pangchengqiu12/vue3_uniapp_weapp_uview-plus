import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
  },
})
