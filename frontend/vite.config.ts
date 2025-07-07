/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://devi-market-zero-ypueen.2ky31l-1.deu-c1.eu1.cloudhub.io',
          changeOrigin: true,
          secure: false,
          configure: (proxy) => {
            proxy.on('error', (err) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (req) => {
              console.log('Sending Request:', req.method);
            });
            proxy.on('proxyRes', (proxyRes, req) => {
              console.log('Received Response:', req.method, proxyRes.statusCode);
            });
          },
        }
      },
    },
  }
})
