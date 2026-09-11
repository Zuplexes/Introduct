/**
 * หมวดหมู่สมาชิกหนึ่งชั้น — level ยิ่งน้อยยิ่งอยู่ต้นสายการตัดสินใจ
 * ลำดับของ TEAM_GROUPS ใน data/team.js คือลำดับที่แสดงบนหน้าเว็บ
 */
export class TeamGroup {
  /**
   * @param {object} p
   * @param {number} p.level        ลำดับขั้น เริ่มที่ 1
   * @param {string} p.title        ชื่อหมวดภาษาไทย
   * @param {string} p.titleEn      ชื่อหมวดภาษาอังกฤษ
   * @param {string} p.description  หมวดนี้รับผิดชอบอะไร
   * @param {import("./TeamMember.js").TeamMember[]} p.members
   */
  constructor({ level, title, titleEn, description, members }) {
    this.level = level;
    this.title = title;
    this.titleEn = titleEn;
    this.description = description;
    this.members = members;
  }

  get key() {
    return `level-${this.level}`;
  }

  get size() {
    return this.members.length;
  }
}
