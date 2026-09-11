import { Icon, Reveal, Section } from "./ui.jsx";
import { SOLUTIONS } from "../data/content.js";

export default function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="Solutions"
      title="โซลูชันของเรา"
      sub="ชุดความสามารถที่ต่อกันเป็นสายงานเดียว ตั้งแต่รับภาพเอกสาร จนได้ข้อมูลที่ตรวจสอบย้อนกลับได้"
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SOLUTIONS.map((s, i) => (
          <Reveal
            key={s.key}
            i={i}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-violet-400/40 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                <Icon d={s.icon} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
              </div>
            </div>
            <p className="mt-5 rounded-lg border border-white/5 bg-slate-900/60 px-4 py-3 text-xs text-cyan-300/90">
              {s.solvesLabel}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
