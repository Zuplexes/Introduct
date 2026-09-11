import { SITE } from "../../data/siteConfig.js";
import { to, useHashRoute } from "../../router.js";
import { GithubIcon } from "../common/Icon.jsx";

export default function Navbar() {
  const path = useHashRoute();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href={to("/")} className="flex items-center gap-2 font-bold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs text-slate-950">
            Z
          </span>
          {SITE.name}
        </a>

        {/* ponytail: ลิงก์สั้นพอที่จะโชว์ครบทุกจอ เลยไม่ทำเมนูแฮมเบอร์เกอร์ */}
        <div className="flex items-center gap-1 sm:gap-2">
          {SITE.nav.map((item) => (
            <a
              key={item.path}
              href={to(item.path)}
              aria-current={path === item.path ? "page" : undefined}
              className={`rounded-lg px-2.5 py-1.5 text-sm transition sm:px-3 ${
                path === item.path
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.githubOrg}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Org"
            className="ml-1 grid h-8 w-8 place-items-center rounded-lg border border-white/15 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
