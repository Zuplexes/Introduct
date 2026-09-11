/**
 * สมาชิกทีมหนึ่งคน — ทุกอย่างที่เกี่ยวกับ GitHub ของคนนั้นอยู่ในคลาสนี้
 * รูปโปรไฟล์ดึงจาก GitHub โดยตรง ไม่ต้องเก็บไฟล์รูปไว้ในโปรเจกต์
 */
export class TeamMember {
  /**
   * @param {object} p
   * @param {string} p.username  GitHub username
   * @param {string} p.name      ชื่อที่แสดง
   * @param {string} p.role      ตำแหน่งในทีม
   */
  constructor({ username, name, role }) {
    this.username = username;
    this.name = name;
    this.role = role;
  }

  get key() {
    return this.username;
  }

  /** หน้าโปรไฟล์ GitHub */
  get profileUrl() {
    return `https://github.com/${this.username}`;
  }

  /**
   * รูปโปรไฟล์จาก GitHub (ย่อขนาดฝั่ง GitHub เพื่อไม่ต้องโหลดรูปเต็ม)
   * ตั้ง VITE_AVATAR_BASE ตอน build ถ้าต้องเสิร์ฟรูปเอง เช่น preview ที่บล็อกรูปข้ามโดเมน
   */
  avatarUrl(size = 256) {
    const base = import.meta.env?.VITE_AVATAR_BASE;
    return base
      ? `${base}/${this.username}.png`
      : `https://github.com/${this.username}.png?size=${size}`;
  }

  /** ตัวอักษรแรก ใช้เป็น fallback ตอนโหลดรูปไม่ได้ */
  get initial() {
    return (this.name.trim()[0] || "?").toUpperCase();
  }
}
