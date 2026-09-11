import { PainPoint } from "../models/PainPoint.js";
import { Solution } from "../models/Solution.js";

export const PAIN_POINTS = [
  new PainPoint({
    id: 1,
    icon: "M3 6h18M3 12h18M3 18h12",
    title: "เอกสารล้นมือ คีย์ไม่ทัน",
    description:
      "ปริมาณเอกสารโตขึ้นทุกเดือน แต่กำลังคนเท่าเดิม งานคีย์ข้อมูลด้วยมือจึงขยายตามไม่ไหว",
  }),
  new PainPoint({
    id: 2,
    icon: "M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
    title: "คีย์ผิดเพราะเอกสารอ่านยาก",
    description:
      "ชื่อบริษัท เลขผู้เสียภาษี และตัวเลขในเอกสารภาษาไทย อ่านสลับกันได้ง่าย ความผิดพลาดหลุดไปถึงปลายทาง",
  }),
  new PainPoint({
    id: 3,
    icon: "M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z",
    title: "แยกประเภทเอกสารผิดตั้งแต่ต้นทาง",
    description:
      "ต้นฉบับกับสำเนาถูกสลับกันตั้งแต่ขั้นรับเอกสาร ทำให้ทุกขั้นตอนถัดไปพังตามกันเป็นลูกโซ่",
  }),
];

/** เข้าถึง pain point ตามเลขข้อ เพื่อผูกกับ Solution ด้านล่าง */
const pain = (id) => PAIN_POINTS.find((p) => p.id === id);

export const SOLUTIONS = [
  new Solution({
    name: "OCR Engine",
    icon: "M4 5h16v14H4zM8 9h8M8 13h5",
    description:
      "อ่านภาพเอกสารและใบแจ้งหนี้ แล้วแปลงเป็นข้อความที่ค้นหาและนำไปใช้ต่อได้อัตโนมัติ",
    solves: [pain(1)],
    benefit: "ลดงานคีย์ด้วยมือ ทำให้รับเอกสารปริมาณมากได้",
  }),
  new Solution({
    name: "Document Classification",
    icon: "M4 4h7v7H4zM13 13h7v7h-7zM17 4v7M13.5 7.5h7",
    description: "จำแนกประเภทเอกสารให้อัตโนมัติตั้งแต่ขั้นรับเข้า เช่น ต้นฉบับหรือสำเนา",
    solves: [pain(3)],
    benefit: "จัดเอกสารเข้าสายงานที่ถูกต้องตั้งแต่ต้นทาง",
  }),
  new Solution({
    name: "NER Extraction",
    icon: "M12 3v4M5 8l3 2M19 8l-3 2M7 20h10l-1-6H8z",
    description:
      "สกัดฟิลด์สำคัญออกจากเอกสาร เช่น ชื่อบริษัท เลขผู้เสียภาษี วันที่ และยอดเงิน ในรูปแบบพร้อมใช้",
    solves: [pain(2)],
    benefit: "ลดการอ่านผิดและพิมพ์ผิดจากการคีย์ด้วยมือ",
  }),
];
