import Reveal from "../common/Reveal.jsx";
import { GithubIcon } from "../common/Icon.jsx";

/**
 * การ์ดสมาชิก 1 คน — ทุก URL มาจากอ็อบเจกต์ TeamMember
 * @param {{ member: import("../../models/TeamMember.js").TeamMember, i?: number }} props
 */
export default function MemberCard({ member, i = 0 }) {
  return (
    <Reveal
      i={i}
      className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:bg-white/[0.06]"
    >
      {/* ตัวอักษรแรกอยู่ข้างหลังเสมอ ถ้ารูป GitHub โหลดไม่ได้ก็เห็นอันนี้แทน */}
      <div className="relative grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 ring-2 ring-white/10 transition group-hover:ring-cyan-400/60 sm:h-24 sm:w-24">
        <span className="text-xl font-semibold text-white/80">{member.initial}</span>
        <img
          src={member.avatarUrl(256)}
          alt={`รูปโปรไฟล์ GitHub ของ ${member.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-xs text-slate-400">{member.role}</p>

      <a
        href={member.profileUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
      >
        <GithubIcon />
        @{member.username}
      </a>
    </Reveal>
  );
}
