import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: { host: true, port: process.env.PORT ?? 8000 },
  preview: { host: true, port: process.env.PORT ?? 8000 },
});
