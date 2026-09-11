import MeshGradientBg from "../common/MeshGradientBg.jsx";
import PillButton from "../common/PillButton.jsx";
import Reveal from "../common/Reveal.jsx";
import { SITE } from "../../data/siteConfig.js";
import { to } from "../../router.js";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <MeshGradientBg />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:pb-32 sm:pt-28">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          AI/ML · {SITE.tagline}
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
          <PillButton href={SITE.githubOrg} external>
            ดู GitHub Org
          </PillButton>
          <PillButton href={to("/product")} variant="ghost">
            ดูตัวอย่างระบบ
          </PillButton>
        </Reveal>
      </div>
    </header>
  );
}
