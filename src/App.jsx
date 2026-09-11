import Hero from "./components/Hero.jsx";
import PainPoints from "./components/PainPoints.jsx";
import Solutions from "./components/Solutions.jsx";
import Team from "./components/Team.jsx";
import { useReveal } from "./components/ui.jsx";
import { GITHUB_ORG } from "./data/team.js";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-400/30">
      <Hero />
      <PainPoints />
      <Solutions />
      <Team />

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Zuplex · Document Processing (OCR + NER)</p>
          <a href={GITHUB_ORG} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            {GITHUB_ORG.replace("https://", "")}
          </a>
        </div>
      </footer>
    </div>
  );
}
