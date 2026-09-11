// node --test src   (ไม่ต้องลง test framework, ใช้ของที่ Node มีอยู่แล้ว)
import test from "node:test";
import assert from "node:assert/strict";
import { TeamMember } from "./TeamMember.js";
import { PAIN_POINTS, SOLUTIONS } from "../data/content.js";
import { TEAM, TEAM_GROUPS } from "../data/team.js";

test("TeamMember สร้าง URL ของ GitHub ถูกต้อง", () => {
  const m = new TeamMember({ username: "octocat", name: "Ada L.", role: "ML Engineer" });
  assert.equal(m.profileUrl, "https://github.com/octocat");
  assert.equal(m.avatarUrl(128), "https://github.com/octocat.png?size=128");
  assert.equal(m.initial, "A");
});

test("สมาชิกทุกคนมี username ไม่ซ้ำกัน", () => {
  assert.equal(new Set(TEAM.map((m) => m.username)).size, TEAM.length);
});

test("ลำดับขั้นของทีมเรียง 1, 2, 3 ไม่ข้ามไม่ซ้ำ และทุกหมวดมีคน", () => {
  assert.deepEqual(
    TEAM_GROUPS.map((g) => g.level),
    TEAM_GROUPS.map((_, i) => i + 1)
  );
  for (const g of TEAM_GROUPS) assert.ok(g.size > 0, `หมวด ${g.title} ไม่มีสมาชิก`);
  assert.equal(
    TEAM.length,
    TEAM_GROUPS.reduce((n, g) => n + g.size, 0)
  );
});

test("ทุก Solution ผูกกับ PainPoint ที่มีอยู่จริง", () => {
  for (const s of SOLUTIONS) {
    assert.ok(s.solves.length > 0, `${s.name} ไม่ได้ผูกกับปัญหาข้อไหนเลย`);
    for (const p of s.solves) assert.ok(PAIN_POINTS.includes(p), `${s.name} อ้างถึงปัญหาที่ไม่มีอยู่`);
    assert.match(s.solvesLabel, /^แก้ปัญหาข้อ \d+/);
  }
});
