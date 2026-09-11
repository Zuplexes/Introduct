import { ContentCard } from "./ContentCard.js";

/** ปัญหาหนึ่งข้อที่ลูกค้าเจอ — Solution อ้างอิงกลับมาที่อ็อบเจกต์นี้ */
export class PainPoint extends ContentCard {
  constructor({ id, icon, title, description }) {
    super({ icon, title, description });
    this.id = id; // เลขข้อที่แสดงบนหน้าเว็บ
  }

  get key() {
    return `pain-${this.id}`;
  }

  get label() {
    return `ข้อ ${this.id}`;
  }
}
