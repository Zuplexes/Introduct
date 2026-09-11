/**
 * คลาสฐานของทุกการ์ดเนื้อหาบนหน้าเว็บ: ไอคอน + หัวข้อ + คำอธิบาย
 * PainPoint และ Solution สืบทอดจากคลาสนี้
 */
export class ContentCard {
  constructor({ icon, title, description }) {
    this.icon = icon; // SVG path data
    this.title = title;
    this.description = description;
  }

  /** key สำหรับ React list — subclass override ได้ */
  get key() {
    return this.title;
  }
}
