import { useEffect, useRef } from "react";

/**
 * ห่อเนื้อหาให้ fade-in / slide-up ตอนเลื่อนมาถึง
 * ผูก observer กับตัวเอง เลยทำงานถูกต้องแม้สลับหน้า (element ถูก mount ใหม่)
 * @param {{ i?: number, as?: string, className?: string, children: any }} props  i = ลำดับ ใช้หน่วงทีละใบ
 */
export default function Reveal({ i = 0, as: Tag = "div", className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className={className}>
      {children}
    </Tag>
  );
}
