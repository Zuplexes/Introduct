import MeshGradientBg from "./MeshGradientBg.jsx";
import Reveal from "./Reveal.jsx";

/** หัวของหน้าย่อย (ไม่ใช่หน้าแรก) — ใช้ฉากหลังชุดเดียวกับ Hero แต่เตี้ยกว่า */
export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <MeshGradientBg />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{sub}</p>}
        </Reveal>
      </div>
    </header>
  );
}
