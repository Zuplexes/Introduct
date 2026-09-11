import { Section } from "./ui.jsx";
import MemberCard from "./MemberCard.jsx";
import { TEAM } from "../data/team.js";

export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="Team"
      title="ทีมของเรา"
      sub="คนที่อยู่เบื้องหลังระบบ ตั้งแต่เตรียมข้อมูล เทรนโมเดล ไปจนถึงการดูแลระบบจริง"
    >
      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <MemberCard key={member.key} member={member} i={i} />
        ))}
      </div>
    </Section>
  );
}
