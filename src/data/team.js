import { TeamMember } from "../models/TeamMember.js";

/**
 * ลำดับใน array = ลำดับที่แสดงบนหน้าเว็บ
 * ชื่อที่แสดงดึงมาจากโปรไฟล์ GitHub ของแต่ละคน (คนที่ยังไม่ได้ตั้งชื่อไว้ ใส่ให้ตามที่แจ้งมา)
 * รูปโปรไฟล์มาจาก https://github.com/{username}.png ไม่ต้องเก็บไฟล์รูปในโปรเจกต์
 */
export const TEAM = [
  new TeamMember({
    username: "ChirasakS",
    name: "Chirasak Saengthana",
    role: "CEO",
  }),
  new TeamMember({
    username: "panupongsae",
    name: "Panupong S.",
    role: "MLOps",
  }),
  new TeamMember({
    username: "Athichanon",
    name: "Athichanon Arreefee",
    role: "CTO",
  }),
  new TeamMember({
    username: "SurasekPha",
    name: "Surasek Ph.",
    role: "AI Engineer",
  }),
  new TeamMember({
    username: "North1150",
    name: "Papangkorn Kewchan",
    role: "Data Lead",
  }),
  new TeamMember({
    username: "KritsanaSukhaworn026",
    name: "Kritsana Sukhaworn",
    role: "QA",
  }),
];
