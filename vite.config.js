import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/comment': {
        target: 'http://localhost:3000',
      },
      '/users': {
        target: 'http://localhost:3000',
      },
      '/todo': {
        target: 'http://localhost:3000',
      },
    },
  },
});
