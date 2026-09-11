/** ดวงไฟเบลอเป็นฉากหลังของหัวหน้าแต่ละหน้า — ตกแต่งล้วน ไม่รับ pointer event */
export default function MeshGradientBg() {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 max-w-full rounded-full bg-violet-600/20 blur-3xl" />
    </>
  );
}
