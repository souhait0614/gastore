import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Gastore",
      fileName: "gastore",
    },
  },
})
