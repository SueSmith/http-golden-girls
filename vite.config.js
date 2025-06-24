import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import settings from "./codes.json";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        handlebars({
            context: { settings }
        }),
    ],
    build: {
        outDir: "docs",
    },
    rollupOptions: {
        input: {
            main: 'index.html'
        },
    }
});
