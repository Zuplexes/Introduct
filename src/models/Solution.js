import { ContentCard } from "./ContentCard.js";

/** ความสามารถหนึ่งตัวของระบบ ผูกกับ PainPoint ที่มันแก้ */
export class Solution extends ContentCard {
  /**
   * @param {object} p
   * @param {string} p.name        ชื่อ product
   * @param {string} p.icon        SVG path data
   * @param {string} p.description ทำอะไร
   * @param {import("./PainPoint.js").PainPoint[]} p.solves  ปัญหาที่แก้
   * @param {string} p.benefit     แก้ให้อย่างไร (1 บรรทัด)
   */
  constructor({ name, icon, description, solves, benefit }) {
    super({ icon, title: name, description });
    this.solves = solves;
    this.benefit = benefit;
  }

  get name() {
    return this.title;
  }

  /** ข้อความใต้การ์ด เช่น "แก้ปัญหาข้อ 1 — ลดงานคีย์ด้วยมือ..." */
  get solvesLabel() {
    const ids = this.solves.map((p) => p.label).join(" และ ");
    return `แก้ปัญหา${ids} — ${this.benefit}`;
  }
}
