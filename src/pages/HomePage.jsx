import Hero from "../components/sections/Hero.jsx";
import PainPoints from "../components/sections/PainPoints.jsx";
import Solutions from "../components/sections/Solutions.jsx";
import PillButton from "../components/common/PillButton.jsx";
import Reveal from "../components/common/Reveal.jsx";
import { to } from "../router.js";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solutions sub="สามความสามารถที่ต่อกันเป็นสายงานเดียว ตั้งแต่รับภาพเอกสาร จนได้ข้อมูลพร้อมใช้" />

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">อยากรู้ว่าใครอยู่เบื้องหลัง</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-400">
            ทีมเล็กที่ทำตั้งแต่เตรียมข้อมูล เทรนโมเดล ไปจนถึงดูแลระบบบน production
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PillButton href={to("/members")}>ดูทีมของเรา</PillButton>
            <PillButton href={to("/product")} variant="ghost">
              ดูโซลูชันทั้งหมด
            </PillButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
