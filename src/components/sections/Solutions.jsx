import Icon from "../common/Icon.jsx";
import Reveal from "../common/Reveal.jsx";
import Section from "../common/Section.jsx";
import { SOLUTIONS } from "../../data/content.js";

/** @param {{ eyebrow?: string, title?: string, sub?: string }} props ปรับหัวข้อได้ตามหน้าที่เอาไปใช้ */
export default function Solutions({
  eyebrow = "Solutions",
  title = "โซลูชันของเรา",
  sub = "ชุดความสามารถที่ต่อกันเป็นสายงานเดียว ตั้งแต่รับภาพเอกสาร จนได้ข้อมูลที่ตรวจสอบย้อนกลับได้",
}) {
  return (
    <Section id="solutions" eyebrow={eyebrow} title={title} sub={sub}>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <Reveal
            key={s.key}
            i={i}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-violet-400/40 sm:p-7"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
              <Icon d={s.icon} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            <p className="mt-5 rounded-lg border border-white/5 bg-slate-900/60 px-4 py-3 text-xs text-cyan-300/90">
              {s.solvesLabel}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
