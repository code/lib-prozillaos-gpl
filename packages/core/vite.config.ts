import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		cssInjectedByJsPlugin(),
		dts({
			include: ["src"],
			outDir: "./dist",
			rollupTypes: true,
			strictOutput: true,
			pathsToAliases: false,
			bundledPackages: ["@prozilla-os/*"],
			tsconfigPath: "tsconfig.build.json"
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", /@prozilla-os/],
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			}
		},
		sourcemap: true,
	},
});