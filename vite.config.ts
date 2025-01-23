import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import basicSsl from "@vitejs/plugin-basic-ssl"
import svgrPlugin from "vite-plugin-svgr"

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      include: "**/*.svg",
      exclude: "",
    }),
    ...(command === "serve" ? [basicSsl()] : []),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5174,
  },
  build: {
    target: "esnext"
  }
}))
