import PageHeader from "../components/common/PageHeader.jsx";
import PillButton from "../components/common/PillButton.jsx";
import Reveal from "../components/common/Reveal.jsx";
import MemberCard from "../components/members/MemberCard.jsx";
import { TEAM, TEAM_GROUPS } from "../data/team.js";
import { SITE } from "../data/siteConfig.js";

export default function MembersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="ทีมของเรา"
        sub={`ทีม ${TEAM.length} คน แบ่งเป็น ${TEAM_GROUPS.length} ลำดับขั้น ตั้งแต่กำหนดทิศทาง ไปจนถึงดูแลข้อมูลและคุณภาพผลลัพธ์`}
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-16 sm:py-20">
        {TEAM_GROUPS.map((group) => (
          <Reveal key={group.key} className="relative border-l border-white/10 pl-6 sm:pl-10">
            {/* เลขลำดับขั้นคร่อมเส้นไว้ อ่านลำดับได้จากซ้ายมือทันที */}
            <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-slate-950 text-sm font-bold text-cyan-300">
              {group.level}
            </span>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{group.title}</h2>
              <span className="text-xs uppercase tracking-widest text-cyan-400">
                {group.titleEn}
              </span>
              <span className="ml-auto text-xs text-slate-500">{group.size} คน</span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              {group.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {group.members.map((member, i) => (
                <MemberCard key={member.key} member={member} i={i} />
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal className="mt-2 text-center">
          <p className="text-slate-400">โค้ดทั้งหมดของทีมอยู่บน GitHub</p>
          <PillButton href={SITE.githubOrg} external className="mt-5">
            ดู GitHub Org
          </PillButton>
        </Reveal>
      </section>
    </>
  );
}
