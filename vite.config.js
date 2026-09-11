import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: user site (xxx.github.io) ใช้ "/" ส่วน project repo ใช้ "/ชื่อ-repo/"
// อ่านจาก GITHUB_REPOSITORY ที่ Actions ตั้งให้ เลยไม่ต้องมาแก้มือตอนเปลี่ยนชื่อ repo
const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
const base = !repo || repo.endsWith(".github.io") ? "/" : `/${repo}/`;

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
