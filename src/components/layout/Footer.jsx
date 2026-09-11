import { SITE } from "../../data/siteConfig.js";
import { to } from "../../router.js";
import { GithubIcon } from "../common/Icon.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {SITE.name} · {SITE.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {SITE.nav.map((item) => (
            <a key={item.path} href={to(item.path)} className="transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
          <a
            href={SITE.githubOrg}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-cyan-300"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
