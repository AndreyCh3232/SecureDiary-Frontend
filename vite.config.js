import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// const BASE_URL = '/SecureDiary/'

// export default defineConfig({
// 	plugins: [react()],
// 	base: BASE_URL,
// })

export default defineConfig({
	base: '/SecureDiary/',
	plugins: [react()],
})

// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		outDir: '../SecureDiary-Backend/public',
// 		emptyOutDir: true,
// 	},
// })