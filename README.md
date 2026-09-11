# Zuplex — Document Processing (OCR + NER)

Landing page ของทีม สร้างด้วย React + Tailwind (Vite)

## รันในเครื่อง

```bash
npm install     # ครั้งแรกครั้งเดียว
npm run dev     # เปิด http://localhost:5173
```

```bash
npm test        # เช็ค model/ข้อมูลทีม
npm run build   # build ลง dist/
npm run preview # ดู build จริงก่อน deploy
```

## แก้เนื้อหา

| จะแก้อะไร | ไฟล์ |
| --- | --- |
| สมาชิกทีม, GitHub Org | `src/data/team.js` |
| pain point / โซลูชัน | `src/data/content.js` |
| ข้อความ hero, ปุ่ม CTA | `src/components/Hero.jsx` |

รูปโปรไฟล์ดึงจาก `https://github.com/{username}.png` อัตโนมัติ ไม่ต้องอัปโหลดไฟล์รูป

## Deploy (GitHub Pages)

push ขึ้น branch `main` แล้ว workflow `.github/workflows/deploy.yml` build ให้เอง
ครั้งแรกต้องไปเปิดที่ **Settings → Pages → Source: GitHub Actions** ก่อน
