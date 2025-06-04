import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	base: '/',
	build: {
		outDir: '../SecureDiary-Backend/public',
		emptyOutDir: true,
	},
	plugins: [react()],
})