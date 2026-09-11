import { Reveal } from "./ui.jsx";
import { GITHUB_ORG } from "../data/team.js";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 max-w-full rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pb-32 sm:pt-32">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          AI/ML · Document Processing (OCR + NER)
        </Reveal>

        <Reveal i={1} as="h1" className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          เปลี่ยนเอกสารนับพัน ให้กลายเป็น
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {" "}ข้อมูลในไม่กี่วินาที
          </span>
        </Reveal>

        <Reveal i={2} as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          เราสร้างระบบที่อ่าน จำแนก และสกัดข้อมูลจากเอกสารกระดาษและภาพสแกนให้เป็นข้อมูลพร้อมใช้
          เพื่อลดงานคีย์ด้วยมือ และให้ทีมได้ใช้เวลาไปกับงานที่สร้างมูลค่าจริง
        </Reveal>

        <Reveal i={3} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            ดู GitHub Org
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            ดูตัวอย่างระบบ
          </a>
        </Reveal>
      </div>
    </header>
  );
}
