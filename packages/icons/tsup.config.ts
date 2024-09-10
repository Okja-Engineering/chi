import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    external: ["react", "react-dom"],
});