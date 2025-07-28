// Disable Rollup native bindings (fix for Vercel build)
process.env.ROLLUP_NO_NATIVE = '1';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic', // ✅ For React 17+ JSX Transform
  },
});

