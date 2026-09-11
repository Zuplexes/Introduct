import Reveal from "./Reveal.jsx";

/** หัวข้อ section มาตรฐาน: eyebrow + title + คำอธิบาย แล้วตามด้วยเนื้อหา */
export default function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {sub && <p className="mt-4 leading-relaxed text-slate-400">{sub}</p>}
      </Reveal>
      {children}
    </section>
  );
}
