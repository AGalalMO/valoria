import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import svgr from "@svgr/rollup"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
    publicDir: "public",
    assetsInclude: ["**/*.ttf", "**/*.otf"]
})
