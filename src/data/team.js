import { TeamMember } from "../models/TeamMember.js";
import { TeamGroup } from "../models/TeamGroup.js";

/**
 * สมาชิกแบ่งตามลำดับขั้น — เพิ่มคนใหม่โดยใส่ไว้ในหมวดที่ตรงกับหน้าที่
 * ชื่อที่แสดงดึงมาจากโปรไฟล์ GitHub ของแต่ละคน (คนที่ยังไม่ได้ตั้งชื่อไว้ ใส่ให้ตามที่แจ้งมา)
 * รูปโปรไฟล์มาจาก https://github.com/{username}.png ไม่ต้องเก็บไฟล์รูปในโปรเจกต์
 */
export const TEAM_GROUPS = [
  new TeamGroup({
    level: 1,
    title: "ผู้บริหาร",
    titleEn: "Leadership",
    description: "กำหนดทิศทางของทีมและตัดสินใจว่าจะลงแรงกับเทคโนโลยีตัวไหน",
    members: [
      new TeamMember({ username: "ChirasakS", name: "Chirasak Saengthana", role: "CEO" }),
      new TeamMember({ username: "Athichanon", name: "Athichanon Arreefee", role: "CTO" }),
    ],
  }),
  new TeamGroup({
    level: 2,
    title: "วิศวกรรม",
    titleEn: "Engineering",
    description: "สร้างและดูแลระบบ OCR + NER ตั้งแต่เทรนโมเดลจนขึ้นใช้งานจริง",
    members: [
      new TeamMember({ username: "SurasekPha", name: "Surasek Ph.", role: "AI Engineer" }),
      new TeamMember({ username: "panupongsae", name: "Panupong S.", role: "MLOps" }),
    ],
  }),
  new TeamGroup({
    level: 3,
    title: "ข้อมูลและคุณภาพ",
    titleEn: "Data & Quality",
    description: "เตรียมชุดข้อมูลและตรวจคุณภาพผลลัพธ์ ทั้งก่อนและหลังโมเดลทำงาน",
    members: [
      new TeamMember({ username: "North1150", name: "Papangkorn Kewchan", role: "Data Lead" }),
      new TeamMember({
        username: "KritsanaSukhaworn026",
        name: "Kritsana Sukhaworn",
        role: "QA",
      }),
    ],
  }),
];

/** รายชื่อแบบเรียงเดี่ยว ใช้ตอนนับจำนวนหรือวนทั้งทีม */
export const TEAM = TEAM_GROUPS.flatMap((group) => group.members);
