const STYLES = {
  primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  ghost: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
};

/**
 * ปุ่มทรงแคปซูล ใช้ทั้ง CTA และเมนู
 * @param {{ href: string, variant?: "primary"|"ghost", external?: boolean, className?: string, children: any }} props
 */
export default function PillButton({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : null)}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${STYLES[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
