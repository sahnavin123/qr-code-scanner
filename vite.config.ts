import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Scanner",
      //   fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      //   formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "build",
    sourcemap: true,
    cssCodeSplit: true, // still needed so Vite emits CSS assets before we capture them
  },
});
