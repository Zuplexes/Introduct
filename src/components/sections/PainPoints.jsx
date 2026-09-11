import Icon from "../common/Icon.jsx";
import Reveal from "../common/Reveal.jsx";
import Section from "../common/Section.jsx";
import { PAIN_POINTS } from "../../data/content.js";

export default function PainPoints() {
  return (
    <Section
      id="pains"
      eyebrow="Pain Points"
      title="ปัญหาที่เราแก้ไข"
      sub="สิ่งที่ทีมปฏิบัติงานเจอทุกวันกับกองเอกสาร ก่อนจะมีระบบเข้ามาช่วย"
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PAIN_POINTS.map((p, i) => (
          <Reveal
            key={p.key}
            i={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <Icon d={p.icon} />
            </div>
            <h3 className="mt-5 font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
