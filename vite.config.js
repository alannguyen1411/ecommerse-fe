import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
            '@components': path.resolve(__dirname, './components'),
            '@styles': path.resolve(__dirname, './assets/styles'),
            '@images': path.resolve(__dirname, './assets/images'),
            '@icons': path.resolve(__dirname, './assets/icons'),
            '@apis': path.resolve(__dirname, './apis'),
            '@routers': path.resolve(__dirname, './routers'),
            '@hooks': path.resolve(__dirname, './hooks'),
            '@contexts': path.resolve(__dirname, './contexts'),
            '@pages': path.resolve(__dirname, './pages'),
        },
    },
});
