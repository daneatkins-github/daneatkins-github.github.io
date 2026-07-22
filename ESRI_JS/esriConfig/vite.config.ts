import { defineConfig } from "vite";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/InfraView/test/esriConfig/',
  plugins: [],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
	rollupOptions: {
			input: {
					main: resolve(__dirname,      "index.html"),
					dashboard: resolve(__dirname, "dashboardView.html"),
			},
		
	},
  },
});
