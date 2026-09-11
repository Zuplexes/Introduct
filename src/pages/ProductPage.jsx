import PageHeader from "../components/common/PageHeader.jsx";
import Reveal from "../components/common/Reveal.jsx";
import Solutions from "../components/sections/Solutions.jsx";
import { SOLUTIONS } from "../data/content.js";

// ลำดับการทำงาน สร้างจากรายชื่อโซลูชันจริง เพิ่ม/ลบโซลูชันแล้วแผนภาพนี้ตามเอง
const PIPELINE = ["ภาพเอกสาร / สแกน", ...SOLUTIONS.map((s) => s.name), "ข้อมูลพร้อมใช้"];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="โซลูชันของเรา"
        sub="ระบบคีย์ข้อมูลเอกสารด้วย OCR + NER ที่ออกแบบมาให้ต่อกันเป็นสายงานเดียว ตั้งแต่รับภาพเอกสาร จนได้ข้อมูลที่ตรวจสอบย้อนกลับได้"
      />

      <Solutions eyebrow="Capabilities" title="ทำอะไรได้บ้าง" sub={null} />

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h2 className="text-xl font-bold text-white">ลำดับการทำงาน</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {PIPELINE.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className={`rounded-xl border px-4 py-2.5 text-sm ${
                    i === 0 || i === PIPELINE.length - 1
                      ? "border-white/10 bg-slate-900/60 text-slate-300"
                      : "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                  }`}
                >
                  {step}
                </span>
                {i < PIPELINE.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate-400">
            ทุกขั้นตอนบันทึกผลลัพธ์ไว้ ทำให้ย้อนดูได้ว่าข้อมูลแต่ละฟิลด์มาจากส่วนไหนของเอกสาร
            และส่งต่อให้คนตรวจเฉพาะรายการที่ระบบยังไม่มั่นใจ
          </p>
        </Reveal>
      </section>
    </>
  );
}
