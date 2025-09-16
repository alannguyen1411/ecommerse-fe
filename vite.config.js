import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
            '@components': path.resolve('./src/components'),
            '@styles': path.resolve('./src/assets/styles'),
            '@images': path.resolve('./src/assets/images'),
            '@icons': path.resolve('./src/assets/icons'),
            '@apis': path.resolve('./src/apis'),
            '@routers': path.resolve('./src/routers'),
            '@hooks': path.resolve('./src/hooks'),
            '@contexts': path.resolve('./src/contexts'),
            '@pages': path.resolve('./src/pages'),
        },
    },
});
