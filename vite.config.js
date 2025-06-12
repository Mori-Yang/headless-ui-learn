import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: [
                './components/**/*',
            ],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'components/index.ts'),
            name: 'mori-headless-ui',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                },
                preserveModules: true,
                preserveModulesRoot: 'components',
                entryFileNames: ({ name }) => {
                    return `${name}.js`;
                },
            },
        },
        sourcemap: true,
    },
}));