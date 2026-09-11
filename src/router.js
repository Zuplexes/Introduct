import { useSyncExternalStore } from "react";

// ponytail: hash routing เขียนเองสิบบรรทัด แทนการลง react-router
// (hash ทำงานบน GitHub Pages ได้เลย ไม่ต้องตั้ง rewrite rule)
const subscribe = (cb) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};

const currentPath = () => window.location.hash.replace(/^#/, "") || "/";

/** @returns {string} path ปัจจุบัน เช่น "/" "/product" "/members" */
export function useHashRoute() {
  return useSyncExternalStore(subscribe, currentPath, () => "/");
}

/** href สำหรับลิงก์ภายใน */
export const to = (path) => `#${path}`;
