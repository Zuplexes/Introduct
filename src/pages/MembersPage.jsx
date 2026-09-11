import PageHeader from "../components/common/PageHeader.jsx";
import PillButton from "../components/common/PillButton.jsx";
import Reveal from "../components/common/Reveal.jsx";
import MemberCard from "../components/members/MemberCard.jsx";
import { TEAM } from "../data/team.js";
import { SITE } from "../data/siteConfig.js";

export default function MembersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="ทีมของเรา"
        sub={`ทีม ${TEAM.length} คน ที่ทำตั้งแต่เตรียมข้อมูล เทรนโมเดล ไปจนถึงดูแลระบบบน production`}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <MemberCard key={member.key} member={member} i={i} />
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-slate-400">โค้ดทั้งหมดของทีมอยู่บน GitHub</p>
          <PillButton href={SITE.githubOrg} external className="mt-5">
            ดู GitHub Org
          </PillButton>
        </Reveal>
      </section>
    </>
  );
}
