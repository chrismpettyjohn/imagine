import { defineConfig } from 'vite';
import MkCert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  server: {
    https: true,
    host: 'cerberus.dev',
    port: 5174,
  },
  plugins: [tsconfigPaths(), viteCommonjs(), react(), MkCert()],
});