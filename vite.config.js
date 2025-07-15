import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		cors: {
			origin: process.env.NODE_ENV === 'development' ? true : false,
			methods: ['GET'],
			credentials: false
		},
		hmr: {
			protocol: 'ws',
			host: 'localhost'
		}
	},
	publicDir: 'public',
	build: {
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: [
						'react',
						'react-dom',
						'react-router-dom',
						'framer-motion'
					]
				},
			},
		},
		chunkSizeWarningLimit: 1000
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
