import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	base: '/SecureDiary-Frontend/',
	plugins: [react()],
})

// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		outDir: '../SecureDiary-Backend/public',
// 		emptyOutDir: true,
// 	},
// })