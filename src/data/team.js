import { TeamMember } from "../models/TeamMember.js";

/** ponytail: ยังเป็น placeholder — เปลี่ยนเป็น GitHub Org จริงของทีม */
export const GITHUB_ORG = "https://github.com/zuplex";

/**
 * ชื่อที่แสดง ดึงมาจากโปรไฟล์ GitHub ของแต่ละคน
 * (สองคนล่างยังไม่ได้ตั้งชื่อไว้บน GitHub — แก้ name ตรงนี้ได้เลย)
 * รูปโปรไฟล์มาจาก https://github.com/{username}.png ไม่ต้องเก็บไฟล์รูปในโปรเจกต์
 */
export const TEAM = [
  new TeamMember({
    username: "SurasekPha",
    name: "Surasek Ph.",
    role: "ML Engineer / Team Lead",
  }),
  new TeamMember({
    username: "ChirasakS",
    name: "Chirasak Saengthana",
    role: "ML Engineer (OCR)",
  }),
  new TeamMember({
    username: "Athichanon",
    name: "Athichanon Arreefee",
    role: "ML Engineer (NER)",
  }),
  new TeamMember({
    username: "North1150",
    name: "Papangkorn Kewchan",
    role: "Backend Developer",
  }),
  new TeamMember({
    username: "KritsanaSukhaworn026",
    name: "Kritsana Sukhaworn",
    role: "Data Annotator",
  }),
  new TeamMember({
    username: "panupongsae",
    name: "Panupong S.",
    role: "DevOps / MLOps",
  }),
];
