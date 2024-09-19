import viteReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: { reportCompressedSize: false },
  plugins: [
    viteConfigPaths(),
    viteReactPlugin(),
    // eslint-disable-next-line no-undef
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
  server: {
    port: process.env.PORT || 3000, // Use Render's PORT environment variable
    host: '0.0.0.0' // This exposes the server to all interfaces
  },
});
