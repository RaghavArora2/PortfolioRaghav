import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolioZaraPlugin } from './server/viteZaraPlugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), portfolioZaraPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});